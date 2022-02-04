(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/select-activity-alert/select-activity-alert.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/select-activity-alert/select-activity-alert.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  style=\"font-family: 'Roboto';\">\n  <h2 class=\"popUpTitle\">Select Activity</h2>\n\n  <div class=\"popUpContent\">\n    <p style=\"margin-top:20px;margin-bottom:20px; color: black; text-align: center;\">Please select an Activity to continue\n    </p>\n\n    <div class=\"divbtn\">\n      <button class=\"popUpBtn\" (click)=\"confirm()\">\n        Ok\n      </button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/set-target/set-target.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/set-target/set-target.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons>\n\n      <ion-button slot=\"start\" (click)=\"goBack()\" fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" class=\"backIcon\"></ion-icon>\n      </ion-button>\n      <ion-title class=\"ion-text-center\" style=\"color: #00008C\">Set Target</ion-title>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n    <div class=\"activity--div\">\n            <ion-title class=\"ion-text-center step--label\">Step 1 of 2</ion-title>\n              <ion-row class=\"mt-3\">\n                  <ion-col size=\"5\"><ion-text></ion-text>\n                  </ion-col>\n                  <ion-col size=\"1\">\n                      <ion-progress-bar value=\"1\" style=\"color: #6D63D9\"></ion-progress-bar>\n                  </ion-col>\n                  <ion-col size=\"1\">\n                      <ion-progress-bar value=\"0\"></ion-progress-bar>\n                  </ion-col>\n                  <ion-col size=\"5\"><ion-text></ion-text>\n                  </ion-col>\n                </ion-row>              \n      </div>\n\n</ion-content> -->\n\n\n\n<ion-content fullscreen scroll-y=\"false\" style=\"font-family: 'Roboto';\">\n\n\n  <div class='hideBg' *ngIf=\"service.employeeDetailsLoading\">\n    <div class=\"page-loader\">\n      <img src=\"assets/images/loader.gif\">\n    </div>\n  </div>\n\n\n  <ion-slides #theSlides>\n    <ion-slide class=\"slide1\" *ngIf=\"page===1\">\n\n      <p style=\"font-size: small;  color: black;\">Step <b>1</b> of 2</p>\n      <div class=\"pager\">\n        <div class=\"pagerActive\"></div>\n        <div class=\"pagerInActive\"></div>\n      </div>\n      <!-- <p> Set a target</p> -->\n      <div class=\"activity--div\">\n        <p class=\"ion-text-center target--label\">Select an Activity</p>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-card class=\"activity--card \" [style.background]=\"walkButtonColor\"\n                (click)=\"selectActivity(theSlides, 'Walking')\">\n                <ion-button class=\"select--activity\"></ion-button>\n                <img class=\"activity--icon\" style=\"width: 34px; height: 64px;\" src=\"assets/images/WalkingGirl.png\"\n                  alt=\"your image\">\n                <ion-text class=\"activity--label\">\n                  <p>Walking</p>\n                </ion-text>\n              </ion-card>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-card class=\"activity--card\" [style.background]=\"jogButtonColor\"\n                (click)=\"selectActivity(theSlides, 'Jogging')\">\n                <ion-button class=\"select--activity\"></ion-button>\n                <img class=\"activity--icon\" style=\"width: 50px; height: 64px;\" src=\"assets/images/joggingMan.png\"\n                  alt=\"your image\">\n                <ion-text class=\"activity--label\">\n                  <p>Jogging</p>\n                </ion-text>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"activity--div\">\n        <p class=\"ion-text-center target--label\" style=\"color: #6D63D9;\">More Activities</p>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-card class=\"activity--card \" style=\"padding-top: 10%;\">\n                <ion-text class=\"ion-text-center comingsoon--label\">Coming Soon</ion-text>\n                <img class=\"activity--icon\" style=\"width: 56px; height: 48px;\" src=\"assets/images/skating.png\"\n                  alt=\"your image\">\n                <ion-text class=\"activity--label\">\n                  <p>Skating</p>\n                </ion-text>\n              </ion-card>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-card class=\"activity--card\" style=\"padding-top: 10%;\">\n                <ion-text class=\"ion-text-center comingsoon--label\">Coming Soon</ion-text>\n                <img class=\"activity--icon\" style=\"width: 45px; height: 48Sxxxpx;\" src=\"assets/images/workout.png\"\n                  alt=\"your image\">\n                <ion-text class=\"activity--label\">\n                  <p>Gymming</p>\n                </ion-text>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <!-- <div class=\"divbtn\">\n          <button class=\"target--button\" (click)=\"moveToNext(theSlides)\">\n          Next\n        </button >\n      </div> -->\n    </ion-slide>\n    <ion-slide *ngIf=\"page===2\">\n      <p style=\"font-size: small;  color: black;\">Step <b>2</b> of 2</p>\n      <div class=\"pager\">\n        <div class=\"pagerActive\"></div>\n        <div class=\"pagerActive\"></div>\n      </div>\n      <p class=\"slideTitle\"> Set a target </p>\n      <ion-row style=\"margin-bottom:20px;margin-top:10px\">\n        <ion-col size=\"12\">\n          <span class=\"spanKM\">(KM)</span>\n          <span class=\"value-button\" id=\"decrease\" (click)=\"decreaseValue()\">-</span>\n          <input type=\"number\" id=\"number\" readonly (change)=\"checkValue()\" [(ngModel)]=\"kmVal\" [value]=\"kmVal\" />\n          <span class=\"value-button\" id=\"increase\" (click)=\"increaseValue()\">+</span>\n          <span class=\"spanKM\">(KM)</span>\n\n        </ion-col>\n\n\n      </ion-row>\n      <ion-card class=\"bottomCard\">\n        <ion-row style=\"color:white\">\n          <ion-col size=\"9\">\n\n            <p style=\"text-align: left;padding-left:10px\">\n              That's a good Target!\n            </p>\n            <p style=\"text-align:left;padding-left:10px\">\n              Walking will help you earn better health, and a beginner badge<span style=\"font-size: 24px\">☺</span>\n            </p>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <img src=\"assets/images/undraw_environment_iaus.svg\" style=\"max-width:100%;max-height:100%;\">\n          </ion-col>\n\n        </ion-row>\n      </ion-card>\n\n      <div class=\"divbtn\">\n        <ion-button class=\"confirmBtn\" (click)=\"!setTargetLoading && setTarget()\">\n          {{setTargetLoading?'':'Confirm'}}\n          <ion-spinner *ngIf=\"setTargetLoading\" name=\"dots\" color=\"light\"></ion-spinner>\n        </ion-button>\n      </div>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"tab1\" tabIcon=\"tab1\" >\n      <div class=\"iconContainer\" *ngIf=\"selectedTab === 'tab1'\">\n        <img src=\"assets/images/homeSelected.png\" class=\"iconHome\" >\n      </div>\n      <img *ngIf=\"selectedTab != 'tab1'\" src=\"assets/images/home2.png\"  class=\"Icon\">\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\" tabIcon=\"tab2\">\n      <div class=\"iconContainer\" *ngIf=\"selectedTab === 'tab2'\">\n        <img src=\"assets/images/achievementSelected.png\" class=\"iconActivity\" >\n      </div>\n      <img *ngIf=\"selectedTab != 'tab2'\" src=\"assets/images/achievement2.png\"  class=\"Icon\">\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab5\" tabIcon=\"tab5\">\n      <div class=\"iconContainer\" *ngIf=\"selectedTab === 'tab5'\">\n        <img src=\"assets/images/groupSelected.png\" class=\"iconGroup\" >\n      </div>\n      <img *ngIf=\"selectedTab != 'tab5'\" src=\"assets/images/group.png\"  class=\"Icon\">\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" tabIcon=\"tab3\">\n      <div class=\"iconContainer\" *ngIf=\"selectedTab === 'tab3'\">\n        <img src=\"assets/images/leaderboardSelected.png\" class=\"iconLeaderboard\" >\n      </div>\n      <img *ngIf=\"selectedTab != 'tab3'\" src=\"assets/images/leaderboard2.png\"  class=\"Icon\">\n    </ion-tab-button>\n\n  <ion-tab-button tab=\"tab4\" tabIcon=\"tab4\">\n    <div class=\"iconContainer\" *ngIf=\"selectedTab === 'tab4'\">\n      <img src=\"assets/images/profileSelected.png\" class=\"iconProfile\" >\n    </div>\n    <img *ngIf=\"selectedTab != 'tab4'\" src=\"assets/images/profile2.png\"  class=\"Icon\">\n  </ion-tab-button>\n</ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/target-confirm/target-confirm.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/target-confirm/target-confirm.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  style=\"font-family: 'Roboto';\">\n<br>\n    <h5  class=\"popUpTitle\">Target Confirmed</h5>\n\n  <div class=\"popUpContent\">\n\n<p style=\"text-align: center;font-size: 15px;margin-top:20px; color: black;\">Goal set Successfully!</p>\n<p style=\"text-align: center;font-size: 15px;margin-top:20px; color: black;\">Please make sure your device is connected to the internet to keep your progress up to date</p>\n\n<div class=\"divbtn\">\n  <button class=\"popUpBtn\" (click)=\"navigateToActivity()\">\n      Continue \n</button >\n</div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/select-activity-alert/select-activity-alert.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/tabs/select-activity-alert/select-activity-alert.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: none !important;\n}\n\n.modalPopup {\n  height: auto;\n  width: 100%;\n}\n\n.popUpTitle {\n  color: #00008C;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.popUpBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n}\n\n.box-lbl {\n  font-size: small;\n  text-align: left;\n  color: #333333;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.popUpContent {\n  margin: 20px;\n  font-size: 14px;\n}\n\n.divbtn {\n  align-items: center;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.wrapText {\n  word-wrap: wrap break-word;\n  padding-left: 10px;\n}\n\n.itemRow {\n  margin: 10px;\n  text-align: left;\n}\n\n.radio-icon {\n  border-color: red !important;\n}\n\n.radio-checked .radio-icon {\n  border-color: red;\n}\n\n.yellowCard {\n  background: #FFD400;\n  padding: 10px;\n  align-items: center;\n  text-align: center;\n  margin: 25px 0px;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n}\n\nion-card {\n  margin: 10px;\n  padding: 1px;\n}\n\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\n\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZWxlY3QtYWN0aXZpdHktYWxlcnQvc2VsZWN0LWFjdGl2aXR5LWFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDSixXQUFBO0FBQ0E7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0E7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEM7RUFDRyw0QkFBQTtBQU1KOztBQUpBO0VBRUEsaUJBQUE7QUFNQTs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUtGOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUNBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFQTs7QUFESTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBR047O0FBREk7RUFFRSwrQkFBQTtBQUVOOztBQUFJO0VBQ0ksY0FBQTtBQUVSOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvc2VsZWN0LWFjdGl2aXR5LWFsZXJ0L3NlbGVjdC1hY3Rpdml0eS1hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJhY2tncm91bmR7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWxQb3B1cHtcclxuICAgIGhlaWdodDphdXRvO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5wb3BVcFRpdGxle1xyXG4gIGNvbG9yOiAjMDAwMDhDO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBcclxufVxyXG4ucG9wVXBCdG4ge1xyXG5iYWNrZ3JvdW5kOiAjMDAwMDhDO1xyXG5ib3JkZXItcmFkaXVzOiA3cHg7XHJcbm9wYWNpdHk6IDE7XHJcbmNvbG9yOndoaXRlO1xyXG5tYXJnaW46YXV0bztcclxuLy93aWR0aDoxMDBweDtcclxucGFkZGluZzogMTBweCAyMHB4O1xyXG5mb250LXNpemU6bWVkaXVtO1xyXG59XHJcbi5ib3gtbGJse1xyXG4gICAgZm9udC1zaXplOnNtYWxsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgbWFyZ2luLXRvcDoycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgIH1cclxuLnBvcFVwQ29udGVudHtcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gXHJcbn1cclxuLmRpdmJ0bntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLndyYXBUZXh0e1xyXG4gICAgd29yZC13cmFwOiB3cmFwIGJyZWFrLXdvcmQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4uaXRlbVJvd3tcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbiAucmFkaW8taWNvbntcclxuICAgIGJvcmRlci1jb2xvcjpyZWQgIWltcG9ydGFudDsgXHJcbiB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pY29uXHJcbntcclxuYm9yZGVyLWNvbG9yOnJlZDtcclxufVxyXG5cclxuLy8tLS1cclxuLnllbGxvd0NhcmR7XHJcbiAgYmFja2dyb3VuZDogICAjRkZENDAwO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46MjVweCAwcHg7XHJcbn1cclxuLy9cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIGNvbG9yOiAjMDAwMDhDO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vLy8tLS1cclxuXHJcbmlvbi1jYXJke1xyXG5tYXJnaW46MTBweDtcclxucGFkZGluZzoxcHg7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24tY29sLmNvbEJvcmRlcntcclxuICAgICAgIFxyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjQ4LCAxNDYsIDE0Nik7XHJcbiAgICB9XHJcbiAgICBpb24tcm93LnZpb1R4dHtcclxuICAgICAgICBjb2xvcjojNkQ2M0Q5O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2VCdXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogIzAwMDA4QztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/select-activity-alert/select-activity-alert.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tabs/select-activity-alert/select-activity-alert.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectActivityAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectActivityAlertComponent", function() { return SelectActivityAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



var SelectActivityAlertComponent = /** @class */ (function () {
    function SelectActivityAlertComponent(popover) {
        this.popover = popover;
    }
    SelectActivityAlertComponent.prototype.ngOnInit = function () { };
    SelectActivityAlertComponent.prototype.confirm = function () {
        this.popover.dismiss();
    };
    SelectActivityAlertComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    SelectActivityAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-activity-alert',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-activity-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/select-activity-alert/select-activity-alert.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-activity-alert.component.scss */ "./src/app/tabs/select-activity-alert/select-activity-alert.component.scss")).default]
        })
    ], SelectActivityAlertComponent);
    return SelectActivityAlertComponent;
}());



