import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-end-activity',
  templateUrl: './end-activity.component.html',
  styleUrls: ['./end-activity.component.scss'],
})
export class EndActivityComponent implements OnInit {
  acivity: any
  endReason: any = null;
  name: string;

  generateTokenLoading = false;
  failedRequests: any = [];

  endActivityLoading = false;

  constructor(private popover: PopoverController, private service: CommonService,
    private storage: Storage) { }

  ngOnInit() {
    this.acivity = "Walking"
    this.name = this.service.getEmpObject().name.split(' ')[0]
  }
  closePopover() {
    this.popover.dismiss();
  }
  radioGroupChange(e) {

    this.endReason = e.detail.value
  }
  async modalSubmit() {
    let empObj = this.service.getEmpObject()

    let targetObj = {
      TargetID: empObj.targetId,
      PSNumber: empObj.psNo,
      ActivityType: empObj.currentActivity,
      TargetKM: empObj.targetKm,
      TargetSteps: empObj.targetSteps,
      isCompleted: false,
      isEnded: true,
      ReasonForEnding: this.endReason,
      CurrentKM: empObj.currentKm,
      currentSteps: empObj.currentSteps,
      TotalTimeTaken: ""
    }

    // var data=JSON.stringify(this.empObj )

    if (localStorage.getItem('access_token')) {
      // this.service.showLoading().then(() => {
      this.endActivityLoading = true
      console.log('Loading...')
      this.service.modifyGoal(targetObj).subscribe((res) => {
        this.storage.ready().then(() => {
          this.storage.remove('empObj')
          this.storage.remove('goalDetails')
          this.storage.remove('leaderboard')
          this.storage.remove('profile')
        })

        this.popover.dismiss();
        console.log('Success')
        this.service.dismissLoading();
        this.service.set("updateActivity", "")
        this.endActivityLoading = false
      }, async (error) => {
        console.log(error.error.text)

        this.service.dismissLoading();
        if (error.error.text === 'Goal Updated Successfully!') {

          this.storage.ready().then(() => {
            this.storage.set("currentSteps", '0')
            this.storage.set("currentKm", '0')
            this.storage.remove('empObj')
            this.storage.remove('goalDetails')
            this.storage.remove('leaderboard')
            this.storage.remove('profile')
            this.storage.remove('userData')
            this.storage.remove('isPaused')
            this.storage.remove('empObjBefore')

            this.service.setProgressStatus(false)
            this.service.setEmpObject(null)
            this.service.setUserData(null)
            let params: any = {};
            params.callBackFn = 'getEmpDetails';
            this.service.eventMessage.next(params)
            this.popover.dismiss();
          })

        }

        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.generateToken('modalSubmit')
        }
        // this.popover.dismiss();

        this.service.set("updateActivity", targetObj)
        this.endActivityLoading = false
      })

      // })

    }
    else {
      this.generateToken('modalSubmit')
    }
  }

  generateToken(retryFuncName?: any, id?: any) {
    console.log('retryFuncName', retryFuncName)
    if (retryFuncName) {
      this.failedRequests.push(retryFuncName);
    }
    if (this.generateTokenLoading) {
      return;
    }
    this.generateTokenLoading = true;
    this.service.showLoading();
    this.service.generateToken().subscribe((response) => {
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem('access_token', response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)
      const that = this;
      if (this.failedRequests && this.failedRequests.length > 0) {
        console.log('failedRequests', this.failedRequests)
        this.failedRequests.forEach(function (value, index) {
          console.log('value', value)
          that[value](id);
        }, this)
        that.failedRequests = [];
      }
      this.generateTokenLoading = false;
      this.service.dismissLoading();
    }, (error) => {
      this.service.dismissLoading();
      this.generateTokenLoading = false;
      console.log('Token Error in Home:' + JSON.stringify(error))
    },
    );
  }


}
