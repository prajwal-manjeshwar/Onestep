import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-retry-popup',
  templateUrl: './retry-popup.component.html',
  styleUrls: ['./retry-popup.component.scss'],
})
export class RetryPopupComponent implements OnInit {

  constructor(private popover:PopoverController) { }

  ngOnInit() {}

  confirm(){
    this.popover.dismiss('reload');
  }

}
