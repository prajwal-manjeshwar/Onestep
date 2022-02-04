(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/choose-target/choose-target.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/choose-target/choose-target.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  style=\"font-family: 'Roboto';\">\n  <ion-row style=\"text-align: right\"><ion-col size=\"12\">\n    <img src=\"assets/icon/user.png\" (click)=\"closeModal()\" style=\"color: black;\n    float: right;\n    width: 20px;\n    margin-left: 7px;\">\n  <span class=\"closeButton\" (click)=\"closeModal()\">x</span>\n  </ion-col>\n  </ion-row>\n  <p class=\"popUpTitle\">Choose target</p>\n\n  <div class=\"popUpContent\">\n    <p>You need to set a target first before you start your workout</p>\n\n\n    <div class=\"divbtn\">\n      <button class=\"popUpBtn\" (click)=\"modalSubmit()\">\n        Set Target\n      </button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<ion-header  [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title style=\"color:#00008C;text-align:center;font-size: 20px\">\n      <b>Achievement</b>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card class=\"topCard\" >\n  <ion-img class=\"badge\" src=\"assets/images/trophyBadge.png\"></ion-img>\n  <ion-card-header>\n    <ion-card-title style=\"color:black\">\n      <p>Congratulations !!!</p>\n    \n    </ion-card-title>\n\n  </ion-card-header>\n  <ion-img class=\"fistImage\" src=\"assets/images/trophy.png\"></ion-img>\n  <ion-card-content>\n    <span class=\".ion-text-center\" style=\"text-align: center\">\n      You have esceeded your target by <span style=\"color:#6D63D9\">200 </span>Kms and helped for the cause of planting <span style=\"color:#6D63D9\">600 </span> Trees\n    </span>\n    <div class=\"goalContainer\">\n      <div class=\"textStyle\">\n        <b>Goal</b><br>\n      <b>Total Kms</b> \n      </div>\n      <div class=\"textPos\" style=\"color:#6D63D9;font-size: 19px;\">\n        <b>6200 Kms</b><br>\n        <b>6000 Kms</b>  \n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n<div class=\"buttonContainer\">\n  <ion-button color=\"favorite\" (click)=\"setNewTarget()\" class=\"button targetButton\">Set New Target</ion-button>\n</div>\n-->");

/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
var CONSTANT = /** @class */ (function () {
    function CONSTANT() {
    }
    return CONSTANT;
}());



/***/ }),

