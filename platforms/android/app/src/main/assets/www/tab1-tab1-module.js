(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/retry-popup/retry-popup.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/retry-popup/retry-popup.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <div class=\"closeButton\" (click)=\"closePopover()\">x</div> -->\n  <!-- </ion-col>\n    </ion-row> -->\n  <!-- <div class=\"closeButton\" (click)=\"closePopover()\">x</div> -->\n  <h2 class=\"popUpTitle\">Try Again</h2>\n\n  <div class=\"popUpContent\">\n    <p style=\"margin-top:20px;margin-bottom:20px; color: black;\">Looks like we could not fetch your details\n    </p>\n\n    <!-- <ion-row class=\"yellowCard\">\n      <ion-col size=\"2\">\n        <img src=\"assets/images/user.png\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <div style='font-size:small'> The app will end the current activity in</div>\n        <div style=\"font-weight: bold\">05:30 min</div>\n      </ion-col>\n    </ion-row> -->\n    <div class=\"divbtn\">\n      <button class=\"popUpBtn\" (click)=\"confirm()\">\n        Retry\n      </button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title style=\"color: #00008C;text-align:center;font-size: 20px\">\n      <b>Dashboard</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"font-family: 'Roboto';\">\n\n  <div class='hideBg' *ngIf=\"!refresher && (getEmpDetailsLoading || getUserCountLoading ||\n  getTreesPlantedLoading || getLeaderboardDetailsLoading || generateTokenLoading)\">\n    <div class=\"page-loader\">\n      <img src=\"assets/images/loader.gif\">\n    </div>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div>\n    <p *ngIf=\"firstName\" class=\"welcomeMessage\">Hello <span style=\"color: #00008C;\"> {{firstName}}</span>,\n      <span style=\"font-weight: 500\">Welcome<span *ngIf=\"existingUser\"> Back!</span> </span>\n    </p>\n\n    <div>\n      <p *ngIf=\"totalSteps\" class=\"title\">Score Board</p>\n      <span class=\"subTitle\" *ngIf=\"totalKm>=1\">Awesome! Your score is commendable</span>\n\n      <div *ngIf=\"totalSteps\">\n        <ion-card class=\"topCardExisting\" style=\"margin-top: 3%;\">\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"text-align: center;\">\n                <div class=\"stepCountSpacing\">Steps</div>\n                <div class=\"countSpacing\">{{totalSteps}}</div>\n                <div class=\"countSpacing\" style=\"text-align:center;\">\n                  <ion-img class=\"badgeIcon\" src=\"assets/images/badge.png\"></ion-img>\n                </div>\n              </ion-col>\n              <ion-col class=\"bordercolor\" style=\"text-align: center;\">\n                <div class=\"distanceSpacing\">Distance</div>\n                <div class=\"countSpacing\">{{totalKm | number : '1.0-1'}} Kms</div>\n                <div class=\"countSpacing\">\n                  <ion-img class=\"badgeIcon\" src=\"assets/images/badge.png\"></ion-img>\n                </div>\n              </ion-col>\n              <ion-col class=\"bordercolor\" style=\"text-align: center;\">\n                <div class=\"treePlantedSpacing\">Trees Planted</div>\n                <div class=\"countSpacing\">{{totalTrees}}</div>\n                <div class=\"countSpacing\">\n                  <ion-img class=\"plantIcon\" src=\"assets/images/plant.png\"></ion-img>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n\n\n      <ion-card class=\"topCard\" *ngIf=\"inProgress\">\n        <ion-card-header style=\"padding-bottom: 1%; padding-top: 4%;\">\n\n          <ion-card-title style=\"color:white\">\n\n            <span style=\"font-size: 5.5vw; font-weight: 600;\"><u>Your</u> ongoing {{activityType}}</span>\n            <!-- <div class=\"textStyle\">{{stepProgress}}%<br>\n              {{currentKm}}Kms</div> -->\n\n            <!-- <div class=\"textStyle\" style=\"font-size: 16;\">{{location}}<br>\n              {{targetDate | date: 'mediumDate'}}</div> -->\n            <!-- <div class=\"line\"></div>\n              <div class=\"textPos\" style=\"font-size: 16;\">{{currentKm}}Kms<br>\n                {{currentTime}}</div> -->\n\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content>\n          <span style=\"font-size: 5.5vw; font-weight: 600;\">{{currentSteps}}/</span> <span\n            style=\"font-size: 3.7vw; font-weight: 600;\">{{targetSteps}}\n            Steps Completed</span>\n          <br>\n          <div class=\"textPos\">Goal: {{targetKm}}Kms</div>\n          <ion-progress-bar [value]=\"kmProgress/100\" class='progressBar'></ion-progress-bar>\n\n          <div style=\"text-align: center; \">\n            <span style=\"font-size: 3vw;\">Distance Covered: {{currentKm | number : '1.0-2'}}Kms</span>\n            <ion-button color=\"favorite\" (click)=\"startWalk()\" class=\"button continueButton\" style=\"margin-top: 4%;\">\n              Continue Walking</ion-button>\n          </div>\n\n        </ion-card-content>\n\n\n      </ion-card>\n      <!-- <div>\n        <p class=\"title\">Target Progress </p>\n        <span class=\"subTitle\">{{firstName}}, Below is your progress</span>\n      </div>\n      <ion-card class=\"topCardTarget\" style=\"margin-top: 3%;\" *ngIf=\"inProgress\">\n        <ion-grid>\n          <ion-row style=\"padding-bottom: 5%;\">\n            <ion-col>\n              <ion-card-header>\n\n                <ion-card-title style=\"color:white; width: 178px\">\n\n                  <span style=\"font-size: 25px;\">{{currentSteps}}/</span> <span style=\"font-size: 20px;\">{{targetSteps}}\n                    Steps</span>\n                </ion-card-title>\n\n              </ion-card-header>\n\n              <ion-card-content style=\"width:70%\">\n\n                <span class=\"cardData\">\n                  Walking <span style=\"font-size: 16px;\">{{targetSteps - currentSteps}}</span>\n                  Steps more will help in planting <span style=\"font-size: 18px;\"></span> {{treeCount}} more Trees\n                </span>\n\n              </ion-card-content>\n              <div style=\"margin-top: 8%;\">\n                <div class=\"current\">{{stepProgress}}%</div>\n                <round-progress [current]=stepProgress [max]=\"100\" [color]=\"'#1E72C7'\" [background]=\"'white'\"\n                  [radius]=\"50\" [stroke]=\"10\" [semicircle]=\"false\" [rounded]=\"true\" [clockwise]=\"true\"\n                  [responsive]=\"false\" [duration]=\"800\" [animation]=\"'easeInOutQuart'\" [animationDelay]=\"0\">\n                </round-progress>\n\n              </div>\n            </ion-col>\n\n            <ion-button color=\"favorite\" (click)=\"startWalk()\" class=\"button continueButton\">Continue Walking\n            </ion-button>\n          </ion-row>\n        </ion-grid>\n      </ion-card> -->\n    </div>\n    <div *ngIf=\"!inProgress\">\n      <ion-card class=\"topCard\">\n        <ion-card-header>\n          <ion-card-title style=\"color:white\">\n            <u>Walk</u> for a cause\n            <ion-img class=\"cardImage\" src=\"assets/images/firstCard.png\"></ion-img>\n\n          </ion-card-title>\n\n        </ion-card-header>\n\n        <ion-card-content class=\"cardContent\">\n          <span class=\"subHeading\">Do you wish to contribute for a cause?</span><br>\n          <span class=\"cardData\">Each target completed by you helps in a cause of tree plantation.</span><br>\n          <div class=\"buttonContainer\">\n            <ion-button color=\"favorite\" (click)=\"setTarget()\" class=\"button targetButton\">Set Target</ion-button>\n          </div>\n\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n    <div *ngIf=\"getTreesPlantedLoaded\">\n      <p class=\"subTitleHeading\">Analysis</p>\n      <span class=\"subTitle\">Here's the overall analysis</span>\n    </div>\n\n    <ion-card *ngIf=\"getTreesPlantedLoaded\" class=\"secondCard\" style=\"margin-top: 3%;\">\n\n      <ion-card-content class=\"secondCardContent\">\n        <ion-row no-padding>\n          <ion-col col-3>\n            <round-progress class=\"graphImage\" [current]=\"75\" [max]=\"100\" [color]=\"'#F58220'\" [background]=\"'#FED715'\"\n              [radius]=\"50\" [stroke]=\"13\" [semicircle]=\"false\" [rounded]=\"true\" [clockwise]=\"true\" [responsive]=\"false\"\n              [duration]=\"800\" [animation]=\"'easeInOutQuart'\" [animationDelay]=\"0\"></round-progress>\n            <div class=\"percentageValue\">{{avgTreesCount}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row no-padding>\n          <ion-col>\n            <ul>\n              <li><span class=\"firstBullet\"></span> <span style=\"float: left;\">Average trees planted per week</span>\n                <span style=\"float:right\">{{avgTreesCount}}</span>\n              </li>\n            </ul>\n            <br>\n            <ul>\n              <li><span class=\"secondBullet\"></span>People contributing for a cause <span\n                  style=\"float:right\">{{contributingPeopleCount}}</span></li>\n            </ul>\n\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <div>\n      <p class=\"subTitleHeading\">Activities you can opt for</p>\n      <span class=\"subTitle\">Here's how you can help for a cause</span>\n    </div>\n    <div>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"fourthCard\">\n\n              <ion-card-header>\n                <ion-card-title>\n                  <ion-img class=\"fourthCardImage\" src=\"assets/images/walking.png\"></ion-img>\n                </ion-card-title>\n\n              </ion-card-header>\n\n              <ion-card-content>\n                <h5 style=\"text-align: center;\"><b>Walking</b></h5>\n\n              </ion-card-content>\n\n            </ion-card>\n          </ion-col>\n          <ion-col>\n            <ion-card class=\"fourthCard\">\n              <ion-card-header>\n                <ion-card-title>\n                  <ion-img class=\"fourthCardImage\" src=\"assets/images/jogging.png\"></ion-img>\n                </ion-card-title>\n\n              </ion-card-header>\n\n              <ion-card-content>\n                <h5 style=\"text-align: center;\"><b>Jogging</b></h5>\n\n              </ion-card-content>\n\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n    <div>\n      <p class=\"subTitleHeading\">Did you know?</p>\n      <span class=\"subTitle\">You can contribute to a cause by planting a tree?</span>\n    </div>\n    <ion-card class=\"fifthCard\">\n\n      <ion-card-content style=\"text-align:initial;\">\n        <ion-img col-md-4 class=\"fifthCardImage\" src=\"assets/images/plants.png\"></ion-img>\n\n        <span col-md-8 tyle=\"font-size: 14px\"> We will plant one tree for every 50Kms / 31 miles you cover. Let's go the\n          mile</span>\n      </ion-card-content>\n    </ion-card>\n\n    <!-- <ion-card>\n      <div> -->\n        <!-- <p class=\"subTitleHeading\"><a href=\"https://www.lntinfotech.com/general-privacy-policy/\">Privacy policy</a></p><br> -->\n        <!-- <a href=\"#\" onclick=\"window.open('https://www.lntinfotech.com/general-privacy-policy/','_system','location=yes')\">Privacy policy</a> -->\n        <!-- <ion-button color=\"favorite\" (click)=\"openPrivacyPolicy('https://www.lntinfotech.com/general-privacy-policy/')\" style=\"margin-top: 4%;\">Privacy Policy</ion-button>\n      </div>\n    </ion-card> -->\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/retry-popup/retry-popup.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tab1/retry-popup/retry-popup.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: none !important;\n}\n\n.modalPopup {\n  height: auto;\n  width: 100%;\n}\n\n.popUpTitle {\n  color: #00008C;\n  text-align: center;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.popUpBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n}\n\n.box-lbl {\n  font-size: small;\n  text-align: left;\n  color: #333333;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.popUpContent {\n  padding: 1% 10% 5% 10%;\n}\n\n.divbtn {\n  align-items: center;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.wrapText {\n  word-wrap: wrap break-word;\n  padding-left: 10px;\n}\n\n.itemRow {\n  margin: 10px;\n  text-align: left;\n}\n\n.radio-icon {\n  border-color: red !important;\n}\n\n.radio-checked .radio-icon {\n  border-color: red;\n}\n\n.yellowCard {\n  background: #FFD400;\n  padding: 10px;\n  align-items: center;\n  text-align: center;\n  margin: 25px 0px;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n}\n\nion-card {\n  margin: 10px;\n  padding: 1px;\n}\n\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\n\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9yZXRyeS1wb3B1cC9yZXRyeS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0osV0FBQTtBQUNBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQUVBOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUVJLHNCQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhDO0VBQ0csNEJBQUE7QUFNSjs7QUFKQTtFQUVBLGlCQUFBO0FBTUE7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFDQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUE7O0FBREk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdOOztBQURJO0VBRUUsK0JBQUE7QUFFTjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIxL3JldHJ5LXBvcHVwL3JldHJ5LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYmFja2dyb3VuZHtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbFBvcHVwe1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbndpZHRoOjEwMCU7XHJcbn1cclxuLnBvcFVwVGl0bGV7XHJcbiAgY29sb3I6ICMwMDAwOEM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5wb3BVcEJ0biB7XHJcbmJhY2tncm91bmQ6ICMwMDAwOEM7XHJcbmJvcmRlci1yYWRpdXM6IDdweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbjphdXRvO1xyXG4vL3dpZHRoOjEwMHB4O1xyXG5wYWRkaW5nOiAxMHB4IDIwcHg7XHJcbmZvbnQtc2l6ZTptZWRpdW07XHJcbn1cclxuLmJveC1sYmx7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgfVxyXG4ucG9wVXBDb250ZW50e1xyXG4gICAgLy8gbWFyZ2luOjIwcHg7XHJcbiAgICBwYWRkaW5nOiAxJSAxMCUgNSUgMTAlO1xyXG4gXHJcbn1cclxuLmRpdmJ0bntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLndyYXBUZXh0e1xyXG4gICAgd29yZC13cmFwOiB3cmFwIGJyZWFrLXdvcmQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4uaXRlbVJvd3tcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbiAucmFkaW8taWNvbntcclxuICAgIGJvcmRlci1jb2xvcjpyZWQgIWltcG9ydGFudDsgXHJcbiB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pY29uXHJcbntcclxuYm9yZGVyLWNvbG9yOnJlZDtcclxufVxyXG5cclxuLy8tLS1cclxuLnllbGxvd0NhcmR7XHJcbiAgYmFja2dyb3VuZDogICAjRkZENDAwO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46MjVweCAwcHg7XHJcbn1cclxuLy9cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiAjMDAwMDhDO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vLy8tLS1cclxuXHJcbmlvbi1jYXJke1xyXG5tYXJnaW46MTBweDtcclxucGFkZGluZzoxcHg7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24tY29sLmNvbEJvcmRlcntcclxuICAgICAgIFxyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjQ4LCAxNDYsIDE0Nik7XHJcbiAgICB9XHJcbiAgICBpb24tcm93LnZpb1R4dHtcclxuICAgICAgICBjb2xvcjojNkQ2M0Q5O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2VCdXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogIzAwMDA4QztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/retry-popup/retry-popup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab1/retry-popup/retry-popup.component.ts ***!
  \***********************************************************/
/*! exports provided: RetryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryPopupComponent", function() { return RetryPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



var RetryPopupComponent = /** @class */ (function () {
    function RetryPopupComponent(popover) {
        this.popover = popover;
    }
    RetryPopupComponent.prototype.ngOnInit = function () { };
    RetryPopupComponent.prototype.confirm = function () {
        this.popover.dismiss('reload');
    };
    RetryPopupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    RetryPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retry-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./retry-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/retry-popup/retry-popup.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./retry-popup.component.scss */ "./src/app/tab1/retry-popup/retry-popup.component.scss")).default]
        })
    ], RetryPopupComponent);
    return RetryPopupComponent;
}());



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
var Tab1PageRoutingModule = /** @class */ (function () {
    function Tab1PageRoutingModule() {
    }
    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab1PageRoutingModule);
    return Tab1PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/__ivy_ngcc__/fesm2015/angular-svg-round-progressbar.js");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _retry_popup_retry_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./retry-popup/retry-popup.component */ "./src/app/tab1/retry-popup/retry-popup.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");











var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__["RoundProgressModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot({
                    name: '__1StepMiles-localstorage',
                    driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
                })
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _retry_popup_retry_popup_component__WEBPACK_IMPORTED_MODULE_9__["RetryPopupComponent"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcomeMessage {\n  color: #0a090e;\n  font-weight: 700;\n  font-size: 20px;\n  padding-left: 5%;\n}\n\n.subHeading {\n  font-size: 16px;\n  font-weight: medium;\n}\n\n.cardData {\n  font-size: 12px;\n  width: 200px;\n}\n\n.cardContent {\n  padding-top: 5%;\n}\n\nion-card.topCard {\n  height: auto;\n  background: linear-gradient(385deg, #00008CC2, 80%, #00BDF2) 100% 0% no-repeat padding-box;\n  color: white;\n  font-size: 20px;\n  width: 90%;\n  margin-left: 5% !important;\n  border-radius: 10px;\n}\n\n.cardImage {\n  width: 34%;\n  height: 15%;\n  float: right;\n  opacity: 71%;\n}\n\n.buttonContainer {\n  text-align: center;\n}\n\n.targetButton {\n  text-transform: none;\n  background: white;\n  border-radius: 10px;\n  margin-top: 4%;\n  width: 220px;\n  height: 35px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.continueButton {\n  width: 220px;\n  text-transform: none;\n  background: white;\n  border-radius: 10px;\n  margin: auto;\n  height: 35px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\nion-button {\n  color: #00008C;\n  background-color: white;\n}\n\n.subTitleHeading {\n  font-weight: bold;\n  font-size: 18px;\n  color: black;\n  padding-left: 5%;\n  margin-bottom: 0;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 18px;\n  color: black;\n  margin-left: 5%;\n  margin-bottom: 0;\n}\n\n.subTitle {\n  padding-left: 5%;\n  color: #6B6B6B;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n\nion-card.secondCard {\n  background: white;\n  font-size: 12px;\n  width: 90%;\n  margin-left: 5% !important;\n  border-radius: 10px;\n}\n\n.graphImage {\n  height: 30%;\n  width: 30%;\n  /* margin-right: auto; */\n  position: relative;\n  margin: auto;\n  text-align: center;\n}\n\n.percentageValue {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: auto;\n  position: absolute;\n  color: #F58220;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.secondCardContent {\n  padding-left: 5%;\n  font-size: 12px;\n  color: #414141;\n}\n\nul {\n  padding-left: 0;\n  list-style: none;\n}\n\nli {\n  vertical-align: middle;\n}\n\n.firstBullet {\n  height: 15px;\n  width: 15px;\n  background-color: #F58220;\n  border-radius: 50%;\n  margin-right: 2%;\n  padding-top: 0;\n  float: left;\n  vertical-align: middle;\n}\n\n.secondBullet {\n  height: 15px;\n  width: 15px;\n  background-color: #FED715;\n  border-radius: 50%;\n  float: left;\n  margin-right: 2%;\n  vertical-align: middle;\n}\n\n.thirdCard {\n  width: 30%;\n}\n\n.fourthCard {\n  height: 125px;\n}\n\n.fourthCardImage {\n  width: 40%;\n  height: 40%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.fifthCardImage {\n  float: left;\n  width: 30%;\n  height: 20%;\n  padding-right: 10%;\n}\n\nion-card.fifthCard {\n  background: #fada5e;\n  font-size: 12px;\n  width: 90%;\n  margin-left: 5% !important;\n  border-radius: 10px;\n  color: black;\n}\n\n.stepCountSpacing {\n  color: black;\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.distanceSpacing {\n  color: black;\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.bordercolor {\n  border-left: 1px solid #F5C307;\n  text-align: center !important;\n}\n\n.treePlantedSpacing {\n  color: black;\n  font-weight: bold;\n  font-size: 13px;\n}\n\n.countSpacing {\n  color: #06C539;\n}\n\n.topCardExisting {\n  height: 102px;\n  width: 90%;\n  margin-left: 5%;\n}\n\n.topCardTarget {\n  background: transparent linear-gradient(232deg, #FFD400E6 0%, #F58220ED 100%) 0% 0% no-repeat padding-box;\n  color: white;\n  font-size: 20px;\n  width: 90%;\n  margin-left: 5% !important;\n  border-radius: 5%;\n}\n\n.badgeIcon {\n  height: 38px;\n  width: 38px;\n  background-color: #C4FFD3;\n  padding: 6%;\n  border-radius: 50%;\n  display: block;\n  margin: 0 auto;\n  margin-top: 2%;\n}\n\n.plantIcon {\n  height: 38px;\n  width: 38px;\n  background-color: #C4FFD3;\n  padding: 6%;\n  border-radius: 50%;\n  display: block;\n  margin: 0 auto;\n  margin-top: 2%;\n}\n\n.progressBar {\n  margin-top: 8%;\n  --progress-background: #2AF623;\n}\n\n.textStyle {\n  font-size: 13px;\n  margin-top: 4%;\n}\n\n.textPos {\n  font-size: 3vw;\n  float: right;\n}\n\n.line {\n  height: 47px;\n  border-left: 1px solid white;\n  position: absolute;\n  margin-left: 52%;\n  margin-top: -10%;\n}\n\n.scroll-content {\n  padding: 0px !important;\n}\n\n.box {\n  margin: 0% 5%;\n  padding: 0px 10px;\n  font-size: 1.4rem;\n  height: 60%;\n  background-color: #fff;\n  opacity: 1 !important;\n  margin-top: 20%;\n  border: 1px solid gray;\n}\n\nround-progress {\n  position: absolute;\n  height: 28%;\n  margin-top: -42%;\n  margin-left: 66%;\n}\n\n.main_box {\n  height: 100%;\n}\n\n[col-6] {\n  text-align: center;\n}\n\n.range-md .range-knob, .range-ios .range-knob {\n  width: 30px;\n  height: 30px;\n}\n\n.range-md .range-bar, .range-ios .range-bar {\n  top: 28px;\n}\n\n.label-md, .label-ios {\n  margin-top: 16px !important;\n}\n\n.current {\n  position: absolute;\n  font-weight: 400;\n  font-size: 28px;\n  margin-top: -33%;\n  margin-left: 74%;\n}\n\n.cardPos {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUVJO0VBRUksZUFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtJO0VBQ0ksZUFBQTtBQUZSOztBQUtJO0VBQ0ksWUFBQTtFQUdKLDBGQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVFJO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFJO0VBQ0ksa0JBQUE7QUFMUjs7QUFRSTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5SOztBQVNJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUlBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVFI7O0FBV0k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7QUFSUjs7QUFXSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBV0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBVUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7QUFSUjs7QUFXSTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUVBLG1CQUFBO0FBVEo7O0FBWUk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFUUjs7QUFXSTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUlI7O0FBV1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSWjs7QUFVUTtFQUNJLHNCQUFBO0FBUFo7O0FBVVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFSWjs7QUFVUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBUlo7O0FBV0k7RUFDSSxVQUFBO0FBUlI7O0FBV0k7RUFFSSxhQUFBO0FBVFI7O0FBYUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWUjs7QUFhSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVlI7O0FBY0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFYUjs7QUFjSTtFQUlJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFkUjs7QUFpQkk7RUFHSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBaEJSOztBQXFCSTtFQUNJLDhCQUFBO0VBQ0EsNkJBQUE7QUFsQlI7O0FBb0JJO0VBR0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQW5CUjs7QUF1Qkk7RUFHSSxjQUFBO0FBdEJSOztBQTJCSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXhCUjs7QUEyQkk7RUFFSSx5R0FBQTtFQUNKLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUF6Qko7O0FBNkJJO0VBR0ksWUFBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQTdCUjs7QUErQkk7RUFHSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBL0JSOztBQWtDSTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQS9CUjs7QUFpQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQTlCUjs7QUFpQ0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQTlCUjs7QUFrQ0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvQlI7O0FBa0RRO0VBQ0ksdUJBQUE7QUEvQ1o7O0FBaURRO0VBQU0sYUFBQTtFQUFlLGlCQUFBO0VBQW1CLGlCQUFBO0VBQW1CLFdBQUE7RUFBYSxzQkFBQTtFQUF3QixxQkFBQTtFQUF1QixlQUFBO0VBQWlCLHNCQUFBO0FBdENoSjs7QUF3Q1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBckNaOztBQXVDUTtFQUNJLFlBQUE7QUFwQ1o7O0FBc0NRO0VBQ0ksa0JBQUE7QUFuQ1o7O0FBcUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFsQ1o7O0FBb0NRO0VBQ0ksU0FBQTtBQWpDWjs7QUFtQ1E7RUFBdUIsMkJBQUE7QUEvQi9COztBQWdDUTtFQUNJLGtCQUFBO0VBQ0osZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTdCUjs7QUFnQ1E7RUFDSSxVQUFBO0FBN0JaIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAud2VsY29tZU1lc3NhZ2V7XHJcbiAgICAgICAgY29sb3I6ICMwYTA5MGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YkhlYWRpbmd7XHJcbiAgICAgICAgLy8gZm9udDogYm9sZCBub3JtYWwgbWVkaXVtIDE2cHggUm9ib3RvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6ICdSb2JvdG8sIE1lZGl1bSc7XHJcbiAgICB9XHJcbiAgICAuY2FyZERhdGF7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvLCBSZWd1bGFyJztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZENvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLnRvcENhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCM5NDc0RjEsI0JENURGNSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjIyZGVnLCAjMDBCREYyIDAlLCAjMDAwMDhDQzIgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM4NWRlZywjMDAwMDhDQzIsIDgwJSwgIzAwQkRGMiApIDEwMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBoZWlnaHQ6MTkzcHg7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ1JvYm90bywgTWVkaXVtJztcclxuICAgIH1cclxuICAgIC5jYXJkSW1hZ2V7XHJcbiAgICB3aWR0aDozNCU7XHJcbiAgICBoZWlnaHQ6MTUlO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBvcGFjaXR5OjcxJTtcclxuXHJcbiAgICB9XHJcbiAgICAuYnV0dG9uQ29udGFpbmVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFyZ2V0QnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDE0JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5jb250aW51ZUJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgY29sb3I6ICMwMDAwOEM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgfVxyXG4gICAgLnN1YlRpdGxlSGVhZGluZ3tcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTsgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgICAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnN1YlRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgY29sb3I6IzZCNkI2QjtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogLTEyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC5zZWNvbmRDYXJke1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyYXBoSW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAvKiBtYXJnaW4tcmlnaHQ6IGF1dG87ICovXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGVyY2VudGFnZVZhbHVle1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiAjRjU4MjIwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmRDYXJkQ29udGVudHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjojNDE0MTQxO1xyXG4gICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlyc3RCdWxsZXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGNTgyMjA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWNvbmRCdWxsZXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVENzE1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC50aGlyZENhcmR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZm91cnRoQ2FyZHtcclxuICAgICAgICAvLyB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgLy8gd2lkdGg6IDE3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3VydGhDYXJkSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6NDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZmlmdGhDYXJkSW1hZ2V7XHJcbiAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDoyMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLmZpZnRoQ2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJnYigyNTAsIDIxOCwgOTQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc3RlcENvdW50U3BhY2luZ3tcclxuICAgICAgICAvLyAgcGFkZGluZzogMTAlO1xyXG4gICAgICAgIC8vICBmbG9hdDpyaWdodDtcclxuICAgICAgICAvLyBmb250LWZhbWlseTogJ1JvYm90bywgTWVkaXVtJztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLy8gIHBhZGRpbmctbGVmdDogMzMlO1xyXG4gICAgfVxyXG4gICAgLmRpc3RhbmNlU3BhY2luZ3tcclxuICAgICAgICAvL3BhZGRpbmc6IDEwJTtcclxuICAgIC8vICBmbG9hdDpyaWdodDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvLCBNZWRpdW0nO1xyXG4gICAgLy8gIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuYm9yZGVyY29sb3J7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjVDMzA3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRyZWVQbGFudGVkU3BhY2luZ3tcclxuICAgIC8vICAgcGFkZGluZzogMTAlO1xyXG4gICAgLy8gIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6ICdSb2JvdG8sIE1lZGl1bSc7XHJcbiAgICAvL3BhZGRpbmctbGVmdDogMTAlOyAgXHJcbiAgICB9XHJcbiAgICAuY291bnRTcGFjaW5ne1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvLCBNZWRpdW0nO1xyXG4gICAgLy8gIHBhZGRpbmctbGVmdDogMjIlO1xyXG4gICAgICAgIGNvbG9yOiMwNkM1Mzk7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDclO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRvcENhcmRFeGlzdGluZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcENhcmRUYXJnZXR7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCM5NDc0RjEsI0JENURGNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDIzMmRlZywgI0ZGRDQwMEU2IDAlLCAjRjU4MjIwRUQgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgLy8gaGVpZ2h0OjIxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5iYWRnZUljb257XHJcblxyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAyOCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEZGRDM7XHJcbiAgICAgICAgcGFkZGluZzogNiU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgfVxyXG4gICAgLnBsYW50SWNvbntcclxuICAgICAgICBcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMzclO1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICB3aWR0aDogMzhweDtcclxuICAgICAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRGRkQzO1xyXG4gICAgICAgIHBhZGRpbmc6IDYlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3NCYXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMkFGNjIzO1xyXG4gICAgfVxyXG4gICAgLnRleHRTdHlsZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICAvLyAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgLnRleHRQb3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC03JTtcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogNzMlO1xyXG4gICAgfVxyXG4gICAgLmxpbmV7XHJcbiAgICAgICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MiU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyB0ZXN0aW5nXHJcblxyXG5cclxuICAgICAgICAuc2Nyb2xsLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94eyBtYXJnaW46IDAlIDUlOyBwYWRkaW5nOiAwcHggMTBweDsgZm9udC1zaXplOiAxLjRyZW07IGhlaWdodDogNjAlOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IDIwJTsgYm9yZGVyOiAxcHggc29saWQgZ3JheTsgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJvdW5kLXByb2dyZXNze1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjglO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNjYlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbl9ib3h7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgW2NvbC02XXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFuZ2UtbWQgLnJhbmdlLWtub2IsIC5yYW5nZS1pb3MgLnJhbmdlLWtub2J7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYW5nZS1tZCAucmFuZ2UtYmFyLCAucmFuZ2UtaW9zIC5yYW5nZS1iYXJ7XHJcbiAgICAgICAgICAgIHRvcDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhYmVsLW1kLCAubGFiZWwtaW9zeyBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgICAgIC5jdXJyZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zMyU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDc0JTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRQb3N7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _models_Employee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Employee */ "./src/app/models/Employee.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _retry_popup_retry_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retry-popup/retry-popup.component */ "./src/app/tab1/retry-popup/retry-popup.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








var Tab1Page = /** @class */ (function () {
    function Tab1Page(service, route, popover, ngzone, storage, changeDetec) {
        this.service = service;
        this.route = route;
        this.popover = popover;
        this.ngzone = ngzone;
        this.storage = storage;
        this.changeDetec = changeDetec;
        this.getEmpDetailsLoading = false;
        this.getUserCountLoading = false;
        this.getTreesPlantedLoading = false;
        this.getLeaderboardDetailsLoading = false;
        this.getEmpDetailsLoaded = false;
        this.getUserCountLoaded = false;
        this.getTreesPlantedLoaded = false;
        this.getLeaderboardDetailsLoaded = false;
        this.flag = 0;
        this.getVal = 0;
        this.existingUser = false;
        this.newUser = true;
        this.empDetails = null;
        this.goalDetails = null;
        this.psNo = null;
        this.currentSteps = 0;
        this.targetSteps = 0;
        this.currentKm = 0;
        this.targetKm = 0;
        this.inProgress = false;
        this.kmProgress = 0;
        this.stepProgress = 0;
        this.showLoading = true;
        this.contributingPeopleCount = null;
        this.avgTreesCount = null;
        this.generateTokenLoading = false;
        this.failedRequests = [];
    }
    Tab1Page.prototype.changeTimeFormat = function (time) {
        var decimalTimeString = time;
        var n = new Date(0, 0);
        n.setMinutes(+decimalTimeString * 60);
        n.setSeconds(+decimalTimeString * 60 * 60);
        time = n.toTimeString().slice(0, 5);
        var hr = time.split(':')[0];
        var min = time.split(':')[1];
        return hr + ' Hr ' + min + ' min';
    };
    // Will load the EmpObject from storage if exists
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribeDataChange();
        this.subscribeEventMessage();
        this.service.get('userData').then(function (result) {
            if (result) {
                _this.service.setUserData(result);
                _this.service.setEmpObject(result.empObj);
                var empObj = result.empObj;
                if (empObj && empObj.currentActivity) {
                    _this.service.setProgressStatus(true);
                }
            }
            _this.pageInit();
        });
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.updateUI();
    };
    Tab1Page.prototype.subscribeDataChange = function () {
        var _this = this;
        this.service.dataChange.subscribe(function () {
            // this.updateUI(this.service.getEmpObject())
            var empobj = _this.service.getEmpObject() || {};
            _this.currentKm = empobj.currentKm || 0;
            _this.targetKm = empobj.targetKm || 0;
            _this.currentSteps = empobj.currentSteps || 0;
            _this.stepProgress = Math.floor((_this.currentSteps / _this.targetSteps) * 100);
            _this.kmProgress = Math.floor((_this.currentKm / _this.targetKm) * 100);
            _this.inProgress = empobj.inProgress;
        });
    };
    Tab1Page.prototype.subscribeEventMessage = function () {
        var _this = this;
        this.service.eventMessage.subscribe(function (params) {
            if (params && params.callBackFn == 'getEmpDetails') {
                _this.getEmpDetails(params);
            }
        });
    };
    Tab1Page.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isNewUser;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.generateToken('pageInit');
                        return [4 /*yield*/, this.service.get('isNewUser')];
                    case 1:
                        isNewUser = _a.sent();
                        if (isNewUser === null) {
                            this.existingUser = false;
                            this.service.set('isNewUser', 'no');
                        }
                        else {
                            this.existingUser = true;
                        }
                        this.updateUI();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Update the variables to interpolate in the front end
    Tab1Page.prototype.updateUI = function () {
        // TRIAL-----------------------
        // this.getLeaderboardDetails()
        // -------------------------------
        var obj = this.service.getEmpObject() || {};
        if (!obj.name) {
            this.inProgress = false;
            return;
        }
        if (obj.currentActivity) {
            this.inProgress = true;
        }
        else {
            this.inProgress = false;
        }
        this.firstName = obj.name.split(' ')[0];
        this.currentKm = obj.currentKm;
        this.currentSteps = obj.currentSteps;
        this.targetSteps = obj.targetSteps;
        this.targetKm = obj.targetKm;
        //this.stepProgress = Math.floor((this.currentSteps / this.targetSteps) * 100)
        this.kmProgress = Math.floor((this.currentKm / this.targetKm) * 100);
        this.activityType = obj.currentActivity;
        this.location = obj.location;
        this.totalTrees = this.service.getTreesCount(this.totalKm);
    };
    // Get Employee details from API and call updateUI()
    Tab1Page.prototype.getEmpDetails = function (params) {
        if (params === void 0) { params = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.getEmpDetailsLoading = true;
                        this.service.employeeDetailsLoading = !this.refresher;
                        _a = this;
                        return [4 /*yield*/, this.service.get('loggedInUserEmail')];
                    case 1:
                        _a.empEmail = _b.sent();
                        if (localStorage.getItem('access_token')) {
                            this.service.getEmployeeAllDetails(this.empEmail).subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var empDetails, goalDetails, obj, userData, data;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    console.log("getEmpDetails: ", JSON.stringify(response));
                                    empDetails = response.EmplDetails;
                                    goalDetails = response.goalList[0];
                                    this.teamDetails = response.teamMemberDetail;
                                    obj = {};
                                    userData = {};
                                    if (goalDetails != undefined || goalDetails != null) {
                                        obj = new _models_Employee__WEBPACK_IMPORTED_MODULE_4__["Employee"](empDetails.PSNumber, empDetails.EmployeeName, empDetails.EmpEmailID, empDetails.Location_Descr, goalDetails.TargetID, goalDetails.ActivityType, goalDetails.CurrentSteps, goalDetails.CurrentKM, goalDetails.TargetSteps, goalDetails.TargetKM);
                                        this.service.set('goalStartDate', goalDetails.GoalStartdate);
                                        userData.empObj = obj;
                                        userData.goalDetails = goalDetails;
                                    }
                                    else {
                                        obj = new _models_Employee__WEBPACK_IMPORTED_MODULE_4__["Employee"](empDetails.PSNumber, empDetails.EmployeeName, empDetails.EmpEmailID, empDetails.Location_Descr, null, null, null, null, null, null);
                                        userData.empObj = obj;
                                    }
                                    this.service.setEmpObject(obj);
                                    this.service.setUserData(userData);
                                    this.service.set('userData', userData);
                                    this.service.set('empObjBefore', obj);
                                    if (this.teamDetails && this.teamDetails.TeamID) {
                                        this.service.set('teamId', this.teamDetails.TeamID);
                                    }
                                    this.getLeaderboardDetailsLoading = true;
                                    this.getLeaderboardDetails();
                                    this.getEmpDetailsLoading = false;
                                    this.service.employeeDetailsLoading = false;
                                    this.getEmpDetailsLoaded = true;
                                    this.hideRefresher();
                                    if (obj.currentActivity) {
                                        this.service.setProgressStatus(true);
                                    }
                                    data = {};
                                    if (params.callBackParams == 'targetConfirm') {
                                        data.callBackFn = 'targetConfirmPopup';
                                    }
                                    else if (params.callBackParams == 'targetComplete') {
                                        data.callBackFn = 'targetAchivedPopup';
                                        data.targetObj = params.targetObj;
                                    }
                                    if (data.callBackFn) {
                                        this.service.eventMessage.next(data);
                                    }
                                    this.updateUI();
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                _this.service.employeeDetailsLoading = false;
                                _this.getEmpDetailsLoading = false;
                                _this.getEmpDetailsLoaded = true;
                                _this.hideRefresher();
                                _this.service.dismissLoading();
                                console.log("error--+" + JSON.stringify(error));
                                if (error.status === 401) {
                                    _this.generateToken('getEmpDetails');
                                }
                                else {
                                    _this.retryPopup();
                                }
                            });
                        }
                        else {
                            this.service.dismissLoading();
                            this.generateToken('getEmpDetails');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.retryPopup = function () {
        var _this = this;
        this.popover.create({
            component: _retry_popup_retry_popup_component__WEBPACK_IMPORTED_MODULE_6__["RetryPopupComponent"],
            cssClass: 'retryPopover', backdropDismiss: false
        }).then(function (popoverElement) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        popoverElement.present();
                        return [4 /*yield*/, popoverElement.onDidDismiss()];
                    case 1:
                        data = (_a.sent()).data;
                        if (data === 'reload') {
                            this.getEmpDetails();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Tab1Page.prototype.startWalk = function () {
        this.route.navigate(['/tabs/tab2']);
    };
    Tab1Page.prototype.setTarget = function () {
        this.route.navigate(['tabs/setTarget']);
    };
    Tab1Page.prototype.doRefresh = function (event) {
        this.refresher = event;
        // this.getEmpDetails()   // commented to avoid step loss on page refresh
        // console.log("here",this.empDetails)
        this.getLeaderboardDetails();
        this.getTreesPlanted();
        this.getUserCount();
    };
    Tab1Page.prototype.hideRefresher = function () {
        console.log('getEmpDetailsLoading', this.getEmpDetailsLoading);
        if (this.refresher && this.refresher.target) {
            if (!this.getEmpDetailsLoading && !this.getUserCountLoading && !this.getTreesPlantedLoading
                && !this.getLeaderboardDetailsLoading) {
                this.refresher.target.complete();
                this.refresher = '';
            }
        }
    };
    Tab1Page.prototype.getLeaderboardDetails = function () {
        var _this = this;
        var empObj = this.service.getEmpObject() || {};
        if (!empObj.psNo) {
            this.getLeaderboardDetailsLoading = false;
            return;
        }
        this.getLeaderboardDetailsLoading = true;
        console.log('getLeaderboardDetailsLoading', this.getLeaderboardDetailsLoading);
        this.service.getLeaderboardRanks(empObj.psNo).subscribe(function (response) {
            // console.log("first response: ",response[0])
            _this.totalKm = response[0].TotalKMs;
            _this.totalSteps = Math.floor(_this.totalKm * 1232);
            _this.totalTrees = _this.service.getTreesCount(_this.totalKm);
            _this.service.totalKm = _this.totalKm;
            _this.getLeaderboardDetailsLoading = false;
            _this.getLeaderboardDetailsLoaded = true;
            _this.hideRefresher();
        }, function (error) {
            _this.getLeaderboardDetailsLoading = false;
            _this.getLeaderboardDetailsLoaded = true;
            _this.hideRefresher();
            if (error.status === 401) {
                _this.generateToken('getLeaderboardDetails');
            }
        });
    };
    Tab1Page.prototype.generateToken = function (retryFuncName) {
        var _this = this;
        if (retryFuncName) {
            this.failedRequests.push(retryFuncName);
        }
        if (this.generateTokenLoading) {
            return;
        }
        this.generateTokenLoading = true;
        this.service.showLoading();
        this.service.generateToken().subscribe(function (response) {
            localStorage.setItem("token_expires_on", response.expires_on);
            localStorage.setItem('access_token', response.access_token);
            localStorage.setItem("token_expires_in", response.expires_in);
            // console.log(localStorage.getItem('access_token'))
            var that = _this;
            if (_this.failedRequests && _this.failedRequests.length > 0) {
                _this.failedRequests.forEach(function (value, index) {
                    console.log("failedReq:", value);
                    if (value == 'pageInit') {
                        that.getTreesPlanted();
                        that.getUserCount();
                        if (!that.service.getProgressStatus()) {
                            that.getEmpDetails();
                        }
                        else {
                            that.getLeaderboardDetails();
                        }
                    }
                    else {
                        that[value]();
                    }
                }, _this);
                that.failedRequests = [];
            }
            _this.service.dismissLoading();
            _this.generateTokenLoading = false;
        }, function (error) {
            _this.service.dismissLoading();
            _this.generateTokenLoading = false;
            console.log('Token Error in Home:' + JSON.stringify(error));
        });
    };
    Tab1Page.prototype.getTreesPlanted = function () {
        var _this = this;
        this.getTreesPlantedLoading = true;
        this.service.getTreesPlanted().subscribe(function (response) {
            _this.avgTreesCount = response;
            _this.getTreesPlantedLoading = false;
            _this.getTreesPlantedLoaded = true;
            _this.hideRefresher();
        }, function (error) {
            _this.getTreesPlantedLoading = false;
            _this.getTreesPlantedLoaded = true;
            _this.hideRefresher();
            if (error.status === 401) {
                _this.generateToken('getTreesPlanted');
            }
        });
    };
    Tab1Page.prototype.getUserCount = function () {
        var _this = this;
        this.getUserCountLoading = true;
        this.service.getUserCount().subscribe(function (response) {
            _this.contributingPeopleCount = response;
            _this.getUserCountLoading = false;
            _this.getUserCountLoaded = true;
            _this.hideRefresher();
        }, function (error) {
            _this.getUserCountLoading = false;
            _this.getUserCountLoaded = true;
            _this.hideRefresher();
            if (error.status === 401) {
                _this.generateToken('getUserCount');
            }
        });
    };
    Tab1Page.prototype.openPrivacyPolicy = function (url) {
        window.open(url, '_system', 'location=yes');
        console.log("Clicked");
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map