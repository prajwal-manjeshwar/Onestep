import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { RoundProgressComponent, RoundProgressModule } from 'angular-svg-round-progressbar';
import { ModifyGoalComponent } from './modify-goal/modify-goal.component';
import { ChooseTargetComponent } from './choose-target/choose-target.component';
import { EndActivityComponent } from './end-activity/end-activity.component';
import { PauseActivityComponent } from './pause-activity/pause-activity.component';
import { PermissionAlertComponent } from './permission-alert/permission-alert.component';
import { TargetAchievedComponent } from './target-achieved/target-achieved.component';
import { IonicStorageModule } from '@ionic/storage';
import { ActivityStatisticsComponent } from '../tab2/activity-statistics/activity-statistics.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    RoundProgressModule,
    IonicStorageModule.forRoot({
      name: '__1StepMiles-localstorage',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    })

  ],
  declarations: [Tab2Page, ModifyGoalComponent, ChooseTargetComponent, 
    EndActivityComponent, PauseActivityComponent, PermissionAlertComponent,
     TargetAchievedComponent, ActivityStatisticsComponent],
  exports: [
    RoundProgressComponent,
    RoundProgressModule
  ]
})
export class Tab2PageModule { }
