import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-select-activity-alert',
  templateUrl: './select-activity-alert.component.html',
  styleUrls: ['./select-activity-alert.component.scss'],
})
export class SelectActivityAlertComponent implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {}

  confirm(){
    this.popover.dismiss();
  }

}