/***/ }),

/***/ "./src/app/tabs/set-target/set-target.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/tabs/set-target/set-target.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.activity--card {\n  width: 35vw;\n  height: 35vw;\n  padding-top: 5%;\n  margin-left: 13%;\n}\nion-card.activity--card .select--activity {\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 2;\n}\nion-card.activity--card .select--activity {\n  width: 35px;\n  height: 35px;\n}\nion-card.activity--card .comingsoon--label {\n  position: absolute;\n  transform: rotate(-315deg);\n  top: 12%;\n  right: -33%;\n  z-index: 2;\n  height: 20px;\n  width: 100%;\n  background-color: #FF9E20;\n  color: white;\n  font-size: 10px;\n  font-weight: 500;\n  text-align: center;\n  padding: 5px;\n}\nion-card.activity--card .activity--icon {\n  width: 30px;\n  height: 40px;\n  margin-top: 10px;\n}\nion-card.activity--card .activity--label {\n  padding-top: 5%;\n  text-align: center;\n  /* display: block; */\n  /* height: 19px; */\n  /* font-family: \"Roboto\"; */\n  font-size: medium;\n  font-weight: 600;\n  color: #333333;\n}\n.target--button {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  /* margin: auto; */\n  padding: 10px;\n  font-size: medium;\n  width: 96%;\n}\n.divbtn {\n  margin-top: 30px;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n}\n.target--label {\n  height: 27px;\n  font-weight: 600;\n  color: #333333;\n}\nion-button {\n  text-transform: none;\n}\n.activity--div {\n  margin: 0 auto;\n}\n.step--label {\n  height: 19px;\n  font-family: \"Roboto\";\n  font-size: 16px;\n  font-weight: 400;\n}\nion-card {\n  margin: 0px 25px;\n}\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n.white {\n  position: relative;\n  top: -25px;\n  width: 58px;\n  height: 50px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background: #fff;\n  opacity: 1;\n  z-index: 2000;\n  margin: auto;\n}\n.topBar {\n  display: flex;\n  height: 22px;\n}\n.trans {\n  height: 25px;\n  opacity: 0.2;\n  --backdrop-opacity: 0.8;\n  background: black;\n}\n.closeIcon {\n  position: absolute;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n}\n.ruler {\n  width: 100px;\n  overflow-x: scroll;\n}\n.bottomCard {\n  padding: 1%;\n  border-radius: 11px;\n  text-align: left;\n  color: #FFFFFF;\n  background: linear-gradient(241deg, #0ABDEF8C 0%, #006FBA 100%);\n}\nion-slides {\n  height: 98%;\n}\n.swiper-slide {\n  display: block;\n  overflow: scroll;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  pointer-events: none;\n}\n.value-button {\n  border: 1px solid #ddd;\n  margin: 0px;\n  height: 40px;\n  padding: 12px;\n  background: #eee;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.value-button:hover {\n  cursor: pointer;\n}\n#decrease {\n  margin-right: -4px;\n  border-radius: 8px 0 0 8px;\n  color: #00008C;\n}\n#increase {\n  margin-left: -4px;\n  border-radius: 0 8px 8px 0;\n  color: #00008C;\n}\n#input-wrap {\n  margin: 0px;\n  padding: 0px;\n}\ninput#number {\n  text-align: center;\n  border: none;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  margin: 0px;\n  width: 30%;\n  height: 47px;\n  color: #00008C;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.spanKM {\n  color: #6D63D9;\n  margin: 10px;\n}\n.slideTitle {\n  color: #333333;\n}\n.kmTxt {\n  font-size: 18px;\n  color: #00008C;\n}\n.confirmBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  /* margin: auto; */\n  font-size: medium;\n  width: 96%;\n}\n.pager {\n  display: flex;\n  justify-content: center;\n}\n.pager div {\n  height: 6px;\n  padding-left: 18px;\n  padding-right: 18px;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  margin: 4px;\n}\n.pagerActive {\n  background: #00008C;\n}\n.pagerInActive {\n  background: #E1E1E1;\n}\n.backIcon {\n  color: #00008C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9zZXQtdGFyZ2V0L3NldC10YXJnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZGO0FBSUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFGSjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFISjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsZ0JBQUE7QUFSSjtBQVdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFUSjtBQWFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBVkY7QUFhQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFWRjtBQWFBO0VBQ0UsWUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQVhGO0FBY0E7RUFDRSxvQkFBQTtBQVhGO0FBY0E7RUFDRSxjQUFBO0FBWEY7QUFlQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVpGO0FBZUE7RUFFRSxnQkFBQTtBQWJGO0FBZUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWJKO0FBZ0JFO0VBRUUsK0JBQUE7QUFmSjtBQWtCRTtFQUNFLGNBQUE7QUFoQko7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQWpCRjtBQW9CQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBakJGO0FBb0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBakJGO0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW9CQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQWpCRjtBQXNCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtEQUFBO0FBbkJGO0FBc0JBO0VBQ0UsV0FBQTtBQW5CRjtBQXNCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQW5CRjtBQXdCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7QUF0QkY7QUF5QkE7RUFFRSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBR0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBRUEsaUJBQUE7QUExQkY7QUE2QkE7RUFDRSxlQUFBO0FBMUJGO0FBNkJBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUExQkY7QUE2QkE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQTFCRjtBQTZCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBMUJGO0FBNkJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUExQkY7QUE2QkE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBMUJGO0FBNkJBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUExQkY7QUE2QkE7RUFDRSxjQUFBO0FBMUJGO0FBNkJBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QUEzQkY7QUE4QkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsVUFBQTtBQTVCRjtBQStCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQTVCRjtBQThCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTVCSjtBQWdDQTtFQUNFLG1CQUFBO0FBN0JGO0FBZ0NBO0VBQ0UsbUJBQUE7QUE3QkY7QUFnQ0E7RUFFRSxjQUFBO0FBOUJGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9zZXQtdGFyZ2V0L3NldC10YXJnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5hY3Rpdml0eS0tY2FyZCB7XHJcbiAgLy8gZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIC8vIHdpZHRoOiA3MCU7XHJcbiAgLy8gaGVpZ2h0OiAyMHZoO1xyXG4gIHdpZHRoOiAzNXZ3OyBcclxuICBoZWlnaHQ6IDM1dnc7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMyU7XHJcblxyXG4gIC5zZWxlY3QtLWFjdGl2aXR5IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC0tYWN0aXZpdHkge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuY29taW5nc29vbi0tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTMxNWRlZyk7XHJcbiAgICB0b3A6IDEyJTtcclxuICAgIHJpZ2h0OiAtMzMlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOUUyMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICB9XHJcblxyXG4gIC5hY3Rpdml0eS0taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8vICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIC8vICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2aXR5LS1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIC8qIGhlaWdodDogMTlweDsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiOyAqL1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4udGFyZ2V0LS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwOEM7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbi5kaXZidG4ge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YXJnZXQtLWxhYmVsIHtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZpdHktLWRpdiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0ZXAtLWxhYmVsIHtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwXHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuXHJcbiAgbWFyZ2luOiAwcHggMjVweDtcclxuXHJcbiAgaW9uLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbC5jb2xCb3JkZXIge1xyXG5cclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNDgsIDE0NiwgMTQ2KTtcclxuICB9XHJcblxyXG4gIGlvbi1yb3cudmlvVHh0IHtcclxuICAgIGNvbG9yOiAjNkQ2M0Q5O1xyXG4gIH1cclxufVxyXG5cclxuLndoaXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMjVweDtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMjAwMDtcclxuICBtYXJnaW46IGF1dG9cclxufVxyXG5cclxuLnRvcEJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi50cmFucyB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuODtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLmNsb3NlSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ydWxlciB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHJcbn1cclxuXHJcbi8vLS0tc2V0IHRhcmdldCAtLS8vXHJcbi5ib3R0b21DYXJkIHtcclxuICBwYWRkaW5nOiAxJTtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI0MWRlZywgIzBBQkRFRjhDIDAlLCAjMDA2RkJBIDEwMCUpO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDk4JTtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuXHJcblxyXG4uc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIG1heC13aWR0aDogODAlO1xyXG4gIC8vIG1hcmdpbjogNjBweCAwIDQwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi52YWx1ZS1idXR0b24ge1xyXG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC8vIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udmFsdWUtYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNkZWNyZWFzZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xyXG4gIGNvbG9yOiAjMDAwMDhDO1xyXG59XHJcblxyXG4jaW5jcmVhc2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xyXG4gIGNvbG9yOiAjMDAwMDhDO1xyXG59XHJcblxyXG4jaW5wdXQtd3JhcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5pbnB1dCNudW1iZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbiAgY29sb3I6ICMwMDAwOENcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGFuS00ge1xyXG4gIGNvbG9yOiAjNkQ2M0Q5O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLnNsaWRlVGl0bGUge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4ua21UeHQge1xyXG5cclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDAwOEM7XHJcbn1cclxuXHJcbi5jb25maXJtQnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDhDO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgLy8gcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICB3aWR0aDogOTYlO1xyXG59XHJcblxyXG4ucGFnZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGRpdiB7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZXJBY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwOEM7XHJcbn1cclxuXHJcbi5wYWdlckluQWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xyXG59XHJcblxyXG4uYmFja0ljb24ge1xyXG5cclxuICBjb2xvcjogIzAwMDA4QztcclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/set-target/set-target.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tabs/set-target/set-target.component.ts ***!
  \*********************************************************/
