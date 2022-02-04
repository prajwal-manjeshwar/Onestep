import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController, Platform, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EndActivityComponent } from '../end-activity/end-activity.component';
import { ModifyGoalComponent } from '../modify-goal/modify-goal.component';
import { PauseActivityComponent } from '../pause-activity/pause-activity.component';
import { TargetAchievedComponent } from '../target-achieved/target-achieved.component';
import { CommonService } from 'src/app/services/common.service';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PermissionAlertComponent } from '../permission-alert/permission-alert.component';
import { Storage } from '@ionic/storage';
import { interval, Subscription } from 'rxjs';
import { HealthKit, HealthKitOptions } from '@ionic-native/health-kit/ngx';
import { Health } from '@ionic-native/health/ngx';
import { Employee } from 'src/app/models/Employee';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-activity-statistics',
  templateUrl: './activity-statistics.component.html',
  styleUrls: ['./activity-statistics.component.scss'],

})
export class ActivityStatisticsComponent implements OnInit {
  inProgress: boolean;
  name: any;
  percentage: number;
  currentActivity;
  targetKm: number;
  currentKm: number;
  currentSteps: number;
  targetSteps: number;
  isPaused: boolean;
  activityStartTime: any;

  milesColor: string;
  milesText: string;
  kmColor: string;
  kmText: string;
  showTargetKm: number;
  showCurrentKm: number;
  metric: string = 'k';

  pedometerColor: string;
  pedometerText: string;
  healthColor: string;
  healthText: string;

  updateActivityCount: number = 0;
  updateStorageCount: number = 0;

  popoverPresent: boolean = false;
  permissionStatus: boolean = true;
  showSpinner: boolean = false;
  isPedometerRunning: boolean = false;

  empObj: Employee;

  failedRequests: any = [];
  generateTokenLoading = false;

  public changeMetric(metric) {
    this.metric = metric
    if (metric === 'm') {
      this.milesColor = '#00008C'
      this.milesText = 'white'
      this.kmColor = 'white'
      this.kmText = '#00008C'
      this.showTargetKm = Math.round((this.targetKm * 0.621371) * 10) / 10
      this.showCurrentKm = Math.round((this.currentKm * 0.621371) * 10) / 10
    }
    else {
      this.milesColor = 'white'
      this.milesText = '#00008C'
      this.kmColor = '#00008C'
      this.kmText = 'white'
      this.showTargetKm = this.targetKm
      this.showCurrentKm = this.currentKm
    }
  }

  now: any
  goalStartDate: Date;
  pluginSelected = 'h';
  subscription: Subscription;
  msgSubscription: Subscription;
  mobileOs: string;
  source: any;
  monitorSampleTypeLoaded = false;
  healthDataLoading = false;
  isHealthAvailable = false;
  isHealthRequested = false;
  healthAvailableLoading = false;
  healthAuthorizationLoading = false;
  alertShowing = false;
  installAppPopupShowing = false;
  authorizationPopupShowing = false;
  goalResumeDate: any;
  goalCreatedDate: any;
  modifyGoalLoading = false;
  lastEndDate: any;
  previousSteps: number;
  previousKms: number;
  updateActivityLoading = false;
  currentUnit: any;
  targetCompletedLoading = false;

  async changePlugin(pluginSelected) {
    await this.stopWalking(true)
    this.pluginSelected = pluginSelected
    await this.service.set('pluginSelected', this.pluginSelected)
    this.pageInit()
  }

  constructor(private popover: PopoverController, private androidPermissions: AndroidPermissions,
    private route: Router, public service: CommonService, public ngzone: NgZone,
    private storage: Storage, private platform: Platform,
    private healthKit: HealthKit, private health: Health, private alertController: AlertController,
    private device: Device) {
  }

