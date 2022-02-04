import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityStatisticsComponent } from './activity-statistics/activity-statistics.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityStatisticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
