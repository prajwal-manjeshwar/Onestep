import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { ActivityStatisticsComponent } from './tab2/activity-statistics/activity-statistics.component';
import { CertificateComponent } from './tab4/certificate/certificate.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'activity',
    component: ActivityStatisticsComponent
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
  {
    path: 'certificate',
    component: CertificateComponent
  }
];

@NgModule({​​​​​​​​
imports: [
RouterModule.forRoot(routes, {​​​​​​​​ preloadingStrategy:PreloadAllModules, useHash:true }​​​​​​​​)
 ],
exports: [RouterModule]
 
}​​​​​​​​)


export class AppRoutingModule {}