  ngOnInit() {
    this.msgSubscription = this.service.eventMessage.subscribe((params) => {
      console.log('params', params)
      if (params && params.callBackFn == 'targetAchivedPopup') {
        this.targetAchivedPopup(params.targetObj);
      }
    })

    let empObj = this.service.getEmpObject()

    var permissionStatus
    this.service.get("permissionStatus").then(data => {
      permissionStatus = data
      console.log(permissionStatus)
      if (permissionStatus === null || permissionStatus === undefined) {
        permissionStatus = false
      }

      let deviceDetails = {
        PSNumber: empObj.psNo,
        DeviceName: this.device.manufacturer,
        OsVersion: this.device.platform + ' ' + this.device.version,
        ModelNumber: this.device.model,
        PermissionStatus: permissionStatus,
        AppVersion: "1.0"
      }
      // let deviceDetails = {
      //   PSNumber: empObj.psNo,
      //   DeviceName: "Apple",
      //   OsVersion: "14",
      //   ModelNumber: "iPhone 6s",
      //   PermissionStatus: permissionStatus,
      //   AppVersion: "1.0"
      // }
      //alert(JSON.stringify(deviceDetails))
      console.log(JSON.stringify(deviceDetails))

      this.service.logDetails(deviceDetails).subscribe(response => {
        //alert(JSON.stringify(response))
      }, (error) => {
        console.log(error.error.text)
      })
    })


  }

  ionViewWillEnter() {
    //
    if (!this.inProgress) {
      this.pageInit();
    }
  }

  async initiaizeUI() {

    let empObj = this.service.getEmpObject()
    // this.inProgress = true;
    // console.log(empObj)
    // this.inProgress= true
    // this.name=this.service.getEmpObject().name.split(' ')[0]
    this.name = this.service.getEmpObject().name

    // ----- If there is ongoing activity then show the details. Else show the page to set new target. ----- //
    if (empObj.currentActivity != null) {
      this.currentActivity = empObj.currentActivity
      this.targetKm = empObj.targetKm
      this.currentKm = empObj.currentKm
      this.showTargetKm = this.targetKm
      this.showCurrentKm = this.showCurrentKm
      this.currentSteps = empObj.currentSteps
      this.targetSteps = empObj.targetSteps
      // this.percentage = Math.floor((this.currentSteps / this.targetSteps) * 100);
      this.percentage = Math.floor((this.currentKm / this.targetKm) * 100);
      this.goalStartDate = await this.service.get('goalStartDate');
      this.changeMetric('k')
    }
    else {
      this.inProgress = false
    }
  }

  async pageInit() {

    this.goalResumeDate = new Date();
    this.updateStorageCount = 0;
    this.updateActivityCount = 0;

    this.monitorSampleTypeLoaded = false;
    this.healthDataLoading = false;
    this.isHealthAvailable = false;
    this.isHealthRequested = false;
    this.healthAvailableLoading = false;
    this.healthAuthorizationLoading = false;
    this.alertShowing = false;
    this.installAppPopupShowing = false;
    this.authorizationPopupShowing = false;
    this.modifyGoalLoading = false;
    this.updateActivityLoading = false;

    let userData = this.service.getUserData()

    if (userData && userData.empObj) {
      let empObj = userData.empObj
      this.previousKms = empObj.currentKm || 0
      this.previousSteps = empObj.currentSteps || 0
    }

    this.inProgress = this.service.getProgressStatus()

    let pluginSelected = await this.service.get('pluginSelected')
    if (pluginSelected) {
      this.pluginSelected = pluginSelected
    }

    this.mobileOs = await this.service.get('Mode')

    if (this.mobileOs == 'android' || !this.platform.is('cordova')) {
      this.source = interval(2000);
    } else {
      this.source = interval(3000);
    }

    if (this.pluginSelected === 'h') {
      this.configBgProcess()
    }

    if (this.mobileOs == 'ios' && this.pluginSelected === 'h') {
      this.monitorSampleType();
    }

    this.popoverPresent = false

    let pauseBoolean = await this.service.get('isPaused')

    if (pauseBoolean === 'false') {
      this.isPaused = false
    }
    else if (pauseBoolean === 'true') {
      this.permissionStatus = true
      this.isPaused = true
    }
    else {
      this.permissionStatus = true
      this.isPaused = false
    }

    // alert(this.isPaused)
    if (this.inProgress) {
      this.initiaizeUI()
      if (!this.isPaused && this.pluginSelected === 'h') {
        this.subscribeHealthPlugin();
      } else if (!this.isPaused && this.pluginSelected === 'p') {
        this.subscribePedometer();
      }
    }
  }

