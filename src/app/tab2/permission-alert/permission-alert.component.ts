import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-permission-alert',
  templateUrl: './permission-alert.component.html',
  styleUrls: ['./permission-alert.component.scss'],
})
export class PermissionAlertComponent implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {}

  confirm(){
    this.popover.dismiss('reload');
  }

}