/*! exports provided: SetTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTargetComponent", function() { return SetTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _select_activity_alert_select_activity_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select-activity-alert/select-activity-alert.component */ "./src/app/tabs/select-activity-alert/select-activity-alert.component.ts");
/* harmony import */ var _target_confirm_target_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../target-confirm/target-confirm.component */ "./src/app/tabs/target-confirm/target-confirm.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");








var SetTargetComponent = /** @class */ (function () {
    function SetTargetComponent(popover, storage, router, service, nav) {
        var _this = this;
        this.popover = popover;
        this.storage = storage;
        this.router = router;
        this.service = service;
        this.nav = nav;
        this.setTargetLoading = false;
        this.isActive = false;
        this.selectedActivity = null;
        this.page = 1;
        this.generateTokenLoading = false;
        this.failedRequests = [];
        this.subscription = this.service.eventMessage.subscribe(function (params) {
            if (params && params.callBackFn == 'targetConfirmPopup') {
                _this.targetConfirmPopup();
            }
        });
    }
    SetTargetComponent.prototype.getTodaysDate = function () {
        var date_ob = new Date();
        var date = ("0" + date_ob.getDate()).slice(-2);
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var year = date_ob.getFullYear();
        return (year + "/" + month + "/" + date);
    };
    SetTargetComponent.prototype.setTarget = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var targetObj;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.service.set('isPaused', 'false');
                targetObj = {
                    PSNumber: this.service.getEmpObject().psNo,
                    ActivityType: this.selectedActivity,
                    TargetKM: this.kmVal,
                    TargetSteps: Math.round(this.kmVal * 1232),
                    GoalStartdate: this.getTodaysDate()
                };
                console.log("targetObj", targetObj);
                if (localStorage.getItem('access_token')) {
                    this.setTargetLoading = true;
                    // this.service.showLoading().then(a => console.log('Loading...'))
                    this.service.setTarget(targetObj).subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var result;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            this.service.set("ActivityDuration", "");
                            this.service.set("isPaused", 'false');
                            result = data;
                            //    console.log(""result)
                            if (result[0].length > 0) {
                                this.popover.create({
                                    component: _target_confirm_target_confirm_component__WEBPACK_IMPORTED_MODULE_6__["TargetConfirmComponent"],
                                    cssClass: 'targetConfirmPopover', backdropDismiss: false
                                }).then(function (popoverElement) {
                                    popoverElement.present();
                                });
                            }
                            this.setTargetLoading = false;
                            return [2 /*return*/];
                        });
                    }); }, function (error) {
                        console.log("error--+" + JSON.stringify(error));
                        if (error.error.text === "Goal set Successfully!") {
                            _this.storage.ready().then(function () {
                                // this.storage.remove('userData')
                                // this.storage.remove('empObj')
                                // this.storage.remove('goalDetails')
                                // this.storage.set("currentSteps", '0')
                                // this.service.set('goalStartDate', targetObj.GoalStartdate)
                                // this.service.setGoalStartDate(targetObj.GoalStartdate)
                                // this.service.currentSteps = 0
                                // let empObj = this.service.getEmpObject()
                                // empObj.currentActivity = this.selectedActivity
                                // empObj.targetKm = this.kmVal
                                // empObj.targetSteps = Math.round(this.kmVal * 1232)
                                // empObj.currentSteps = 0
                                // empObj.currentKm = 0;
                                // let userData = { empObj: {}, goalDetails: {} }
                                // userData.empObj = empObj
                                // this.service.setEmpObject(empObj)
                                // this.service.setUserData(userData)
                            });
                            // this.service.setUserData(null)
                            var params = {};
                            params.callBackFn = 'getEmpDetails';
                            params.callBackParams = 'targetConfirm';
                            _this.service.eventMessage.next(params);
                        }
                        if (error.status === 401) {
                            // localStorage.removeItem('access_token')
                            _this.generateToken('setTarget');
                        }
                        _this.setTargetLoading = false;
                        // this.service.dismissLoading();
                    });
                }
                else {
                    this.generateToken('setTarget');
                }
                return [2 /*return*/];
            });
        });
    };
    SetTargetComponent.prototype.targetConfirmPopup = function () {
        this.popover.create({
            component: _target_confirm_target_confirm_component__WEBPACK_IMPORTED_MODULE_6__["TargetConfirmComponent"],
            cssClass: 'targetConfirmPopover', backdropDismiss: false
        }).then(function (popoverElement) {
            popoverElement.present();
        });
    };
    SetTargetComponent.prototype.ngOnInit = function () {
    };
    SetTargetComponent.prototype.ionViewWillEnter = function () {
        this.isActive = true;
        this.kmVal = 1;
        console.log('In Set Target');
        this.page = 1;
    };
    SetTargetComponent.prototype.ionViewWillLeave = function () {
        this.isActive = false;
        // this.service.eventMessage.unsubscribe()
    };
    SetTargetComponent.prototype.checkValue = function () {
        var value = this.kmVal;
        console.log(value);
        if (value <= 0) {
            alert('Cannot set target');
        }
    };
    SetTargetComponent.prototype.selectActivity = function (slides, activity) {
        this.selectedActivity = activity;
        // if (activity === 'Walking') {
        //   this.walkButtonColor = 'rgba(0, 189, 242, 0.1)'
        //   this.jogButtonColor = 'white'
        // }
        // else {
        //   this.walkButtonColor = 'white'
        //   this.jogButtonColor = 'rgba(0, 189, 242, 0.1)'
        // }
        // alert(activity)
        slides.slideNext();
        this.page = 2;
    };
    SetTargetComponent.prototype.moveToNext = function (slides) {
        console.log(this.selectedActivity);
        if (this.selectedActivity) {
            slides.slideNext();
            this.page = 2;
        }
        else {
            console.log('Select Activity');
            this.popover.create({
                component: _select_activity_alert_select_activity_alert_component__WEBPACK_IMPORTED_MODULE_5__["SelectActivityAlertComponent"],
                cssClass: 'permissionPopover', backdropDismiss: true
            }).then(function (popoverElement) {
                popoverElement.present();
            });
        }
    };
    SetTargetComponent.prototype.increaseValue = function () {
        console.log(this.kmVal);
        // alert(this.kmVal)
        // var value = parseInt(this.kmVal, 10);
        // value = isNaN(value) ? 0 : value;
        var value = this.kmVal;
        value++;
        this.kmVal = value;
    };
    SetTargetComponent.prototype.decreaseValue = function () {
        //  var value = parseInt(this.kmVal, 10);
        // value = isNaN(value) ? 0 : value;
        var value = this.kmVal;
        if (value > 1) {
            value--;
        }
        this.kmVal = value;
    };
    SetTargetComponent.prototype.goBack = function () {
        if (this.page === 1) {
            //this.router.navigate(['../tabs/tab2']);
            this.nav.back();
        }
        else {
            this.page = 1;
            this.selectedActivity = null;
        }
    };
    SetTargetComponent.prototype.generateToken = function (retryFuncName, id) {
        var _this = this;
        console.log('retryFuncName', retryFuncName);
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
            var that = _this;
            if (_this.failedRequests && _this.failedRequests.length > 0) {
                console.log('failedRequests', _this.failedRequests);
                _this.failedRequests.forEach(function (value, index) {
                    console.log('value', value);
                    that[value](id);
                }, _this);
                that.failedRequests = [];
            }
            _this.generateTokenLoading = false;
            _this.service.dismissLoading();
        }, function (error) {
            _this.service.dismissLoading();
            _this.generateTokenLoading = false;
            console.log('Token Error in Home:' + JSON.stringify(error));
        });
    };
    SetTargetComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    SetTargetComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SetTargetComponent.propDecorators = {
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['theSlides', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"] },] }]
    };
    SetTargetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-target',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./set-target.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/set-target/set-target.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./set-target.component.scss */ "./src/app/tabs/set-target/set-target.component.scss")).default]
        })
    ], SetTargetComponent);
    return SetTargetComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _set_target_set_target_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-target/set-target.component */ "./src/app/tabs/set-target/set-target.component.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");





