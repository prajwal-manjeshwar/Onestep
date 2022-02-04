import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent implements OnInit {

  placeNameError: boolean;
  characterLimitError: boolean;
  specialCharacterError: boolean;
  uniqueTeamError: boolean;
  createTeamLoading = false;
  employeeDetails: any;
  employeeDetailsLoading = false;
  generateTokenLoading = false;

  failedRequests: any = []

  places: string[] = ['Pune', 'Mumbai', 'Hyderabad', 'Bangalore', 'Chennai', 'Powai'];

  teamName: string = null;

  teamLists: any = [];

  constructor(private router: Router, private service: CommonService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.pageInit();
  }

  async pageInit() {
    let teamData: any = localStorage.getItem('teamLists');
    teamData = teamData ? JSON.parse(teamData) : []
    if (teamData && teamData.length > 0) {
      teamData.forEach(function (value) {
        this.teamLists.push(value.teamName)
      }, this)
    }
    console.log('teamLists', this.teamLists);
    this.employeeDetails = this.service.getEmpObject();
  }

  goBack() {
    this.router.navigate(['tabs/tab5'])
  }

  validateName() {
    // console.log(this.teamName);
    for (let index in this.places) {
      // console.log(this.teamName)
      if (this.teamName.toLowerCase().includes(this.places[index].toLowerCase())) {
        this.placeNameError = true
        break;
      }
      else {
        this.placeNameError = false
      }
    }
    for (let index in this.teamLists) {
      // console.log(this.teamName)
      if (this.teamName.toLowerCase() == this.teamLists[index].toLowerCase()) {
        this.uniqueTeamError = true
        break;
      }
      else {
        this.uniqueTeamError = false
      }
    }
    if (this.teamName.length > 20) {
      this.characterLimitError = true
    }
    else {
      this.characterLimitError = false
    }
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(this.teamName)) {
      this.specialCharacterError = true;
    } else {
      this.specialCharacterError = false;
    }
  }

  createTeam() {
    if (!this.teamName) {
      this.service.showToast('Please enter team name');
      return;
    }
    if (this.placeNameError || this.characterLimitError || this.specialCharacterError ||
      this.uniqueTeamError) {
      return;
    }
    this.createTeamLoading = true;
    const params: any = {};
    params.TeamName = this.teamName;
    params.PsNumber = this.employeeDetails.psNo;
    params.Activitytype = 'walking';
    console.log('createTeam', params)
    this.service.postData('createTeam', params)
      .subscribe(async (response) => {
        console.log('createTeam', response);
        this.createTeamLoading = false;
        if (response) {
          this.service.showToast(response);
        }
        if (response == 'Team Created Successfully!') {
          this.getEmployeeDetails();
        }
      }, (error) => {
        console.log('error', error);
        if (error.status === 401) {
          this.generateToken('createTeam');
        } else {
          this.createTeamLoading = false;
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
  }

  async getEmployeeDetails() {
    this.employeeDetailsLoading = true;
    const params: any = {};
    params.Email = await this.service.get('loggedInUserEmail');
    console.log('getEmployeeDetails', params)
    this.service.getData('GetCurrentTargetDetails', params)
      .subscribe(async (response) => {
        console.log('getEmployeeDetails', response);
        this.employeeDetailsLoading = false;
        let details = response.teamMemberDetail;
        const that = this;

        let empObj = this.service.getUserData()?.empObj
        await this.service.set('empObjBefore', empObj)

        this.service.set('teamId', details.TeamID).then(function (value) {
          that.service.updateTeamDetails();
          that.navCtrl.navigateRoot('tabs/tab5/my-team');
        })
      }, (error) => {
        if (error.status === 401) {
          this.generateToken('getEmployeeDetails');
        } else {
          this.employeeDetailsLoading = false;
          if(this.service.onlineStatus)
          this.service.showToast('Something went wrong, please try again');
        }
      })
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
