import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AuthInterceptor } from './services/auth.interceptor';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HTTP } from '@ionic-native/http/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Health } from '@ionic-native/health/ngx';
import { HealthKit, HealthKitOptions } from '@ionic-native/health-kit/ngx';
import { CertificateComponent } from './tab4/certificate/certificate.component';

@NgModule({
  declarations: [AppComponent, OnboardingComponent, CertificateComponent],
  entryComponents: [],
  imports: [BrowserModule,
  IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RoundProgressModule,
    IonicStorageModule.forRoot({
      name: '__1StepMiles-localstorage',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    })],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {
      provide: RouteReuseStrategy, useClass: IonicRouteStrategy
    },
    CommonService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    HTTP,
    AndroidPermissions,
    File,
    FileTransfer,
    FileOpener,
    Health,
    HealthKit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