var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: function () { return Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(function (m) { return m.Tab1PageModule; }); }
            },
            {
                path: 'tab2',
                loadChildren: function () { return Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(function (m) { return m.Tab2PageModule; }); }
            },
            {
                path: 'tab3',
                loadChildren: function () { return Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; }); }
            },
            {
                path: 'tab4',
                loadChildren: function () { return Promise.all(/*! import() | tab4-tab4-module */[__webpack_require__.e("common"), __webpack_require__.e("tab4-tab4-module")]).then(__webpack_require__.bind(null, /*! ../tab4/tab4.module */ "./src/app/tab4/tab4.module.ts")).then(function (m) { return m.Tab4PageModule; }); }
            },
            {
                path: 'tab5',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tab5-tab5-module */ "tab5-tab5-module").then(__webpack_require__.bind(null, /*! ../tab5/tab5.module */ "./src/app/tab5/tab5.module.ts")).then(function (m) { return m.Tab5PageModule; }); }
            },
            {
                path: 'setTarget',
                component: _set_target_set_target_component__WEBPACK_IMPORTED_MODULE_3__["SetTargetComponent"]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/__ivy_ngcc__/fesm2015/angular-svg-round-progressbar.js");
/* harmony import */ var _target_confirm_target_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./target-confirm/target-confirm.component */ "./src/app/tabs/target-confirm/target-confirm.component.ts");
/* harmony import */ var _select_activity_alert_select_activity_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-activity-alert/select-activity-alert.component */ "./src/app/tabs/select-activity-alert/select-activity-alert.component.ts");
/* harmony import */ var _set_target_set_target_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./set-target/set-target.component */ "./src/app/tabs/set-target/set-target.component.ts");











