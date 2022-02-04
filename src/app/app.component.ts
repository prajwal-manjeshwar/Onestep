import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Storage } from '@ionic/storage';
import { LoadingService } from './services/loading.service';
import { delay } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Device } from '@ionic-native/device/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Network, Device]
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  employeeDetails: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private service: CommonService,
    private androidPermissions: AndroidPermissions,
    private storage: Storage,
    private _loading: LoadingService,
    private loadingController: LoadingController,
    private network: Network,
    private device: Device
  ) {


    this.listenToLoading();

    var interval;

    document.addEventListener('pause', () => {

      this.service.isAppResumed = false;
      console.log('App resumed: ', this.service.isAppResumed)
      this.getNewToken('updateActivity')

      let userData = this.service.getUserData()
      this.service.set('userData', userData).then(() => {
        console.log('Data stored: ' + userData)
      })

      // setInterval(function(){
      //   this.service.get('userData').then(result=>{
      //     let oldEmpObj = result.empObj;
      //     let oldStepCount = oldEmpObj.currentSteps
      //     if(this.service.numbOfSteps > oldStepCount){

      //     }
      //   })
      // },5000)
    })


    document.addEventListener('resume', () => {
      this.service.isAppResumed = true;
      console.log('App resumed: ', this.service.isAppResumed)

      // console.log('Emp Obj on resume: ' + JSON.stringify(this.service.getEmpObject()))
      // this.updateActivity()
      // clearInterval(interval)
      // this.service.updateActivity()
      // this.getNewToken('updateActivity');
      // this.service.isAppResumed = true;
      // let userData = this.service.getUserData()
      // this.service.set('userData', userData).then(() => {
      //   console.log('Data stored: ' + JSON.stringify(userData))
      // })

      // this.service.get('userData').then(result => {
      //   let oldEmpObj = result.empObj
      //   let updatedStepCount = oldEmpObj.currentSteps
      //   console.log("AppResume stepCount from storage",updatedStepCount)
      //   this.service.stepsOnAppResume = updatedStepCount
      // })

      // ----------------------
      // this.service.get('pluginStepCount').then(result => {
      //   console.log("PluginStepCount:",JSON.stringify(result))
      // })
      // ----------------------

      // setting for stepCount after app resume  
      // this.service.set('pluginStepCount',updatedStepCount).then(result => {
      //   console.log("Steps saved in service:",result)
      // })
    })


    document.addEventListener('deviceready', () => {


      var fSuccess = function (data) {
        let nonce = data.nonce;
        let email = data.email;
        let uid = data.uid;
        if (email.indexOf(" ") != -1) {
          //For some users user name is coming instead of email id.
          let data = email.split(" ");
          email = data[0] + "." + data[1] + "@lntinfotech.com";
          storage.set('loggedInUserEmail', email);
        }
        // alert('Email: ' + email)
        storage.set('loggedInUserEmail', email);
        storage.set('nonce', nonce);
        storage.set('uid', uid);

      }
      var fError = function (error) {
        console.log(error);
      }

      //Uncomment below line when deploying the build to LTI Apps
      // DronaHQ.user.getProfile(fSuccess, fError)
    });

  }

  ngOnInit() {
    this.initializeApp();
    // this.pageInit();
    this.configureNetwork()
  }

  configureNetwork() {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.service.onlineStatus = false
      // this.service.showAlert('No internet connection', '',
      //   'Please check your internet connection and try again')
    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.service.onlineStatus = true
    });
  }


  initializeApp() {
    // this.getNewToken('')
    this.getNewToken('updateActivity')
    this.storage.ready().then(() => {

      this.storage.get('isNewUser').then(res => {
        if (res === null) {
          this.router.navigate(['onboarding'])
        }
        else {
          this.router.navigate(['tabs/tab1'])
        }
      })

      // this.storage.get('empObj').then(res => {
      //   var obj = res
      //   if (obj != null && obj.inProgress === true) {
      //     this.storage.set('currentSteps', obj.currentSteps)
      //     this.service.currentSteps = obj.currentSteps
      //   }
      // })
    })


    //Comment below line when deploying the build to LTI Apps
    this.storage.ready().then(() => {
      this.storage.set('loggedInUserEmail', 'srishti.shirgavi@lntinfotech.com');
      //this.storage.set('loggedInUserEmail', 'prajwal.b@lntinfotech.com');
    })



    this.platform.ready().then(() => {

      console.log('this.device', this.device);

      const params: any = {}
      if (this.device) {
        params.deviceName = this.device.manufacturer
        params.model = this.device.model;
        params.version = this.device.platform + ' ' + this.device.version;
      }
      this.updateDeviceInformation(params);

      console.log('params', params)

      this.statusBar.show()
      this.splashScreen.hide();

      if (this.platform.is('ios'))
        this.storage.set('Mode', 'ios');
      else
        this.storage.set('Mode', 'android');

      this.platform.backButton.subscribe(() => {
        navigator['app'].exitApp();
      })
    });
  }

  updateDeviceInformation(params) {

  }

  getNewToken(execFuncName: string) {
    // localStorage.removeItem('access_token')
    this.service.generateToken().subscribe((response) => {
      //console.log(response.access_token)
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem("access_token", response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)
      // this.setTarget();
      if (execFuncName === 'updateActivity' && this.service.getProgressStatus()) {
        this.service.updateActivity()
        this.service.updateTeamDetails()
      }
    }, (error) => {
      console.log(JSON.stringify(error))
    },
    );
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        // console.log('loading', loading);
        if (loading) {
          // this.showLoading()
        } else {
          // this.dismissLoading()
        }
      });
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      backdropDismiss: true
    });
    return loading.present();
  }

  async dismissLoading() {
    const element = await this.loadingController.getTop();
    if (element) {
      element.dismiss();
      return;
    }
    // this.loadingController.dismiss();
  }
}
