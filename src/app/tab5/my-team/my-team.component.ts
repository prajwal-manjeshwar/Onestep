import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { TeamLists } from '../models/team-lists';
import { TeamDetails } from '../models/team-details';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss'],
})
export class MyTeamComponent implements OnInit {

  team = 'myTeam';
  teamDetails: any;
  teamDetailsLoading = false;
  teamListsLoading = false;
  refresher: any;
  teamList: any;
  employeeDetails: any;
  exitTeamLoading = false;
  currentTeamId: any;
  generateTokenLoading = false;

  failedRequests: any = [];

  constructor(private router: Router, private service: CommonService,
    private activatedRoute: ActivatedRoute, private platform: Platform,
    private navCtrl: NavController) {
  }

  segmentChanged(ev) {
  }

  ngOnInit() {
    this.pageInit();
  }

  // async ionViewWillEnter() {
  //   this.employeeDetails = await this.service.get('empObj');
  //   if (!this.employeeDetails.isActiveTeam) {
  //     this.navCtrl.navigateRoot(['/tabs/tab5/search-team'])
  //   }
  // }

  // ionViewWillEnter(){
  //   if (this.team == 'myTeam') {
  //     this.getTeamDetails();
  //   } else {
  //     this.getTeamLists();
  //   }
  // }

  async pageInit() {
    this.employeeDetails = this.service.getEmpObject();
    this.currentTeamId = await this.service.get('teamId');
    console.log('employeeDetails', this.employeeDetails)
    this.getTeamDetails('pageInit');
    this.getTeamLists('pageInit');
  }

  location: any[] = []
  async getTeamDetails(pageInit?: any) {
    this.teamDetailsLoading = !this.refresher;
    const params: any = {};
    let id = await this.service.get('teamId');
    params.TeamID = JSON.stringify(id)
    console.log('getTeamDetai', params);
    this.service.getData('getDetailsByTeamID', params)
      .subscribe(async (response) => {
        console.log('getTeamDetails', response);
        this.teamDetailsLoading = false;
        this.teamDetails = new TeamDetails(response);

        this.teamDetails.members.forEach(element => {
          this.location.push(this.service.decryptMessage(element.location))
        });
        this.hideRefresher();
      }, (error) => {
        this.teamDetailsLoading = false;
        this.hideRefresher();
        if (error.status === 401) {
          this.generateToken('getTeamDetails');
        } else {
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  getTeamLists(pageInit?: any) {
    this.teamListsLoading = !this.refresher;
    this.service.getData('getTeamsList')
      .subscribe(async (response) => {
        this.teamListsLoading = false;
        console.log('getTeamLists', response);
        if (response && response.length > 0) {
          this.teamList = response.map(data => {
            return new TeamLists(data);
          });
        }
        console.log('teamList', this.teamList)
        this.hideRefresher();
      }, (error) => {
        this.teamListsLoading = false;
        this.hideRefresher();
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('getTeamLists');
        } else {
          this.teamList = [];
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  exitTeam() {
    this.exitTeamLoading = true;
    const params: any = {};
    params.TeamID = this.currentTeamId;
    params.PsNumber = this.employeeDetails.psNo;
    params.Activitytype = 'walking';
    params.ExitDate = new Date();
    params.IsActiveMember = 0;
    console.log('exitTeam', params);
    this.service.postData('exitTeam', params)
      .subscribe(async (response) => {
        console.log('exitTeam', response);
        this.exitTeamLoading = false;
        if (response) {
          this.service.showToast(response);
        }
        const that = this;
        if (response == ' Exited') {
          this.service.set('teamId', '').then(function (value) {
            that.service.set('teamKms', {}).then(function (value) {
              that.navCtrl.navigateRoot('tabs/tab5/search-team');
            })
          })
        }
      }, (error) => {
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('exitTeam');
        } else {
          this.exitTeamLoading = false;
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  viewTeam(id) {
    this.router.navigate(['/tabs/tab5/view-team', id])
  }

  hideRefresher() {
    if (this.refresher && this.refresher.target) {
      this.refresher.target.complete();
      this.refresher = '';
    }
  }

  generateToken(retryFuncName?: any, id?:any) {
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

  doRefresh(event) {
    this.refresher = event;
    if (this.team == 'myTeam') {
      this.getTeamDetails();
    } else {
      this.getTeamLists();
    }
  }

}
