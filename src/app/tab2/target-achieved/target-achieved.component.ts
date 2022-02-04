import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Employee } from 'src/app/models/Employee';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-target-achieved',
  templateUrl: './target-achieved.component.html',
  styleUrls: ['./target-achieved.component.scss'],
})
export class TargetAchievedComponent implements OnInit {

  constructor(private popover: PopoverController, private route: Router,
    public service: CommonService, private storage: Storage,
    private navParams: NavParams) { }

  currentActivity: string;
  targetKm: number = 0;
  empObj: Employee;
  inProgress = false;

  targetObj: any;

  ngOnInit() {
    this.targetObj = this.navParams.get('targetObj')
    this.currentActivity = this.targetObj.ActivityType
    // this.targetKm = this.targetObj.TargetSteps
    this.targetKm = this.targetObj.TargetKM
  }
  ionViewWillEnter() {
    // this.inProgress = this.service.getProgressStatus()
    // this.empObj = this.service.getEmpObject()
    // this.currentActivity = this.empObj.currentActivity
    // this.targetKm = this.empObj.targetKm
  }
  closePopover() {
    this.popover.dismiss();
  }
  setTarget() {
    this.popover.dismiss().then(a => this.route.navigate(['tabs/setTarget']));
    console.log("SetTarget")
  }

  async getNewToken() {
    this.service.showLoading();
    this.service.generateToken().subscribe((response) => {
      this.service.dismissLoading()
      console.log(response)
      localStorage.setItem("token_expires_on", response.expires_on)
      localStorage.setItem("access_token", response.access_token)
      localStorage.setItem("token_expires_in", response.expires_in)
      this.setTarget();

    }, (error) => {
      this.service.dismissLoading()
      console.log(JSON.stringify(error))
    },
    );
  }
}