var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_7__["RoundProgressModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _target_confirm_target_confirm_component__WEBPACK_IMPORTED_MODULE_8__["TargetConfirmComponent"],
                _select_activity_alert_select_activity_alert_component__WEBPACK_IMPORTED_MODULE_9__["SelectActivityAlertComponent"], _set_target_set_target_component__WEBPACK_IMPORTED_MODULE_10__["SetTargetComponent"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconContainer {\n  padding-top: 10%;\n  width: 54px;\n  height: 42px;\n  background: #00008C 0% 0% no-repeat padding-box;\n  border-radius: 7px;\n  opacity: 1;\n}\n\n.Icon {\n  height: 40%;\n  color: white;\n}\n\n.iconHome {\n  width: 29px;\n  height: 26px;\n}\n\n.iconActivity {\n  width: 29px;\n  height: 27px;\n}\n\n.iconGroup {\n  width: 36px;\n  height: 27px;\n}\n\n.iconLeaderboard {\n  width: 27px;\n  height: 27px;\n}\n\n.iconProfile {\n  width: 24px;\n  height: 27px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ1EsV0FBQTtFQUNKLFlBQUE7QUFISjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uQ29udGFpbmVyIHtcbiAgICAvLyBoZWlnaHQ6NDAlO1xuICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBsZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIC8vIHBhZGRpbmc6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDhDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLkljb257XG4gICAgICAgIGhlaWdodDo0MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vIGxlZnQ6IDI1cHg7XG59XG5cbi5pY29uSG9tZSB7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xufVxuLmljb25BY3Rpdml0eXtcbiAgICB3aWR0aDogMjlweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5pY29uR3JvdXB7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xufVxuXG4uaWNvbkxlYWRlcmJvYXJke1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cbi5pY29uUHJvZmlsZSB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xufVxuXG4vLyAudGFiLXNlbGVjdGVkIHtcbi8vICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICB9XG5cbi8vICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzAwMDA4Qztcbi8vICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbi8vIH0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");



var TabsPage = /** @class */ (function () {
    function TabsPage(service) {
        this.service = service;
    }
    TabsPage.prototype.ngOnInit = function () {
        // alert("In tabss");
    };
    TabsPage.prototype.setCurrentTab = function () {
        console.log('Current Tab: ' + this.tabs.getSelected());
        this.selectedTab = this.tabs.getSelected();
    };
    TabsPage.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
    ]; };
    TabsPage.propDecorators = {
        tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['tabs', { static: false },] }]
    };
    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/target-confirm/target-confirm.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tabs/target-confirm/target-confirm.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: none !important;\n}\n\n.modalPopup {\n  height: auto;\n  width: 100%;\n}\n\n.popUpTitle {\n  color: #00008C;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 0%;\n}\n\n.popUpBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n}\n\n.box-lbl {\n  font-size: small;\n  text-align: left;\n  color: #333333;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.popUpContent {\n  margin: 20px 11px;\n}\n\n.divbtn {\n  align-items: center;\n  text-align: center;\n}\n\n.wrapText {\n  word-wrap: wrap break-word;\n  padding-left: 10px;\n}\n\n.itemRow {\n  margin: 10px;\n  text-align: left;\n}\n\n.radio-icon {\n  border-color: red !important;\n}\n\n.radio-checked .radio-icon {\n  border-color: red;\n}\n\n.yellowCard {\n  background: #FFD400;\n  padding: 10px;\n  align-items: center;\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n}\n\nion-card {\n  margin: 10px;\n  padding: 1px;\n}\n\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\n\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YXJnZXQtY29uZmlybS90YXJnZXQtY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0osV0FBQTtBQUNBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFQTs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEM7RUFDRyw0QkFBQTtBQVFKOztBQU5BO0VBRUEsaUJBQUE7QUFRQTs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU1KOztBQURBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFJQTs7QUFISTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBS047O0FBSEk7RUFFRSwrQkFBQTtBQUlOOztBQUZJO0VBQ0ksY0FBQTtBQUlSIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YXJnZXQtY29uZmlybS90YXJnZXQtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJhY2tncm91bmR7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWxQb3B1cHtcclxuICAgIGhlaWdodDphdXRvO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5wb3BVcFRpdGxle1xyXG4gIGNvbG9yOiAjMDAwMDhDO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5wb3BVcEJ0biB7XHJcbmJhY2tncm91bmQ6ICMwMDAwOEM7XHJcbmJvcmRlci1yYWRpdXM6IDdweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbjphdXRvO1xyXG4vL3dpZHRoOjEwMHB4O1xyXG5wYWRkaW5nOiAxMHB4IDIwcHg7XHJcbmZvbnQtc2l6ZTptZWRpdW07XHJcbn1cclxuLmJveC1sYmx7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgfVxyXG4ucG9wVXBDb250ZW50e1xyXG4gICAgbWFyZ2luOjIwcHggMTFweDtcclxufVxyXG4uZGl2YnRue1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud3JhcFRleHR7XHJcbiAgICB3b3JkLXdyYXA6IHdyYXAgYnJlYWstd29yZDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcbi5pdGVtUm93e1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuIC5yYWRpby1pY29ue1xyXG4gICAgYm9yZGVyLWNvbG9yOnJlZCAhaW1wb3J0YW50OyBcclxuIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWljb25cclxue1xyXG5ib3JkZXItY29sb3I6cmVkO1xyXG59XHJcblxyXG4vLy0tLVxyXG4ueWVsbG93Q2FyZHtcclxuICBiYWNrZ3JvdW5kOiAgICNGRkQ0MDA7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjoxMHB4IDBweDtcclxufVxyXG4vL1xyXG5cclxuLmNsb3NlQnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6ICMwMDAwOEM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vLy0tLVxyXG5cclxuaW9uLWNhcmR7XHJcbm1hcmdpbjoxMHB4O1xyXG5wYWRkaW5nOjFweDtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1jb2wuY29sQm9yZGVye1xyXG4gICAgICAgXHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNDgsIDE0NiwgMTQ2KTtcclxuICAgIH1cclxuICAgIGlvbi1yb3cudmlvVHh0e1xyXG4gICAgICAgIGNvbG9yOiM2RDYzRDk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/target-confirm/target-confirm.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tabs/target-confirm/target-confirm.component.ts ***!
  \*****************************************************************/
/*! exports provided: TargetConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetConfirmComponent", function() { return TargetConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");





var TargetConfirmComponent = /** @class */ (function () {
    function TargetConfirmComponent(popover, route, service) {
        this.popover = popover;
        this.route = route;
        this.service = service;
    }
    TargetConfirmComponent.prototype.ngOnInit = function () { };
    TargetConfirmComponent.prototype.closePopover = function () {
        this.popover.dismiss();
    };
    TargetConfirmComponent.prototype.navigateToActivity = function () {
        this.popover.dismiss();
        this.route.navigate(['tabs/tab2']);
    };
    TargetConfirmComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    TargetConfirmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-target-confirm',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./target-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/target-confirm/target-confirm.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./target-confirm.component.scss */ "./src/app/tabs/target-confirm/target-confirm.component.scss")).default]
        })
    ], TargetConfirmComponent);
    return TargetConfirmComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map