import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

@Injectable()
export class TeamGuard implements CanActivate {
    constructor(private router: Router,
        private navCtrl: NavController,
        private service: CommonService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.checkTeamStatus(state.url);
    }
    async checkTeamStatus(url: string) {
        let teamId = await this.service.get('teamId');
        if (teamId) {
            return true;
        }
        this.navCtrl.navigateRoot(['/tabs/tab5/search-team'])
        return false;
    }

}
