import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { RetryPopupComponent } from '../tab1/retry-popup/retry-popup.component';
import { CertPopupComponent } from './cert-popup/cert-popup.component';
import { CertificateComponent } from './certificate/certificate.component';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  result: any;
  empName: string;
  location: string;
  totalActivitiesCount;
  totalTime: string;
  totalKm: string = '0';

  activityList: any[] = [];

  totalTrees: any
  totalSteps: any
  newUser = false;
  refresher: any;

  showLoading: boolean = false;

  constructor(
    private service: CommonService,
    private popover: PopoverController,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.pageInit();
  }

  // Automatic update page
  ionViewWillEnter(){
    this.pageInit()
  }

  async pageInit() { 
    this.service.activeTabIndex = 4
    let empObj = this.service.getEmpObject();
    // console.log(empObj)
    this.empName = empObj.name
    if (empObj.location && environment.apiUrl.includes('wfcprod')) {
      this.location = this.service.decryptMessage(empObj.location)
    } else {
      this.location = empObj.location
    }

    this.totalKm = await this.service.get('totalKm')
    if (this.totalKm === null) {
      this.totalKm = '0'
    }

    if(localStorage.getItem('access_token')){
      this.service.getLeaderboardRanks(empObj.psNo).subscribe(async (response)=> {
        this.showLoading = false;
        this.hideRefresher();
        this.service.set('leaderboard', response)
        this.updateUI(response);
      },(error)=>{
        this.showLoading = false;
        this.hideRefresher();
        if(error.status === 401){
          this.generateToken();
        }
        console.log("error--+" + JSON.stringify(error));
      })
    }
    else{
      this.generateToken();
    }
  }

  async updateUI(response) {
    this.totalKm = parseFloat(response[0].TotalKMs).toFixed(1)
    this.service.totalKm = this.totalKm
    this.service.set('totalKm', this.totalKm)
  }

  hideRefresher() {
    if (this.refresher && this.refresher.target) {
      this.refresher.target.complete();
      this.refresher = '';
    } 
  }

  doRefresh(event) {
    this.refresher = event;
    this.pageInit();
  }

  viewCertificate() {
    this.service.totalKm = Math.floor(parseFloat(this.totalKm))

    if (+this.totalKm < 50) {
      this.popover.create({
        component: CertPopupComponent,
        cssClass: 'certPopover', backdropDismiss: true
      }).then((popoverElement) => {
        popoverElement.present();
      })
    }
    else {
      this.router.navigate(['certificate'])
    }
  }

  generateToken() {
    this.service.generateToken().subscribe((response)=>{
      console.log(response);
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem("access_token", response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)
      this.pageInit();
    },(error)=>{
      console.log(JSON.stringify(error));
    });
  }
}