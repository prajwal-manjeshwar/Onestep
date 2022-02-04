import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Employee } from 'src/app/models/Employee';
import { CommonService } from 'src/app/services/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modify-goal',
  templateUrl: './modify-goal.component.html',
  styleUrls: ['./modify-goal.component.scss'],
})
export class ModifyGoalComponent implements OnInit {

  constructor(private popover: PopoverController, private storage: Storage,
    private service: CommonService) { }
  isYellowCard: boolean = true;

  currentActivity: string;
  targetkm: number;

  activity: string;
  target: number;
  id: number;

  result: any;

  empObj: Employee;
  currentSteps: any;

  generateTokenLoading = false;
  modifyLoading = false
  failedRequests: any = [];

  ngOnInit() {
    this.isYellowCard = false
    let obj = this.service.getEmpObject()
    if (obj) {
      this.empObj = JSON.parse(JSON.stringify(obj))
    }

    this.currentActivity = this.empObj.currentActivity
    this.targetkm = this.empObj.targetKm
    this.activity = this.currentActivity;
    this.target = this.targetkm
    this.id = this.empObj.targetId
  }
  closePopover() {
    this.popover.dismiss();
  }
  increaseValue() {
    this.isYellowCard = false
    this.target += 1
  }

  decreaseValue() {
    console.log(this.target)
    let currentkm = this.service.getEmpObject().currentKm
    // let currentkm = Math.floor(4.2)
    console.log(currentkm)
    if (this.target > currentkm + 1) {
      this.isYellowCard = false
      this.target -= 1
    }
    else {
      this.isYellowCard = true
      this.target = Math.floor(currentkm) + 1
    }
    console.log('target', this.target)
  }
  selectActivity(e) {
    console.log(e)
    this.activity = e.detail.value;
  }
  async submit() {
    console.log(this.id + ' ' + this.activity + ' ' + this.target)
    let targetObj = {
      TargetID: this.empObj.targetId,
      PSNumber: this.empObj.psNo,
      ActivityType: this.activity,
      TargetKM: this.target,
      TargetSteps: Math.round(this.target * 1232),
      currentSteps: this.currentSteps,
      duration: await this.service.get("ActivityDuration")
    }
    this.empObj.currentActivity = this.activity;
    this.empObj.targetKm = this.target;
    this.empObj.currentSteps = this.currentSteps
    this.empObj.targetSteps = Math.round(this.target * 1232)
    console.log(this.empObj)

    // var data=JSON.stringify(this.empObj )
    // this.popover.dismiss(this.empObj);

    if (localStorage.getItem('access_token')) {
      this.service.showLoading().then(() => {
        console.log('Loading...')
        this.modifyLoading = true
        this.service.modifyGoal(targetObj).subscribe(data => {
          console.log('modifyGoal', data);
          this.service.dismissLoading();
          let result = data;
          if (result[0].length > 0) {
            this.empObj.currentActivity = this.activity;
            this.empObj.targetKm = this.target

            this.service.setEmpObject(this.empObj)

            console.log(result)
          }
          this.modifyLoading = false
        }, (error) => {
          console.log('error', error)
          this.service.dismissLoading();
          this.modifyLoading = false
          if (error.status === 401) {
            // localStorage.removeItem('access_token')

            this.generateToken('submit')
          }
          if (error.error.text === 'Goal Updated Successfully!') {
            console.log('empObj', this.empObj)
            this.popover.dismiss(this.empObj);
          }

        }
        )
      })
    }
    else {
      this.generateToken('submit')
    }

  }
  // ----- Value should not be less than the current progress ----- //
  checkValue() {
    console.log(this.target)
    let currentkm = this.service.getEmpObject().currentKm
    // let currentkm = Math.round(4.2)
    console.log(currentkm)
    if (this.target < currentkm) {
      this.isYellowCard = true
      this.target = Math.floor(currentkm) + 1
    }
    else {
      this.isYellowCard = false
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
