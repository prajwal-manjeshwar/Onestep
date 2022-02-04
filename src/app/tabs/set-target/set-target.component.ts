import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, NavController, IonSlides } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { SelectActivityAlertComponent } from '../select-activity-alert/select-activity-alert.component';
import { TargetConfirmComponent } from '../target-confirm/target-confirm.component';
import { Storage } from '@ionic/storage';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-set-target',
  templateUrl: './set-target.component.html',
  styleUrls: ['./set-target.component.scss'],
})
export class SetTargetComponent implements OnInit, OnDestroy {
  @ViewChild('theSlides', { read: IonSlides }) slides: IonSlides;
  kmVal: number;

  setTargetLoading = false;
  subscription: Subscription;
  isActive = false;

  constructor(private popover: PopoverController, private storage: Storage,
    private router: Router, public service: CommonService, private nav: NavController) {
    this.subscription = this.service.eventMessage.subscribe((params) => {
      if (params && params.callBackFn == 'targetConfirmPopup') {
        this.targetConfirmPopup();
      }
    })

  }

  selectedActivity: string = null;
  walkButtonColor: string;
  jogButtonColor: string;
  page: number = 1;

  generateTokenLoading = false;
  failedRequests: any = [];

  getTodaysDate() {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    return (year + "/" + month + "/" + date);
  }

  async setTarget() {
    this.service.set('isPaused', 'false')
    // let empObj = new Employee(null,null,null,null,null,null,null,null,null,null);

    let targetObj = {
      PSNumber: this.service.getEmpObject().psNo,
      ActivityType: this.selectedActivity,
      TargetKM: this.kmVal,
      TargetSteps: Math.round(this.kmVal * 1232),
      GoalStartdate: this.getTodaysDate()
    }
    console.log("targetObj", targetObj);

    if (localStorage.getItem('access_token')) {
      this.setTargetLoading = true;
      // this.service.showLoading().then(a => console.log('Loading...'))

      this.service.setTarget(targetObj).subscribe(async data => {
        this.service.set("ActivityDuration", "")
        this.service.set("isPaused", 'false')
        let result = data
        //    console.log(""result)
        if (result[0].length > 0) {

          this.popover.create({
            component: TargetConfirmComponent,
            cssClass: 'targetConfirmPopover', backdropDismiss: false
          }).then((popoverElement) => {
            popoverElement.present();
          })
        }
        this.setTargetLoading = false;
      }, (error) => {
        console.log("error--+" + JSON.stringify(error));

        if (error.error.text === "Goal set Successfully!") {
          this.storage.ready().then(() => {
            // this.storage.remove('userData')
            // this.storage.remove('empObj')
            // this.storage.remove('goalDetails')
            // this.storage.set("currentSteps", '0')
            // this.service.set('goalStartDate', targetObj.GoalStartdate)
            // this.service.setGoalStartDate(targetObj.GoalStartdate)
            // this.service.currentSteps = 0

            // let empObj = this.service.getEmpObject()
            // empObj.currentActivity = this.selectedActivity
            // empObj.targetKm = this.kmVal
            // empObj.targetSteps = Math.round(this.kmVal * 1232)
            // empObj.currentSteps = 0
            // empObj.currentKm = 0;
            // let userData = { empObj: {}, goalDetails: {} }
            // userData.empObj = empObj
            // this.service.setEmpObject(empObj)
            // this.service.setUserData(userData)

          })
          // this.service.setUserData(null)
          let params: any = {};
          params.callBackFn = 'getEmpDetails';
          params.callBackParams = 'targetConfirm';
          this.service.eventMessage.next(params)
        }
        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.generateToken('setTarget');

        }
        this.setTargetLoading = false;
        // this.service.dismissLoading();
      })
    }
    else {
      this.generateToken('setTarget')
    }


  }

  targetConfirmPopup() {
    this.popover.create({
      component: TargetConfirmComponent,
      cssClass: 'targetConfirmPopover', backdropDismiss: false
    }).then((popoverElement) => {
      popoverElement.present();
    })
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.isActive = true;
    this.kmVal = 1
    console.log('In Set Target')
    this.page = 1;

  }

  ionViewWillLeave() {
    this.isActive = false;
    // this.service.eventMessage.unsubscribe()
  }

  checkValue() {
    var value = this.kmVal
    console.log(value)
    if (value <= 0) {
      alert('Cannot set target')
    }
  }

  selectActivity(slides, activity) {
    this.selectedActivity = activity
    // if (activity === 'Walking') {
    //   this.walkButtonColor = 'rgba(0, 189, 242, 0.1)'
    //   this.jogButtonColor = 'white'
    // }
    // else {
    //   this.walkButtonColor = 'white'
    //   this.jogButtonColor = 'rgba(0, 189, 242, 0.1)'
    // }
    // alert(activity)
    slides.slideNext();
    this.page = 2
  }


  moveToNext(slides) {
    console.log(this.selectedActivity)
    if (this.selectedActivity) {
      slides.slideNext();
      this.page = 2
    }
    else {
      console.log('Select Activity')
      this.popover.create({
        component: SelectActivityAlertComponent,
        cssClass: 'permissionPopover', backdropDismiss: true
      }).then((popoverElement) => {
        popoverElement.present();
      })
    }

  }
  increaseValue() {
    console.log(this.kmVal)
    // alert(this.kmVal)
    // var value = parseInt(this.kmVal, 10);
    // value = isNaN(value) ? 0 : value;
    var value = this.kmVal;
    value++;
    this.kmVal = value;
  }

  decreaseValue() {
    //  var value = parseInt(this.kmVal, 10);
    // value = isNaN(value) ? 0 : value;
    var value = this.kmVal;
    if (value > 1) {
      value--;
    }
    this.kmVal = value;
  }
  goBack() {
    if (this.page === 1) {
      //this.router.navigate(['../tabs/tab2']);
      this.nav.back();
    }
    else {
      this.page = 1
      this.selectedActivity = null
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
