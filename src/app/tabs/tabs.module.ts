import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { TargetConfirmComponent } from './target-confirm/target-confirm.component';
import { SelectActivityAlertComponent } from './select-activity-alert/select-activity-alert.component';
import { SetTargetComponent } from './set-target/set-target.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RoundProgressModule
  ],
  declarations: [TabsPage, TargetConfirmComponent,
    SelectActivityAlertComponent, SetTargetComponent]
})
export class TabsPageModule { }