  async monitorSampleType(sampleType = 'HKQuantityTypeIdentifierStepCount') {
    const that = this;
    this.healthKit.monitorSampleType({ sampleType: sampleType }).then(function (value) {
      if (sampleType == 'HKQuantityTypeIdentifierDistanceWalkingRunning') {
        that.monitorSampleTypeLoaded = true;
      }
      if (!that.monitorSampleTypeLoaded) {
        that.monitorSampleType('HKQuantityTypeIdentifierDistanceWalkingRunning')
      }
    }.bind(this), (error) => {
      console.log('monitorSampleType', error)
    })
  }

  configBgProcess() {
    this.platform.pause.subscribe(() => {
      if (!this.isPaused && this.inProgress && this.pluginSelected === 'h') {
        this.subscription.unsubscribe()
        this.source = interval(60000)
        this.subscribeHealthPlugin()
      }
    });

    //Subscribe on resume i.e. foreground 
    this.platform.resume.subscribe(() => {
      if (!this.isPaused && this.inProgress && this.pluginSelected === 'h') {
        this.subscription.unsubscribe()
        if (this.mobileOs == 'android') {
          this.source = interval(2000);
        } else {
          this.source = interval(3000);
        }
        this.subscribeHealthPlugin()
      }
    });
  }

  // ----- Update the current progress in local storage and backend with API call when moving to another tab ----- //
  ionViewWillLeave() {

    if (this.service.getProgressStatus() && this.inProgress) {
      this.updateEmpObj()
      this.updateStorage()
      this.updateActivity()
      this.service.updateTeamDetails()
    }
  }

  subscribeHealthPlugin() {
    // this.service.setWalkStartTime();
    // this.service.backgroundDetection();
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    this.subscription = this.source.subscribe(val => {
      this.initiateHealthActivity()
    });
  }

  initiateHealthActivity() {
    if (this.isHealthAvailable) {
      this.getHealthAuthorization();
    } else {
      this.getHealthAvailable()
    }
  }

  async getHealthAvailable(callBackFn = 'getHealthAuthorization', callBackParams?: any) {
    if (this.healthAvailableLoading) {
      return;
    }
    this.healthAvailableLoading = true;
    const that = this;
    this.health.isAvailable().then(function (response) {
      that.isHealthAvailable = !!response;
      that.healthAvailableLoading = false;
      if (response) {
        that[callBackFn](callBackParams);
      } else {
        that.stopTimer();
        that.showInstallAppPopup();
      }
    }, (error) => {
      // alert(JSON.stringify(error))
      this.healthAvailableLoading = false;
      this.service.showToast('Something went wrong, please try again');
      this.isPaused = true
      this.service.set('isPaused', 'true').then(function () {
        this.stopWalking(true)
      }.bind(this))
    })
  }

  async getHealthAuthorization(callBackFn = 'getHealthData', callBackParams = 'steps') {
    if (this.healthAuthorizationLoading) {
      return;
    }
    const that = this;
    this.healthAuthorizationLoading = true;
    this.health.requestAuthorization([{ read: ['steps', 'distance'] }
    ]).then(function (response) {
      // console.log('getHealthAuthorization response', response)
      that.isHealthRequested = true;
      that.service.set("permissionStatus", true)
      that.healthAuthorizationLoading = false;
      that[callBackFn](callBackParams);
    }.bind(this), (error) => {
      console.log('getHealthAuthorization error', error)
      this.healthAuthorizationLoading = false;
      if (error.includes('Permission denied: android.permission.ACTIVITY_RECOGNITION') ||
        error.includes('Permission denied: android.permission.ACCESS_FINE_LOCATION') ||
        error.includes('User cancelled the dialog')) {
        that.stopTimer();
        that.showAuthorizationPopup(error);
      } else {
        // alert(JSON.stringify(error))
        this.isPaused = true
        this.service.set('isPaused', 'true').then(function () {
          this.stopWalking(true)
        }.bind(this))
        this.service.showAlert('Permission denied', '', 'Something went wrong, ' +
          'please grant permission to track your activity');
      }
    })
  }

