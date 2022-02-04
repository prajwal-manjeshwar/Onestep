import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../models/Employee';
import { environment } from "../../environments/environment"
import { LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { interval, Subscription } from 'rxjs';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiURL = environment.apiUrl;
  private data: any;
  private startDate: Date;
  private empObject: Employee = new Employee(null, null, null, null, null, null, null, null, null, null);

  private userData: any = { empObj: null, goalDetails: null, peopleCount: null, avgtreesCount: null };

  private empName;
  private empLocation;
  private empPsNo;
  private empEmail;
  public totalKm;

  refresher: any;//Doubt

  private teamDetails;

  private canJoinTeam: boolean;
  private teamStatus: boolean;

  currentSteps: number;
  currentKms: number;
  activeTabIndex: number;

  pedometerObservable: any = null;

  contributingPeopleCount: number = 0;
  avgTreesCount: number = 0;

  isAppResumed: boolean = false;

  dataChange: EventEmitter<any> = new EventEmitter<any>();

  eventMessage: EventEmitter<any> = new EventEmitter<any>();

  public getUserData() {
    return this.userData
  }

  public setUserData(obj) {
    this.userData = obj
  }

  public setTeamDetails(obj) {
    this.teamDetails = obj
  }
  public getTeamDetails() {
    return this.teamDetails;
  }

  public setCanJoinTeam(bool) {
    this.canJoinTeam = bool
  }
  public getCanJoinTeam() {
    return this.canJoinTeam
  }

  public setTeamStatus(status) {
    this.teamStatus = status
  }
  public getTeamStatus() {
    return this.teamStatus
  }

  public getEmpObject() {
    return this.empObject;
  }
  public setEmpObject(object) {
    this.empObject = object;
    this.fetchObjectChanges(object)
  }

  public setEmpName(object) {
    this.empName = object;
  }
  public setEmpLocation(object) {
    this.empLocation = object;
  }
  public setEmpPsNo(object) {
    this.empPsNo = object;
  }
  public setEmpEmail(object) {
    this.empEmail = object;
  }
  public getEmpEmail() {
    return this.empEmail
  }

  private inProgress: boolean = false;

  getProgressStatus() {
    return this.inProgress;
  }
  setProgressStatus(status) {
    this.inProgress = status
    let obj: any = this.getEmpObject() || {}
    obj.inProgress = status
    this.setEmpObject(obj)
  }

  fetchObjectChanges(obj) {
    this.dataChange.next(obj)
  }


  getGoalStartDate() {
    return this.startDate;
  }
  setGoalStartDate(startdate) {
    this.startDate = startdate;
  }

  isLoading = false;
  updateActivityLoading = false;

  //////////////Testing//////////////////////////////////////////
  // pause = new Subject<any>();
  // resume = new Subject<any>();
  // source = interval(3000)
  // appPaused = false;
  /***************** Pedometer *******************************/
  // startPedometerUpdates: EventEmitter<any> = new EventEmitter<any>();
  // subscription: Subscription;
  ////////////////////////////////////////////////////////////////

  modifyTeamDetailsLoading = false;
  StepsCovered = 0;
  walkStartTime: any;
  onlineStatus = true;
  networkToast = false;
  failedRequests: any = [];
  generateTokenLoading = false;
  employeeDetailsLoading = false;

  key = "MISLTI";
  options = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  };
  keyHex: any;


  constructor(private http: HttpClient, private loadingController: LoadingController,
    private httpNative: HTTP, private storage: Storage,
    public toastController: ToastController, private alertController: AlertController) {
    this.key = CryptoJS.MD5(this.key).toString();
    var k1 = this.key.substring(0, 16);
    this.key = this.key + k1;
    this.keyHex = CryptoJS.enc.Hex.parse(this.key);
  }

  httpGetCall() {
    let url = this.apiURL + 'GetEmpDetails?Email=Smitabalasaheb.pardhe@lntinfotech.com';
    return this.http.get(url).pipe(map((res: any) => res));
  }

  generateToken() {
    // QA Values
    let grant_type = "client_credentials"
    let client_id = "4dc22a15-b69e-4d13-8011-0d5065364053"
    let client_secret = "4y.S-I7fNYS_-C861x~B95zEA7Qjs-SAar"
    let resource = "https://wfcqa.azurewebsites.net"

    // Production Values
    // let grant_type = "client_credentials"
    // let client_id = "91e579b1-7721-4dfb-af3c-d7f4359283e2"
    // let client_secret = "ReSit~G53D-DN_7Mb52zRb8ME_xTJm-YsG"
    // let resource = "https://wfcprod.azurewebsites.net"

    let obj = "grant_type=" + grant_type + "&client_id=" + client_id + "&client_secret=" + client_secret + "&resource=" + resource

    let url = "https://aqueous-ridge-38664.herokuapp.com/https://login.microsoftonline.com/02aa9fc1-18bc-4798-a020-e01c854dd434/oauth2/token";
    // let url = "https://login.microsoftonline.com/02aa9fc1-18bc-4798-a020-e01c854dd434/oauth2/token";

    return this.http.post(url, obj).pipe(map((res: any) => res));
  }

  getEmployeeDetails(email: string) {
    let url = this.apiURL + 'GetEmpDetails?Email=' + email;
    return this.http.get(url).pipe(map((res: any) => res));

  }

  getEmployeeAllDetails(email: string) {

    let url = this.apiURL + 'GetCurrentTargetDetails?Email=' + email;
    return this.http.get(url).pipe(map((res: any) => res));

  }

  getLeaderboardRanks(psNo) {
    let url = this.apiURL + 'GetTopRanks_All?PsNumber=' + psNo;

    return this.http.get(url).pipe(map((res: any) => res));
  }

  getTargetDetails(psNo) {
    let url = this.apiURL + 'GetTargetDetails?PSNumber=' + psNo;
    return this.http.get(url).pipe(map((res: any) => res));

  }

  getTreesPlanted() {
    let url = this.apiURL + 'GetTreesPlanted';
    return this.http.get(url).pipe(map((res: any) => res));
  }

  getUserCount() {
    let url = this.apiURL + 'GetUserCount';
    return this.http.get(url).pipe(map((res: any) => res));
  }

  logDetails(obj) {
    let url = this.apiURL + 'DeviceDetails';
    return this.http.post(url, obj);
  }

  setTarget(obj) {

    let url = this.apiURL + 'SetTarget';
    return this.http.post(url, obj);
  }

  modifyGoal(obj) {

    let url = this.apiURL + 'ModifyTarget';
    return this.http.post(url, obj).pipe(map((res: any) => res));
  }

  getToken() {
    // if(localStorage.getItem("access_token")==""){
    this.generateToken().subscribe((response) => {
      console.log(response)
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem("access_token", response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)

    }, (error) => {
      alert(JSON.stringify(error))
    },
    );
  }


  async showLoading() {
    // if (this.isLoading) {
    //   return
    // }
    // this.isLoading = true;
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // return loading.present();
  }

  dismissLoading() {
    // if (this.isLoading) {
    //   this.loadingController.dismiss();
    //   this.isLoading = false;
    // }
  }

  getTreesCount(km) {
    return Math.floor(km / 50)
  }

  public set(key: string, value: any): Promise<any> {
    return this.storage.ready()
      .then(() => {
        return this.storage.set(key, value)
          .catch(() => {
            return null;
          });
      });
  }

  public get(key: string): Promise<any> {
    return this.storage.ready()
      .then(() => {
        return this.storage.get(key)
          .catch(() => {
            return null;
          });
      });
  }

  setRefresher(obj) {
    this.refresher = obj;
  }

  hideRefresher() {
    if (this.refresher && this.refresher.target) {
      this.refresher.target.complete();
    }
  }

  getData(url, params: any = {}) {
    return this.http.get(this.apiURL + url, { params: params }).pipe(map((res: any) => res));
  }

  postData(url, params) {
    return this.http.post(this.apiURL + url, params, { responseType: 'text' }).pipe(map((res: any) => res));
  }

  async showToast(message) {
    const toast = await this.toastController.create({
      message: message,
      mode: 'ios',
      color: 'dark',
      duration: 2000
    });
    toast.present();
  }

  async showNetworkStatus(message) {
    const toast = await this.toastController.create({
      message: message,
      mode: 'ios',
      color: 'dark',
      buttons: [
        {
          side: 'end',
          icon: 'close',
          handler: () => {
            console.log('close clicked');
          }
        }
      ]
    });
    toast.present();
    this.networkToast = true;
  }

  async dismissToast() {
    const element = await this.toastController.getTop();
    if (element && this.networkToast) {
      element.dismiss();
      this.networkToast = false;
    }
  }

  async showAlert(header?: any, subHeader?: any, message?: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async updateTeamDetails(loading = false) {
    console.log('updateTeamDetails called')
    if (this.modifyTeamDetailsLoading) {
      return;
    }

    let teamId = await this.get('teamId');
    console.log('teamId', teamId)
    if (!teamId) {
      return;
    }
    let empObj = this.getUserData()?.empObj
    if (empObj) {
      empObj = JSON.parse(JSON.stringify(empObj))
    }
    let empObjBefore = await this.get('empObjBefore')
    if (empObjBefore) {
      empObjBefore = JSON.parse(JSON.stringify(empObjBefore))
    } else {
      empObjBefore = {}
    }

    // console.log('EmpObj Old: ' + JSON.stringify(empObjBefore))
    // console.log('EmpObj New: ' + JSON.stringify(empObj))

    let steps = empObj.currentSteps - empObjBefore.currentSteps
    let km = empObj.currentKm - empObjBefore.currentKm


    if (steps > 0) {
      const params: any = {};
      params.TeamID = teamId;
      params.PSNumber = empObj.psNo;
      params.StepsCovered = steps;
      params.KmsCovered = km;
      params.ActivityType = empObj.currentActivity;
      console.log('updateTeamDetails', params);
      this.modifyTeamDetailsLoading = true;
      this.postData('ModifyTeamDetails', params)
        .subscribe(async (response) => {
          this.modifyTeamDetailsLoading = false;
          console.log('updateTeamDetails', response);
          const that = this;
          that.set('empObjBefore', empObj)
        }, (error) => {
          this.modifyTeamDetailsLoading = false;
          if (error.status === 401) {
            this.createToken('updateTeamDetails')
          }
          console.log('updateTeamDetails error', error);
        })
    }
  }

  updateActivity() {
    if (this.updateActivityLoading) {
      return
    }
    let empObj = this.getEmpObject()
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
      console.log('modifyGoal', targetObj);
      this.updateActivityLoading = true
      this.modifyGoal(targetObj).subscribe(data => {
        console.log('modifyGoal', data);
        let result = data;
        this.updateActivityLoading = false
      }, async (error) => {
        this.updateActivityLoading = false
        console.log('error', error)
        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.createToken('updateActivity')
        }
        if (error.error.text === 'Goal Updated Successfully!') {
        }
      })
    }
    else {
      this.createToken('updateActivity')
    }
  }


  createToken(retryFuncName?: any, id?: any) {
    console.log('retryFuncName', retryFuncName)
    if (retryFuncName) {
      this.failedRequests.push(retryFuncName);
    }
    if (this.generateTokenLoading) {
      return;
    }
    this.generateTokenLoading = true;
    this.generateToken().subscribe((response) => {
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
    }, (error) => {
      this.generateTokenLoading = false;
      console.log('Token Error in Home:' + JSON.stringify(error))
    },
    );
  }

  decryptMessage(string) {
    var base64String = string.toString();
    let decrypted = CryptoJS.TripleDES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(base64String)
    }, this.keyHex, this.options);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8)
    if (decrypted) {
      return decrypted;
    } else {
      return string;
    }
  }


  /////////////////////// Testing  ////////////////////////////////////////

  // setWalkStartTime() {
  //   this.walkStartTime = new Date()
  //   console.log('walkStartTime', this.walkStartTime)
  // }

  // isAvailable() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let error = false;
  //       if (error) {
  //         reject('error');
  //       } else {
  //         resolve(true);
  //       }
  //     }, 500);
  //   });
  // }

  // requestAuthorization(data) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let error = false;
  //       if (error) {
  //         reject('error');
  //       } else {
  //         resolve(true);
  //       }
  //     }, 500);
  //   });
  // }

  // query(data) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let error = false;
  //       if (error) {
  //         reject('error');
  //       } else {
  //         let diffSec = data.endDate - data.startDate;
  //         let diffSeconds = Math.round(((diffSec % 86400000) % 3600000) / 1000);
  //         resolve([{ value: diffSeconds * 10 }]);
  //       }
  //     }, 500);
  //   });
  // }

  // backgroundDetection() {
  //   this.source.subscribe(val => this.checkBackgroundStatus())
  // }

  // checkBackgroundStatus() {
  //   if (localStorage.getItem('pause') == '1' && !this.appPaused) {
  //     this.appPaused = true;
  //     this.pause.next()
  //   } else if (localStorage.getItem('pause') == '0' && this.appPaused) {
  //     this.appPaused = false;
  //     this.resume.next()
  //   }
  // }

  // monitorSampleType(data) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let error = false;
  //       if (error) {
  //         reject('error');
  //       } else {
  //         resolve(true);
  //       }
  //     }, 500);
  //   });
  // }


  //****************Pedometer********************************* */

  // count: any = 0;

  // startTimer() {
  //   this.count = 0;
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  //   this.subscription = this.source.subscribe(val => this.intervalCalled());
  // }

  // stopTimer() {
  //   return new Promise((resolve, reject) => {
  //     if (this.subscription) {
  //       this.subscription.unsubscribe();
  //     }
  //     resolve('timer stopped')
  //   })

  // }

  // intervalCalled() {
  //   this.count += 20;
  //   console.log('count', this.count)
  //   this.startPedometerUpdates.emit({ 'numberOfSteps': this.count })
  // }

  ////////////////////////////////////////////////////////////////////////

}
