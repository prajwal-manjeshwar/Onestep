import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-target-confirm',
  templateUrl: './target-confirm.component.html',
  styleUrls: ['./target-confirm.component.scss'],
})
export class TargetConfirmComponent implements OnInit {

  constructor(private popover: PopoverController, private route: Router,
    private service: CommonService) { }

  ngOnInit() { }

  closePopover() {
    this.popover.dismiss();
  }


  navigateToActivity() {
    this.popover.dismiss();
    this.route.navigate(['tabs/tab2']);
  }

}
