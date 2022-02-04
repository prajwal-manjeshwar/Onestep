import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicStorageModule } from '@ionic/storage';

import { Tab4PageRoutingModule } from './tab4-routing.module'
import { CertPopupComponent } from './cert-popup/cert-popup.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab4PageRoutingModule,
    IonicStorageModule.forRoot({
      name: '__1StepMiles-localstorage',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    })
  ],
  declarations: [Tab4Page, CertPopupComponent],
  entryComponents: [CertPopupComponent]
})
export class Tab4PageModule { }
