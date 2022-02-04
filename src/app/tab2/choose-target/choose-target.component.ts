import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-choose-target',
  templateUrl: './choose-target.component.html',
  styleUrls: ['./choose-target.component.scss'],
})
export class ChooseTargetComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() { }
  ClosePopover() {
    this.popover.dismiss();
  }
  closeModal() {

  }
  modalSubmit() { }
}
