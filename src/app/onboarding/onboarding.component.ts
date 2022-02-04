import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit() {}

  goToHome(){
    console.log("Skip button, go to home");
    this.router.navigate(['tabs/tab1']);
  }

  moveToNext(slides){
    console.log("Next button, go to next slide");
    slides.slideNext();
  }
}