  async getHealthData(dataType = 'steps') {


    const that = this;
    //that.service.set("permissionStatus", true)
    if (this.healthDataLoading) {
      return;
    }

    if (!this.currentUnit) {
      this.currentUnit = 'steps'
    } else if (this.currentUnit == 'steps') {
      this.currentUnit = 'distance'
    } else if (this.currentUnit == 'distance') {
      this.currentUnit = 'steps'
    }

    this.healthDataLoading = true;
    let startDate: any;

    if (this.lastEndDate > this.goalResumeDate) {
      startDate = this.lastEndDate
    } else {
      startDate = this.goalResumeDate
    }

    const params: any = {};
    params.startDate = startDate;
    params.endDate = new Date()
    params.dataType = this.currentUnit;
    params.limit = 1000;
    // console.log('params', params)
    this.health.query(params).then(function (value) {
      console.log('getHealthData', value);
      this.ngzone.run(async () => {
        if (!value || (value && value.length == 0)) {
          return;
        }
        if (this.currentUnit == 'steps') {
          let steps = 0;
          value.forEach(function (res) {
            steps = Number(res.value) + steps;
          })
          if (steps > 0) {
            this.currentSteps = steps + this.previousSteps
          }
        } else if (this.currentUnit == 'distance') {
          var km = 0;
          value.forEach(function (res) {
            km = Number(res.value) + km
          })
          km = km / 1000;
          if (km > 0) {
            this.currentKm = km + this.previousKms
          }
        }

        this.processData();

        if (this.currentSteps < this.targetSteps && dataType == 'distance') {
          let diffMs = params.endDate - params.startDate;
          let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
          if (diffMins > 120) {
            this.previousSteps = this.currentSteps;
            this.previousKms = this.currentKm;
            this.lastEndDate = params.endDate;
          }
        }
      });
      this.healthDataLoading = false;
    }.bind(this), (error) => {
      console.log('getHealthData error', error);
      this.healthDataLoading = false;
      if (error == 'You must call requestAuthorization() before query()') {
        this.isHealthRequested = false;
      } else {
        this.isPaused = true
        this.service.set('isPaused', 'true').then(function () {
          that.stopWalking(true)
        })
        this.service.showAlert('Something went wrong, please try again')
      }
    })
  }


  async processData() {
    this.inProgress = this.service.getProgressStatus()
    if (!this.inProgress) {
      return;
    }
    this.showSpinner = false;
    this.changeMetric(this.metric)

    // this.percentage = Math.floor((this.currentSteps / this.targetSteps) * 100);
    this.percentage = Math.floor((this.currentKm / this.targetKm) * 100);

    this.updateEmpObj();

    if (Math.floor(this.currentSteps / 25) > this.updateStorageCount) {
      this.updateStorageCount = Math.floor(this.currentSteps / 25)
      this.updateStorage()
    }

    if (this.currentSteps >= this.targetSteps) {
      this.targetAcheived();
      return;
    }

    if (Math.floor(this.currentSteps / 250) > this.updateActivityCount) {
      this.updateActivityCount = Math.floor(this.currentSteps / 250);
      console.log('250 steps API call')
      this.updateActivity();
      this.service.updateTeamDetails()
    }

  }

