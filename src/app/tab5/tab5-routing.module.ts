import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamGuard } from '../services/auth.guard';
import { CreateTeamComponent } from './create-team/create-team.component';
import { ViewTeamComponent } from './view-team/view-team.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-team'
  },
  {
    path: 'search-team',
    loadChildren: () => import('./search-team/search-team.module').then(m => m.SearchTeamModule)
  },
  {
    path: 'view-team/:id',
    loadChildren: () => import('./view-team/view-team.module').then(m => m.ViewTeamModule)
  },
  {
    path: 'my-team',
    loadChildren: () => import('./my-team/my-team.module').then(m => m.MyTeamModule),
    canActivate: [TeamGuard]
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then(m => m.CreateTeamModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PageRoutingModule { }
