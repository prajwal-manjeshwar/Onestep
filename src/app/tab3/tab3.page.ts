import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CommonService } from '../services/common.service';
import { RetryPopupComponent } from '../tab1/retry-popup/retry-popup.component';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private service: CommonService, private popover: PopoverController,
    private storage: Storage) { }

  leaderboard: any = null;
  empName: string = '';
  location: string = '';
  totalKMs: string = '0';
  rank: string = '---';
  isJogging: boolean = true;
  isWalking: boolean = false;
  showLoading: boolean = true;
  generateTokenLoading = false

  refresher: any;

  ngOnInit() {
    this.pageInit()
  }

  // Automatic refresh leaderboard
  ionViewWillEnter(){
    this.pageInit()
  }

  async pageInit() {
    // this.showLoading = !this.refresher  //showLoading set to true
    let empObj: any = this.service.getEmpObject() || {}
    this.empName = empObj.name
    if (empObj.location && environment.apiUrl.includes('wfcprod')) {
      this.location = this.service.decryptMessage(empObj.location)
    } else {
      this.location = empObj.location
    }

    // let leaderboardObj = await this.service.get('leaderboard')

    // this.updateUI(leaderboardObj)
    const that = this;

    if (localStorage.getItem('access_token')) {
      this.service.getLeaderboardRanks(empObj.psNo).subscribe((response) => {
        this.showLoading = false
        // this.service.dismissLoading()
        //console.log("response: ",response)
        if (response && response.length > 0) {
          response.forEach(function (value) {
            if (value.EmpLocation && environment.apiUrl.includes('wfcprod')) {
              value.EmpLocation = that.service.decryptMessage(value.EmpLocation)
            }
          })
        }
        this.updateUI(response)
        this.hideRefresher();
      }, (error) => {
        this.showLoading = false
        this.hideRefresher();
        this.service.dismissLoading()

        if (error.status === 401) {
          // localStorage.removeItem('access_token')
          this.getNewToken();
        }
        console.log("error--+" + JSON.stringify(error));
      });
    }
    else {
      this.getNewToken()
    }

  }

  hideRefresher() {
    if (this.refresher && this.refresher.target) {
      this.refresher.target.complete();
      this.refresher = '';
    }
  }

  doRefresh(event) {
    this.refresher = event;
    this.pageInit()

  }

  async updateUI(data) {
    //console.log("update UI: ",data)
    this.service.set('leaderboard', data)
    this.totalKMs = parseFloat(data[0].TotalKMs).toFixed(2)
    this.service.totalKm = this.totalKMs
    this.service.set('totalKm', this.totalKMs)
    this.rank = data[0].Rank
    let userActivity = data[0].ActivityType.split(',')
    //console.log("userActivity:",userActivity)
    
    //console.log("this data")
    console.log(data[0])

    userActivity.indexOf('Jogging') >= 0 ? this.isJogging = true : this.isJogging = false
    userActivity.indexOf('Walking') >= 0 ? this.isWalking = true : this.isWalking = false

    this.leaderboard = data.slice(1)  //removed the currnt employee info from top to display leaderboard ahead
    //console.log(this.leaderboard)
    //this.leaderboard=data 

    for (let item in this.leaderboard) {
      let activities = this.leaderboard[item].ActivityType.split(',')
      activities.indexOf('Jogging') >= 0 ? this.leaderboard[item].Jogging = true : this.leaderboard[item].Jogging = false
      activities.indexOf('Walking') >= 0 ? this.leaderboard[item].Walking = true : this.leaderboard[item].Walking = false
    }

    this.leaderboard.sort((a, b) => {
      return a.Rank - b.Rank;
    })
    //console.log(this.leaderboard)
  }

  async getNewToken() {
    this.generateTokenLoading = true;
    this.service.showLoading();
    this.service.generateToken().subscribe((response) => {
      this.service.dismissLoading()
      console.log("getNewToken",response)
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem("access_token", response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)
      this.generateTokenLoading = false;
      this.pageInit();

    }, (error) => {
      this.generateTokenLoading = false;
      this.service.dismissLoading()
      console.log(JSON.stringify(error))
    },
    );

  }
}