  // ----- Pedometer plugin usage ----- //
  async subscribePedometer() {
    this.activityStartTime = new Date();
    // this.service.startTimer()
    // if (this.subscription) {
    //   this.subscription.unsubscribe()
    // }
    // this.subscription = this.service.startPedometerUpdates
    this.service.pedometerObservable = Pedometer.startPedometerUpdates()
      .subscribe(data => {
        this.isPedometerRunning = true
        this.permissionStatus = true
        console.log(JSON.stringify(data))
        this.ngzone.run(async () => {
          this.permissionStatus = true
          // var steps = data['numberOfSteps'] + 6500
          var steps = data['numberOfSteps']
          //console.log('No Steps: ' + steps)

          if (steps > 0) {
            this.currentSteps = steps + this.previousSteps
            // this.service.numbOfSteps = this.currentSteps

            if (this.service.isAppResumed) {
              this.service.get('userData').then(result => {
                let newData = result.empObj
                let newUpdatedStepCount = newData.currentSteps
                console.log('newUpdatedStepCount: ', newUpdatedStepCount)

                if (this.currentSteps > newUpdatedStepCount) {
                  console.log("Calling update activity with* ", this.currentSteps, " *steps")
                }

                this.service.isAppResumed = false
                // console.log('isAppResumed(ActvStats):',this.service.isAppResumed)
              })
            }

            this.currentKm = +(this.currentSteps / 1232).toFixed(2)
          }
          this.processData();
        })

      }, async error => {
        // this.permissionStatus = false
        let osName = await this.service.get('Mode')
        console.log(JSON.stringify(error))
        if ((osName === 'android' && error.code === 5)) {
          this.permissionStatus = false
          this.popover.create({
            component: PermissionAlertComponent,
            cssClass: 'permissionPopover', backdropDismiss: true
          }).then(async (popoverElement) => {
            popoverElement.present();
            // popoverElement.onDidDismiss().then(() => {
            //   this.ionViewWillEnter()
            // })
            const { data } = await popoverElement.onDidDismiss();
            if (data === 'reload') {
              await this.stopWalking(true)
              this.pageInit()
            }
          })
        }

        if ((osName === 'ios')) {
          this.permissionStatus = true
          this.popover.create({
            component: PermissionAlertComponent,
            cssClass: 'permissionPopover', backdropDismiss: true
          }).then(async (popoverElement) => {
            popoverElement.present();
            popoverElement.onDidDismiss().then(() => {
              this.permissionStatus = true
            })
          })
        }
      })
  }

  targetAcheived() {
    this.stopWalking(false, false, true).then(() => {
      this.targetCompleted();
    })
  }

  targetAchivedPopup(targetObj) {
    if (!this.popoverPresent) {
      this.popoverPresent = true
      this.popover.create({
        component: TargetAchievedComponent,
        cssClass: 'targetActivityPopover', backdropDismiss: false,
        componentProps: { targetObj: targetObj }
      }).then((popoverElement) => {
        popoverElement.present();
      })
    }
  }

  async endActivity() {
    // this.currentKm=1;
    if (this.currentSteps >= this.targetSteps) {
      this.targetAcheived()
    } else {
      this.service.updateTeamDetails()
      this.popover.create({
        component: EndActivityComponent,
        cssClass: 'endActivityPopover', backdropDismiss: false
      }).then((popoverElement) => {
        popoverElement.present();
        popoverElement.onDidDismiss().then((data) => {
          if (!this.service.getProgressStatus()) {
            this.inProgress = false;
            this.stopWalking(false)
          }
        })
      })
    }
  }

  async stopWalking(status, updateActivity = false, updateTeam = false) {
    this.isPedometerRunning = false
    // this.inProgress = status
    if (!status) {
      this.isPaused = true
      this.service.set('isPaused', 'true')
    }

    if (this.pluginSelected === 'h') {
      this.stopTimer()
    } else if (this.pluginSelected === 'p') {
      await Pedometer.stopPedometerUpdates()
      // this.service.stopTimer()
    }
    if (this.inProgress) {
      this.updateEmpObj()
      this.updateStorage()
    }
    if (updateActivity) {
      this.updateActivity()
    }
    if (updateTeam) {
      this.service.updateTeamDetails()
    }


    // let duration = this.durationBtwDates()
    // if (!status)
    //  duration="1hr30min";
    //  this.currentSteps=400;
    //   this.service.set("ActivityDuration", duration)
    // this.service.set("currentSteps", this.currentSteps.toString())
  }

  async durationBtwDates() {
    var msec = this.now - this.activityStartTime;
    var mins = Math.floor(msec / 60000);
    var hrs = Math.floor(mins / 60);
    var days = Math.floor(hrs / 24);
    var yrs = Math.floor(days / 365);
    let pastDuration = await this.service.get("ActivityDuration")
    if (pastDuration != "" && pastDuration != null) {
      console.log(' Past Duration: ' + pastDuration)
      //  past duration to be added with current
      let duration = pastDuration.split(' ')
      if (duration[1] === 'days,') {
        days += +duration[0]
        hrs += +duration[2].split(':')[0]
        mins += +duration[2].split(':')[1]
      }
      else {
        hrs += +duration[0].split(':')[0]
        mins += +duration[0].split(':')[1]
      }

    }
    if (days > 0)
      return (days + " days, " + hrs + ":" + mins);
    else {
      let HH = hrs > 0 ? hrs : "00"
      let MM = mins > 0 ? mins : "00"
      return (HH + ":" + MM);
    }
  }

