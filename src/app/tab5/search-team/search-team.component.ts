import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { TeamLists } from '../models/team-lists';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.scss'],
})
export class SearchTeamComponent implements OnInit {

  teamListsLoading = false;
  joinTeamLoading = false;
  searchText = '';
  partOfTeam: boolean;
  activetab: string;
  refresher: any;
  teamsData: any;
  teamList = [];
  teamName: string = '';
  rank: string = '';
  distance: string = '';
  members: any[] = [];
  employeeDetails: any;
  generateTokenLoading = false;
  failedRequests: any = [];
  selectedId: any;

  constructor(private router: Router, private service: CommonService,
    private navCtrl: NavController) {
  }

  ngOnInit() {
    this.pageInit();
  }

  async pageInit() {
    this.employeeDetails = this.service.getEmpObject();
    console.log('employeeDetails', this.employeeDetails);
    this.getTeamLists('pageInit');
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
          this.teamsData = this.teamList;
          console.log('teamList', this.teamList);
        }
        this.hideRefresher();
      }, (error) => {
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('getTeamLists');
        } else {
          this.teamListsLoading = false;
          this.hideRefresher();
          this.teamList = [];
        }
      })
  }

  assignCopy() {
    this.teamList = Object.assign([], this.teamsData);
  }

  filterItem(value) {
    console.log(value.target.value);
    value = value.target.value;
    if (!value) {
      this.assignCopy();
    } // when nothing has typed
    this.teamList = Object.assign([], this.teamsData).filter(
      item => item.teamName.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  createTeam() {
    localStorage.setItem('teamLists', JSON.stringify(this.teamList))
    this.router.navigate(['/tabs/tab5/create-team'])
  }

  viewTeam(id) {
    this.router.navigate(['/tabs/tab5/view-team', id])
  }

  joinTeam(id) {
    this.joinTeamLoading = true;
    const params: any = {};
    params.TeamID = id;
    params.PsNumber = this.employeeDetails.psNo;
    params.Activitytype = 'walking';
    console.log('joinTeam', params);
    this.service.postData('joinTeam', params)
      .subscribe(async (response) => {
        console.log('joinTeam', response);
        this.joinTeamLoading = false;
        if (response) {
          this.service.showToast(response);
        }
        const that = this;
        if (response == ' Team Joined') {
          let empObj = this.service.getUserData()?.empObj
          await this.service.set('empObjBefore', empObj)
          this.service.set('teamId', id).then(function (value) {
            that.service.updateTeamDetails();
            that.navCtrl.navigateRoot('tabs/tab5/my-team');
          })
        }
      }, (error) => {
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('joinTeam', id);
        } else {
          this.joinTeamLoading = false;
        }
      })
  }

  changeTab(tabIndex) {
    this.activetab = tabIndex
  }

  exitTeam() {
    this.service.setTeamStatus(false)
  }

  doRefresh(event) {
    this.refresher = event;
    this.pageInit();
  }

  hideRefresher() {
    if (this.refresher && this.refresher.target) {
      this.refresher.target.complete();
      this.refresher = '';
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