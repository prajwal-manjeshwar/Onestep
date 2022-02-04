import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-cert-popup',
  templateUrl: './cert-popup.component.html',
  styleUrls: ['./cert-popup.component.scss'],
})
export class CertPopupComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  confirm(){
    this.popover.dismiss()
  }

}