  async doRefresh(event) {

    await this.stopWalking(true)
    this.pageInit()

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }


  // async restartPedometer() {
  // Pedometer.stopPedometerUpdates().then(() => {
  //   alert('Testing note: Pedometer Restarted. It may take a few seconds to reflect')
  //   this.ionViewWillEnter()
  // })
  // alert('Testing note: Page Refreshed.')
  // await this.stopWalking(true)
  // this.service.set('isPaused', 'false')
  // this.isPaused = false
  // this.subscribePedometer();
  // }

  async CreatePopover() {
    const popoverEle =
      await this.popover.create({
        component: ModifyGoalComponent,
        backdropDismiss: true, cssClass: 'modifyPopover'
      });

    popoverEle.onDidDismiss().then((data) => {
      console.log('data', data)
      if (data.data) {
        let modifyData = data.data;
        this.targetSteps = modifyData.targetSteps
        this.targetKm = modifyData.targetKm
        this.currentActivity = modifyData.currentActivity
        this.updateEmpObj()
        this.initiaizeUI()
        this.updateStorage()
      }
    });

    popoverEle.present();
  }

  async pause() {

    this.popover.create({
      component: PauseActivityComponent,
      cssClass: 'pauseActivityPopover', backdropDismiss: true
    }).then(async (popoverElement) => {
      popoverElement.present();

      const { data } = await popoverElement.onDidDismiss();


      if (data === 'confirm') {
        this.isPaused = true
        this.service.set('isPaused', 'true')
        // this.updateEmpObj()
        this.stopWalking(true, true, true)
      }

      // popoverElement.onDidDismiss().then(() => {

      //   this.updateEmpObj()
      //   this.stopWalking(true)
      // })
    })
  }

  async resume() {
    this.goalResumeDate = new Date();
    this.service.set('isPaused', 'false')
    this.isPaused = false
    this.pageInit()
  }

  async showInstallAppPopup() {
    if (this.installAppPopupShowing) {
      return
    }
    this.alertShowing = true;
    let appName: any;
    let appProvider: any;
    if (this.mobileOs == 'android') {
      appName = 'Google Fit';
      appProvider = 'Playstore'
    } else if (this.mobileOs == 'ios') {
      appName = 'HealthKit'
      appProvider = 'App Store'
    }

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: appName + ' required',
      message: 'To track your activity, please install ' + appName + ' application from '
        + appProvider,
      buttons: [
        {
          text: 'Not now',
          handler: () => {
            console.log('Confirm Okay');
            this.installAppPopupShowing = false;
            this.isPaused = true
            this.service.set('isPaused', 'true').then(function () {
              this.stopWalking(true)
            }.bind(this))
          }
        },
        {
          text: 'Install',
          handler: () => {
            console.log('Confirm Okay');
            this.installAppPopupShowing = false;
            window.location.href = 'https://play.google.com/store/apps/details?id=' +
              'com.google.android.apps.fitness';
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  async showAuthorizationPopup(error = {}) {

    if (this.authorizationPopupShowing) {
      return
    }
    this.authorizationPopupShowing = true;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Permission Required',
      subHeader: 'Please grant Activity permission to track steps.',
      message: JSON.stringify(error),
      buttons: [
        {
          text: 'cancel',
          handler: () => {
            console.log('Confirm Okay');
            this.authorizationPopupShowing = false;
            this.isPaused = true
            this.service.set('isPaused', 'true').then(function () {
              this.stopWalking(true)
            }.bind(this))
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.authorizationPopupShowing = false;
            this.subscribeHealthPlugin()
          }
        }
      ],
      backdropDismiss: false
    });

    await alert.present();
  }

  stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
    console.log('interval unsubscribed')
  }



  setTarget() {
    console.log("SetTarget")
    this.route.navigate(['tabs/setTarget']);
  }

  updateActivity() {
    if (this.updateActivityLoading) {
      return
    }
    let empObj = this.service.getEmpObject()
    // alert('Current Steps: '+empObj.currentSteps)

    let targetObj = {
      TargetID: empObj.targetId,
      PSNumber: empObj.psNo,
      ActivityType: empObj.currentActivity,
      TargetKM: empObj.targetKm,
      TargetSteps: empObj.targetSteps,
      isCompleted: false,
      isEnded: false,
      ReasonForEnding: "",
      CurrentKM: empObj.currentKm,
      currentSteps: empObj.currentSteps,
      TotalTimeTaken: ""
    }

    if (localStorage.getItem('access_token')) {
      console.log('modifyGoal1', targetObj);
      this.updateActivityLoading = true
      this.service.modifyGoal(targetObj).subscribe(data => {
        console.log('modifyGoal api', data);
        let result = data;
        this.updateActivityLoading = false
      }, async (error) => {
        this.updateActivityLoading = false
        console.log('error', error)
        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.generateToken('updateActivity')
        }
        if (error.error.text === 'Goal Updated Successfully!') {
          // alert('User details updated')
          // let totalKm = await +this.service.get('totalKm')
          // totalKm += targetObj.CurrentKM
          // this.service.set('totalKm', totalKm.toString())
        }
      }
      )
    }
    else {
      this.generateToken('updateActivity')
    }

  }