/***/ "./src/app/tab2/choose-target/choose-target.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tab2/choose-target/choose-target.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: none !important;\n}\n\n.modalPopup {\n  height: auto;\n  width: 100%;\n}\n\n.popUpTitle {\n  color: #00008C;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  margin-top: 0%;\n}\n\n.popUpBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n}\n\n.box-lbl {\n  font-size: small;\n  text-align: left;\n  color: #333333;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.popUpContent {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 20px;\n  margin-top: 10px;\n}\n\n.divbtn {\n  align-items: center;\n  text-align: center;\n}\n\n.wrapText {\n  word-wrap: wrap break-word;\n  padding-left: 10px;\n}\n\n.itemRow {\n  margin: 10px;\n  text-align: left;\n}\n\n.radio-icon {\n  border-color: red !important;\n}\n\n.radio-checked .radio-icon {\n  border-color: red;\n}\n\n.yellowCard {\n  background: #FFD400;\n  padding: 10px;\n  align-items: center;\n  text-align: center;\n  margin: 10px 0px;\n}\n\n.closeButton {\n  padding-left: 10%;\n  padding-right: 5%;\n  font-size: 21px;\n}\n\nion-card {\n  margin: 10px;\n  padding: 1px;\n}\n\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\n\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9jaG9vc2UtdGFyZ2V0L2Nob29zZS10YXJnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNKLFdBQUE7QUFDQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUE7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhDO0VBQ0csNEJBQUE7QUFNSjs7QUFKQTtFQUVBLGlCQUFBO0FBTUE7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNBOztBQUFJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFTjs7QUFBSTtFQUVFLCtCQUFBO0FBQ047O0FBQ0k7RUFDSSxjQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC90YWIyL2Nob29zZS10YXJnZXQvY2hvb3NlLXRhcmdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJhY2tncm91bmR7XHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWxQb3B1cHtcclxuICAgIGhlaWdodDphdXRvO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5wb3BVcFRpdGxle1xyXG4gIGNvbG9yOiAjMDAwMDhDO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG59XHJcbi5wb3BVcEJ0biB7XHJcbmJhY2tncm91bmQ6ICMwMDAwOEM7XHJcbmJvcmRlci1yYWRpdXM6IDdweDtcclxub3BhY2l0eTogMTtcclxuY29sb3I6d2hpdGU7XHJcbm1hcmdpbjphdXRvO1xyXG4vL3dpZHRoOjEwMHB4O1xyXG5wYWRkaW5nOiAxMHB4IDIwcHg7XHJcbmZvbnQtc2l6ZTptZWRpdW07XHJcbn1cclxuLmJveC1sYmx7XHJcbiAgICBmb250LXNpemU6c21hbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgfVxyXG4ucG9wVXBDb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmRpdmJ0bntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndyYXBUZXh0e1xyXG4gICAgd29yZC13cmFwOiB3cmFwIGJyZWFrLXdvcmQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4uaXRlbVJvd3tcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG59XHJcbiAucmFkaW8taWNvbntcclxuICAgIGJvcmRlci1jb2xvcjpyZWQgIWltcG9ydGFudDsgXHJcbiB9XHJcbi5yYWRpby1jaGVja2VkIC5yYWRpby1pY29uXHJcbntcclxuYm9yZGVyLWNvbG9yOnJlZDtcclxufVxyXG5cclxuLy8tLS1cclxuLnllbGxvd0NhcmR7XHJcbiAgYmFja2dyb3VuZDogICAjRkZENDAwO1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46MTBweCAwcHg7XHJcbn1cclxuLy9cclxuXHJcbi5jbG9zZUJ1dHRvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcblxyXG59XHJcblxyXG4vLy8tLS1cclxuXHJcbmlvbi1jYXJke1xyXG5tYXJnaW46MTBweDtcclxucGFkZGluZzoxcHg7XHJcbiAgICBpb24tcm93e1xyXG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24tY29sLmNvbEJvcmRlcntcclxuICAgICAgIFxyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjQ4LCAxNDYsIDE0Nik7XHJcbiAgICB9XHJcbiAgICBpb24tcm93LnZpb1R4dHtcclxuICAgICAgICBjb2xvcjojNkQ2M0Q5O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab2/choose-target/choose-target.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tab2/choose-target/choose-target.component.ts ***!
  \***************************************************************/
/*! exports provided: ChooseTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTargetComponent", function() { return ChooseTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



var ChooseTargetComponent = /** @class */ (function () {
    function ChooseTargetComponent(popover) {
        this.popover = popover;
    }
    ChooseTargetComponent.prototype.ngOnInit = function () { };
    ChooseTargetComponent.prototype.ClosePopover = function () {
        this.popover.dismiss();
    };
    ChooseTargetComponent.prototype.closeModal = function () {
    };
    ChooseTargetComponent.prototype.modalSubmit = function () { };
    ChooseTargetComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    ChooseTargetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-choose-target',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./choose-target.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/choose-target/choose-target.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./choose-target.component.scss */ "./src/app/tab2/choose-target/choose-target.component.scss")).default]
        })
    ], ChooseTargetComponent);
    return ChooseTargetComponent;
}());



/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _activity_statistics_activity_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-statistics/activity-statistics.component */ "./src/app/tab2/activity-statistics/activity-statistics.component.ts");




