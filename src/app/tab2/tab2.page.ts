import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTANT } from ".././app.constant"; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showActivity:boolean= false;
  
  constructor( private route:Router) {}
  setNewTarget(){
    this.route.navigate(['/activity']);
   CONSTANT.showActivity = true;
  }
}
