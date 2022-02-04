import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Employee } from '../models/Employee';
import { CommonService } from '../services/common.service';
import { RetryPopupComponent } from './retry-popup/retry-popup.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  getEmpDetailsLoading = false
  getUserCountLoading = false;
  getTreesPlantedLoading = false;
  getLeaderboardDetailsLoading = false

  getEmpDetailsLoaded = false
  getUserCountLoaded = false;
  getTreesPlantedLoaded = false;
  getLeaderboardDetailsLoaded = false;

  refresher: any;

  steps: any;
  distance: any;
  flag = 0;
  getVal = 0;
  counter: any;
  myVar: any;
  existingUser = false;
  newUser = true;

  empDetails: any = null;
  goalDetails: any = null;
  teamDetails: any;
  empEmail: string;
  firstName: string;
  location;
  psNo: number = null

  activityType: string;
  currentSteps: number = 0;
  targetSteps: number = 0;
  currentKm: number = 0;
  targetKm: number = 0;
  currentTime: string;
  inProgress: boolean = false;

  targetDate: string;

  kmProgress: number = 0;
  stepProgress: number = 0;
  totalTrees: any

  showLoading: boolean = true;

  totalKm: number;
  totalSteps: number;

  contributingPeopleCount: number = null;
  avgTreesCount: number = null;

  generateTokenLoading = false;
  failedRequests: any = [];

  constructor(private service: CommonService, private route: Router,
    private popover: PopoverController, public ngzone: NgZone, private storage: Storage,
    private changeDetec: ChangeDetectorRef) {

  }

  changeTimeFormat(time) {
    let decimalTimeString = time
    var n = new Date(0, 0);
    n.setMinutes(+decimalTimeString * 60);
    n.setSeconds(+decimalTimeString * 60 * 60);
    time = n.toTimeString().slice(0, 5);
    let hr = time.split(':')[0]
    let min = time.split(':')[1]
    return hr + ' Hr ' + min + ' min'
  }

  // Will load the EmpObject from storage if exists
  ngOnInit() {
    this.subscribeDataChange();
    this.subscribeEventMessage();
    this.service.get('userData').then(result => {
      if (result) {
        this.service.setUserData(result);
        this.service.setEmpObject(result.empObj);
        let empObj = result.empObj;
        if (empObj && empObj.currentActivity) {
          this.service.setProgressStatus(true)
        }
      }
      this.pageInit();
    })
  }

  ionViewWillEnter() {
    this.updateUI()
  }
  
  subscribeDataChange() {
    this.service.dataChange.subscribe(() => {
      // this.updateUI(this.service.getEmpObject())
      let empobj: any = this.service.getEmpObject() || {}
      this.currentKm = empobj.currentKm || 0
      this.targetKm = empobj.targetKm || 0
      this.currentSteps = empobj.currentSteps || 0
      this.stepProgress = Math.floor((this.currentSteps / this.targetSteps) * 100)
      this.kmProgress = Math.floor((this.currentKm / this.targetKm) * 100)
      this.inProgress = empobj.inProgress
    })
  }

  subscribeEventMessage() {
    this.service.eventMessage.subscribe((params) => {
      if (params && params.callBackFn == 'getEmpDetails') {
        this.getEmpDetails(params)
      }
    })
  }

  async pageInit() {
    this.generateToken('pageInit');
    let isNewUser = await this.service.get('isNewUser')
    if (isNewUser === null) {
      this.existingUser = false;
      this.service.set('isNewUser', 'no')
    }
    else {
      this.existingUser = true;
    }
    this.updateUI()
  }

  // Update the variables to interpolate in the front end
  updateUI() {

    // TRIAL-----------------------
    // this.getLeaderboardDetails()
    // -------------------------------

    let obj: any = this.service.getEmpObject() || {}
    if (!obj.name) {
      this.inProgress = false
      return;
    }
    if (obj.currentActivity) {
      this.inProgress = true
    } else {
      this.inProgress = false
    }

    this.firstName = obj.name.split(' ')[0]
    this.currentKm = obj.currentKm
    this.currentSteps = obj.currentSteps
    this.targetSteps = obj.targetSteps
    this.targetKm = obj.targetKm
    //this.stepProgress = Math.floor((this.currentSteps / this.targetSteps) * 100)
    this.kmProgress = Math.floor((this.currentKm / this.targetKm) * 100)
    this.activityType = obj.currentActivity
    this.location = obj.location;
    this.totalTrees = this.service.getTreesCount(this.totalKm)

  }

  // Get Employee details from API and call updateUI()
  async getEmpDetails(params: any = {}) {
    this.getEmpDetailsLoading = true;
    this.service.employeeDetailsLoading = !this.refresher
    this.empEmail = await this.service.get('loggedInUserEmail')
    if (localStorage.getItem('access_token')) {
      this.service.getEmployeeAllDetails(this.empEmail).subscribe(async (response) => {
        console.log("getEmpDetails: ",JSON.stringify(response))
        let empDetails = response.EmplDetails
        let goalDetails = response.goalList[0];
        this.teamDetails = response.teamMemberDetail;
        let obj: any = {}
        let userData: any = {}
        if (goalDetails != undefined || goalDetails != null) {
          obj = new Employee(empDetails.PSNumber, empDetails.EmployeeName,
            empDetails.EmpEmailID, empDetails.Location_Descr,
            goalDetails.TargetID, goalDetails.ActivityType,
            goalDetails.CurrentSteps, goalDetails.CurrentKM,
            goalDetails.TargetSteps, goalDetails.TargetKM)
          this.service.set('goalStartDate', goalDetails.GoalStartdate)
          userData.empObj = obj
          userData.goalDetails = goalDetails
        } else {
          obj = new Employee(empDetails.PSNumber, empDetails.EmployeeName, empDetails.EmpEmailID,
            empDetails.Location_Descr, null, null, null, null, null, null)
          userData.empObj = obj
        }
        this.service.setEmpObject(obj)
        this.service.setUserData(userData)
        this.service.set('userData', userData)
        this.service.set('empObjBefore', obj)
        if (this.teamDetails && this.teamDetails.TeamID) {
          this.service.set('teamId', this.teamDetails.TeamID)
        }
        this.getLeaderboardDetailsLoading = true;
        this.getLeaderboardDetails();
        this.getEmpDetailsLoading = false;
        this.service.employeeDetailsLoading = false;
        this.getEmpDetailsLoaded = true;
        this.hideRefresher();
        if (obj.currentActivity) {
          this.service.setProgressStatus(true);
        }
        let data: any = {};
        if (params.callBackParams == 'targetConfirm') {
          data.callBackFn = 'targetConfirmPopup'
        } else if (params.callBackParams == 'targetComplete') {
          data.callBackFn = 'targetAchivedPopup'
          data.targetObj = params.targetObj
        }
        if (data.callBackFn) {
          this.service.eventMessage.next(data)
        }
        this.updateUI();
      }, (error) => {
        this.service.employeeDetailsLoading = false;
        this.getEmpDetailsLoading = false;
        this.getEmpDetailsLoaded = true;
        this.hideRefresher();
        this.service.dismissLoading();

        console.log("error--+" + JSON.stringify(error));
        if (error.status === 401) {
          this.generateToken('getEmpDetails');
        } else {
          this.retryPopup()
        }
      });
    } else {
      this.service.dismissLoading();
      this.generateToken('getEmpDetails')
    }
  }

  retryPopup() {
    this.popover.create({
      component: RetryPopupComponent,
      cssClass: 'retryPopover', backdropDismiss: false
    }).then(async (popoverElement) => {
      popoverElement.present();
      const { data } = await popoverElement.onDidDismiss();
      if (data === 'reload') {
        this.getEmpDetails()
      }
    })
  }

  startWalk() {
    this.route.navigate(['/tabs/tab2']);
  }

  setTarget() {
    this.route.navigate(['tabs/setTarget']);
  }

  doRefresh(event) {
    this.refresher = event;
    // this.getEmpDetails()   // commented to avoid step loss on page refresh
    // console.log("here",this.empDetails)
    this.getLeaderboardDetails()
    this.getTreesPlanted()
    this.getUserCount()
  }

  hideRefresher() {
    console.log('getEmpDetailsLoading', this.getEmpDetailsLoading)
    if (this.refresher && this.refresher.target) {
      if (!this.getEmpDetailsLoading && !this.getUserCountLoading && !this.getTreesPlantedLoading
        && !this.getLeaderboardDetailsLoading) {
        this.refresher.target.complete();
        this.refresher = '';
      }
    }
  }

  getLeaderboardDetails() {
    let empObj: any = this.service.getEmpObject() || {}
    if (!empObj.psNo) {
      this.getLeaderboardDetailsLoading = false;
      return
    }
    this.getLeaderboardDetailsLoading = true;
    console.log('getLeaderboardDetailsLoading', this.getLeaderboardDetailsLoading)
    this.service.getLeaderboardRanks(empObj.psNo).subscribe((response) => {
      // console.log("first response: ",response[0])
      this.totalKm = response[0].TotalKMs
      this.totalSteps = Math.floor(this.totalKm * 1232)
      this.totalTrees = this.service.getTreesCount(this.totalKm)
      this.service.totalKm = this.totalKm;
      this.getLeaderboardDetailsLoading = false;
      this.getLeaderboardDetailsLoaded = true;
      this.hideRefresher();
    }, (error) => {
      this.getLeaderboardDetailsLoading = false;
      this.getLeaderboardDetailsLoaded = true;
      this.hideRefresher();
      if (error.status === 401) {
        this.generateToken('getLeaderboardDetails')
      }
    });

  }

  generateToken(retryFuncName?: any) {
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
      // console.log(localStorage.getItem('access_token'))
      const that = this;
      if (this.failedRequests && this.failedRequests.length > 0) {
        this.failedRequests.forEach(function (value, index) {
          console.log("failedReq:",value)
          if (value == 'pageInit') {
            that.getTreesPlanted()
            that.getUserCount()
            if (!that.service.getProgressStatus()) {
              that.getEmpDetails()
            } else {
              that.getLeaderboardDetails()
            }
          } else {
            that[value]();
          }
        }, this)
        that.failedRequests = [];
      }
      this.service.dismissLoading();
      this.generateTokenLoading = false;
    }, (error) => {
      this.service.dismissLoading();
      this.generateTokenLoading = false;
      console.log('Token Error in Home:' + JSON.stringify(error))
    },
    );
  }

  getTreesPlanted() {
    this.getTreesPlantedLoading = true;
    this.service.getTreesPlanted().subscribe((response) => {
      this.avgTreesCount = response
      this.getTreesPlantedLoading = false
      this.getTreesPlantedLoaded = true;
      this.hideRefresher();
    }, (error) => {
      this.getTreesPlantedLoading = false;
      this.getTreesPlantedLoaded = true;
      this.hideRefresher();
      if (error.status === 401) {
        this.generateToken('getTreesPlanted')
      }
    });

  }

  getUserCount() {
    this.getUserCountLoading = true;
    this.service.getUserCount().subscribe((response) => {
      this.contributingPeopleCount = response
      this.getUserCountLoading = false;
      this.getUserCountLoaded = true;
      this.hideRefresher();
    }, (error) => {
      this.getUserCountLoading = false;
      this.getUserCountLoaded = true;
      this.hideRefresher();
      if (error.status === 401) {
        this.generateToken('getUserCount')
      }
    });
  }

  openPrivacyPolicy(url:string) {
    window.open(url,'_system','location=yes');
    console.log("Clicked")
  }
}