var routes = [
    {
        path: '',
        component: _activity_statistics_activity_statistics_component__WEBPACK_IMPORTED_MODULE_3__["ActivityStatisticsComponent"],
    },
];
var Tab2PageRoutingModule = /** @class */ (function () {
    function Tab2PageRoutingModule() {
    }
    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab2PageRoutingModule);
    return Tab2PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/__ivy_ngcc__/fesm2015/angular-svg-round-progressbar.js");
/* harmony import */ var _modify_goal_modify_goal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modify-goal/modify-goal.component */ "./src/app/tab2/modify-goal/modify-goal.component.ts");
/* harmony import */ var _choose_target_choose_target_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./choose-target/choose-target.component */ "./src/app/tab2/choose-target/choose-target.component.ts");
/* harmony import */ var _end_activity_end_activity_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./end-activity/end-activity.component */ "./src/app/tab2/end-activity/end-activity.component.ts");
/* harmony import */ var _pause_activity_pause_activity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pause-activity/pause-activity.component */ "./src/app/tab2/pause-activity/pause-activity.component.ts");
/* harmony import */ var _permission_alert_permission_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./permission-alert/permission-alert.component */ "./src/app/tab2/permission-alert/permission-alert.component.ts");
/* harmony import */ var _target_achieved_target_achieved_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./target-achieved/target-achieved.component */ "./src/app/tab2/target-achieved/target-achieved.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _tab2_activity_statistics_activity_statistics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tab2/activity-statistics/activity-statistics.component */ "./src/app/tab2/activity-statistics/activity-statistics.component.ts");

















var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__["RoundProgressModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["IonicStorageModule"].forRoot({
                    name: '__1StepMiles-localstorage',
                    driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
                })
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"], _modify_goal_modify_goal_component__WEBPACK_IMPORTED_MODULE_9__["ModifyGoalComponent"], _choose_target_choose_target_component__WEBPACK_IMPORTED_MODULE_10__["ChooseTargetComponent"],
                _end_activity_end_activity_component__WEBPACK_IMPORTED_MODULE_11__["EndActivityComponent"], _pause_activity_pause_activity_component__WEBPACK_IMPORTED_MODULE_12__["PauseActivityComponent"], _permission_alert_permission_alert_component__WEBPACK_IMPORTED_MODULE_13__["PermissionAlertComponent"],
                _target_achieved_target_achieved_component__WEBPACK_IMPORTED_MODULE_14__["TargetAchievedComponent"], _tab2_activity_statistics_activity_statistics_component__WEBPACK_IMPORTED_MODULE_16__["ActivityStatisticsComponent"]],
            exports: [
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__["RoundProgressComponent"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_8__["RoundProgressModule"]
            ]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topCard {\n  height: 75%;\n  font-size: 12px;\n  margin: 10% 8% 0% 8%;\n}\n\n.fistImage {\n  height: 8%;\n}\n\n.textFormat {\n  text-align: center;\n}\n\n.textStyle {\n  font-size: 16px;\n  margin-top: 13%;\n  float: left;\n}\n\n.textPos {\n  font-size: 19px;\n  margin-top: 12%;\n  float: right;\n}\n\n.targetButton {\n  width: 220px;\n  background: #00008C 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  height: 38px;\n  margin: auto;\n  font-weight: bolder;\n}\n\n.buttonContainer {\n  margin-bottom: 10%;\n  margin-top: 10%;\n  text-align: center;\n}\n\n.badge {\n  width: 100%;\n  height: 40%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: -11%;\n}\n\np {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFJQSxlQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcENhcmR7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHBhZGRpbmc6IDExJTtcclxuICAgIC8vIHBhZGRpbmc6IDglO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAxMCUgOCUgMCUgOCU7XHJcbn1cclxuLmZpc3RJbWFnZXtcclxuICAgIGhlaWdodDogOCU7XHJcbn1cclxuLnRleHRGb3JtYXR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRTdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEzJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0UG9ze1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTIlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi50YXJnZXRCdXR0b257XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDhDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyMSU7XHJcbiAgICBoZWlnaHQ6MzhweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0yNiU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIFxyXG59XHJcbi5idXR0b25Db250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uYmFkZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xMSU7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././app.constant */ "./src/app/app.constant.ts");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(route) {
        this.route = route;
        this.showActivity = false;
    }
    Tab2Page.prototype.setNewTarget = function () {
        this.route.navigate(['/activity']);
        _app_constant__WEBPACK_IMPORTED_MODULE_3__["CONSTANT"].showActivity = true;
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
        })
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map