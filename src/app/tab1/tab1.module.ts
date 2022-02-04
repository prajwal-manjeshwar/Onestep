import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RetryPopupComponent } from './retry-popup/retry-popup.component';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    RoundProgressModule,
    IonicStorageModule.forRoot({
      name: '__1StepMiles-localstorage',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    })
  ],
  declarations: [Tab1Page, RetryPopupComponent]
})
export class Tab1PageModule { }