  targetCompleted() {
    let empObj = this.service.getEmpObject()

    let targetObj = {
      TargetID: empObj.targetId,
      PSNumber: empObj.psNo,
      ActivityType: empObj.currentActivity,
      TargetKM: empObj.targetKm,
      TargetSteps: empObj.targetSteps,
      isCompleted: true,
      isEnded: true,
      ReasonForEnding: "Completed",
      CurrentKM: empObj.targetKm,
      currentSteps: empObj.targetSteps,
      TotalTimeTaken: ""
    }

    if (localStorage.getItem('access_token')) {
      console.log('Loading...')
      this.targetCompletedLoading = true;
      this.service.modifyGoal(targetObj).subscribe(async (res) => {
        this.storage.ready().then(() => {
          this.storage.remove('empObj')
          this.storage.remove('goalDetails')
          this.storage.remove('leaderboard')
          this.storage.remove('profile')
        })
        console.log('Success')
        this.targetCompletedLoading = false;
      }, async (error) => {

        console.log(error.error.text)
        if (error.error.text === 'Goal Updated Successfully!') {
          this.inProgress = false;
          // alert('Target achieved API Call Success')
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
            // this.tab1.getEmpDetails(false, true, targetObj);
            let params: any = {};
            params.callBackFn = 'getEmpDetails';
            params.callBackParams = 'targetComplete';
            params.targetObj = targetObj;
            this.service.eventMessage.next(params)
          })
        }
        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.generateToken('targetCompleted')
        }
        // this.popover.dismiss();
        this.service.set("updateActivity", targetObj)
        this.targetCompletedLoading = false;
      })
    }
    else {
      this.generateToken('targetCompleted')
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

  updateEmpObj() {
    if (!this.service.getProgressStatus()) {
      return
    }
    let empObj: any = this.service.getEmpObject() || {}
    empObj.currentActivity = this.currentActivity
    empObj.targetKm = this.targetKm
    empObj.currentKm = this.currentKm
    empObj.currentSteps = this.currentSteps
    empObj.targetSteps = this.targetSteps
    this.service.setEmpObject(empObj)
    let userData = this.service.getUserData() ? this.service.getUserData() : { empObj: null, goalDetails: null, peopleCount: null, avgtreesCount: null }
    userData.empObj = empObj
    this.service.setUserData(userData)
  }

  updateStorage() {
    if (!this.service.getProgressStatus()) {
      return
    }
    let userData = this.service.getUserData()
    this.service.set('userData', userData).then(() => {
      // console.log('Data stored: ' + JSON.stringify(userData))
    })
    this.service.get('userData').then(result => {
      let newEmpObj = result.empObj
      // console.log("EmpObj (updateStorage func):",newEmpObj)
      let updatedStepCount = newEmpObj.currentSteps
      console.log("updatedStepCount (updateStorage func):", updatedStepCount)
    })
  }

  ngOnDestroy() {
    console.log('activity destroyed')
    if (this.msgSubscription) {
      this.msgSubscription.unsubscribe()
    }
  }
}