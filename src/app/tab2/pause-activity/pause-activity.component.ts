import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pause-activity',
  templateUrl: './pause-activity.component.html',
  styleUrls: ['./pause-activity.component.scss'],
})
export class PauseActivityComponent implements OnInit {

  constructor(private popover:PopoverController, private service: CommonService, private storage: Storage) { }

  name: string;

  ngOnInit() {
    this.name = this.service.getEmpObject().name.split(' ')[0]
  }
  closePopover()
  {
    this.popover.dismiss();
  }

  confirm(){
    this.popover.dismiss('confirm');
  //   let empObj = this.service.getEmpObject()
    
  //   let targetObj = {
  //     TargetID: empObj.targetId,
  //     PSNumber: empObj.psNo,
  //     ActivityType: empObj.currentActivity,
  //     TargetKM: empObj.targetKm,
  //     TargetSteps: empObj.targetSteps,
  //     isCompleted:false,
  //     isEnded:false,
  //     ReasonForEnding: "",
  //     CurrentKM:empObj.currentKm,
  //     currentSteps:empObj.currentSteps,
  //     TotalTimeTaken:""
  //   }
   
  //  // var data=JSON.stringify(this.empObj )
  //  if (localStorage.getItem('access_token')) {
  //   this.service.modifyGoal(targetObj).subscribe(async (res)=> {
  //     await this.service.set("updateActivity","")
  //   },async (error)=>{
       
  //     if (error.status === 401) {
  //       localStorage.removeItem('access_token')
  //       this.getNewToken();
  
  //    }
  //   await this.service.set("updateActivity",targetObj)
  //   })
  //   this.popover.dismiss('confirm');

  //  }
  //  else{
  //    this.getNewToken()
  //  }

  }

  getNewToken(){
      this.service.showLoading();
      this.service.generateToken().subscribe((response) => {
        this.service.dismissLoading()
        console.log(response)
        localStorage.setItem("token_expires_on", response.expires_on)
        localStorage.setItem("access_token", response.access_token)
        localStorage.setItem("token_expires_in", response.expires_in)
        this.confirm();

      }, (error) => {
        this.service.dismissLoading()
        console.log(JSON.stringify(error))
      },
      );
  }

}
