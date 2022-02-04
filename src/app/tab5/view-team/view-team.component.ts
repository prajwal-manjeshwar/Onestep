import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { TeamDetails } from '../models/team-details';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss'],
})
export class ViewTeamComponent implements OnInit {

  teamDetails: any;
  teamDetailsLoading = false;
  employeeDetails: any;
  joinTeamLoading = false;
  currentTeamId: any;
  generateTokenLoading = false;
  failedRequests: any = [];

  constructor(private router: Router, private service: CommonService,
    private activatedRoute: ActivatedRoute, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.pageInit();
  }

  async pageInit() {
    this.employeeDetails = this.service.getEmpObject();
    this.currentTeamId = await this.service.get('teamId');
    console.log('employeeDetails', this.employeeDetails);
    let teamId = this.activatedRoute.snapshot.paramMap.get("id");
    console.log('teamId', teamId);
    this.getTeamDetails(teamId);
  }

  location: any[] = []

  getTeamDetails(teamId) {
    this.teamDetailsLoading = true;
    const params: any = {};
    params.TeamID = teamId;
    console.log('getTeamDetails', params);
    this.service.getData('getDetailsByTeamID', params)
      .subscribe(async (response) => {
        console.log('getTeamDetails', response);
        this.teamDetailsLoading = false;
        this.teamDetails = new TeamDetails(response);
        this.teamDetails.members.forEach(element => {
          this.location.push(this.service.decryptMessage(element.location))
        });
        console.log('teamDetails', this.teamDetails);
      }, (error) => {
        if (error.status === 401) {
          this.generateToken('getTeamDetails', teamId);
        } else {
          this.teamDetailsLoading = false;
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  joinTeam() {
    this.joinTeamLoading = true;
    const params: any = {};
    params.TeamID = this.teamDetails.teamID;
    params.PsNumber = this.employeeDetails.psNo;
    params.Activitytype = 'walking';
    console.log('joinTeam', params);
    this.service.postData('joinTeam', params)
      .subscribe(async (response) => {
        console.log('joinTeam', response);
        this.joinTeamLoading = false;
        this.service.showToast(response);
        const that = this;
        if (response == ' Team Joined') {
          let empObj = this.service.getUserData()?.empObj
          await this.service.set('empObjBefore', empObj)
          this.service.set('teamId', this.teamDetails.teamID).then(function (value) {
            that.service.updateTeamDetails();
            that.navCtrl.navigateRoot('tabs/tab5/my-team');
          })
        }
      }, (error) => {
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('joinTeam', 'joinTeamLoading');
        } else {
          this.joinTeamLoading = false;
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  goBack() {
    this.router.navigate(['tabs/tab5'])
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

}
