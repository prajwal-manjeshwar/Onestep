(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/cert-popup/cert-popup.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/cert-popup/cert-popup.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" >\n  <ion-toolbar mode='ios'>\n    <!-- <ion-title class=\"popUpTitle\">Alert</ion-title> -->\n    <ion-buttons slot=\"end\">\n      <!-- <ion-icon (click)=\"confirm()\" src=\"assets/images/close-outline.svg\"></ion-icon> -->\n      <div class=\"closeButton\" (click)=\"confirm()\">✖</div>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content  style=\"font-family: 'Roboto';\">\n  <div class=\"popUpTitle\">Alert</div>\n  <!-- <div class=\"closeButton\" (click)=\"closePopover()\">x</div> -->\n  <!-- </ion-col>\n    </ion-row> -->\n  <!-- <div class=\"closeButton\" (click)=\"closePopover()\">x</div> -->\n  <!-- <p class=\"popUpTitle\">Alert</p> -->\n\n  <div class=\"popUpContent\">\n    <p style=\"margin-top:20px;margin-bottom:20px; color: black; text-align: center;\">Certificate will be available once you have walked for atleast 50 km</p>\n\n    <!-- <ion-row class=\"yellowCard\">\n      <ion-col size=\"2\">\n        <img src=\"assets/images/user.png\">\n      </ion-col>\n      <ion-col size=\"10\">\n        <div style='font-size:small'> The app will end the current activity in</div>\n        <div style=\"font-weight: bold\">05:30 min</div>\n      </ion-col>\n    </ion-row> -->\n    <!-- <div class=\"divbtn\">\n      <button class=\"popUpBtn\" (click)=\"confirm()\">\n        Ok\n      </button>\n    </div> -->\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class='hideBg' *ngIf=\"showLoading\">\n    <div class=\"page-loader\">\n      <img src=\"assets/images/loader.gif\">\n    </div>\n  </div>\n\n  <div class=\"mainDiv\">\n    <div class=\"center\">\n      <h5 style=\"margin:2vw;padding:0; font-size: 20px;\">Profile</h5>\n      <ion-avatar class=\"avatar\">\n        <ion-img src=\"assets/images/profile3.png\"></ion-img>\n      </ion-avatar>\n      <h5 style=\"margin:2vw;padding:0; font-size: 22px;\">{{empName}}</h5>\n      <p style=\"margin:2.5vw;padding:0; font-size: 14px;\">{{location}}</p>\n    </div>\n\n    <p class=\"contributedText\" *ngIf=\"totalTrees>0\">You have contributed for planting <span\n      style=\"font-size:20px;\">{{totalTrees}}</span>trees</p>\n    <p class=\"contributedText\" *ngIf=\"totalTrees===0\">You are yet to contribute for planting trees</p>\n\n    <ion-card class=\"mainCard\">\n      <ion-row class=\"cardRow cardColorYellow\" style=\"margin-top: 10px;\">\n        <ion-col style=\"text-align: left; padding-left: 5%;\">\n          <span style=\"color: black; \">For every 50 km i.e. 31 miles walked 1 tree will be planted</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"cardRow cardColorBlue\">\n        <ion-col size=\"6\" style=\"color: black;\">\n          <span style=\"padding-left: 5%;\">Total distance so far</span>\n        </ion-col>\n        <ion-col style=\"text-align: right;\">\n          <span style=\"color: #6D63D9;font-size: 18px;\"><b>{{totalKm  | number : '1.0-1'}}</b></span> Kms\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button color=\"favorite\" (click)=\"viewCertificate()\" class=\"certificateButton\">View Certificate</button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card class=\"bottomCard\">\n      <ion-row>\n        <ion-col size=\"9\" style=\"color: black;\">\n          <p style=\"text-align: left;padding-left:10px; font-size: 14px;\">\n            Hearty Congratulations for using 1Step Miles app.\n            <br>\n            Prioritizing better environment is always a good choice!\n          </p>\n          <p style=\"text-align:left;padding-left:10px\">\n            Keep participating and keep growing\n          </p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <img src=\"assets/images/plant3.png\" style=\"margin-top: 30%; height: 50px; width: 50px;\">\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <div class=\"noteDiv\">\n      <p>For any queries or suggestions, please write to 1StepMiles@lntinfotech.com</p>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab4/cert-popup/cert-popup.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/tab4/cert-popup/cert-popup.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  border: none !important;\n}\n\nion-toolbar {\n  --min-height:30px!important;\n}\n\n.modalPopup {\n  height: auto;\n  width: 100%;\n}\n\n.popUpTitle {\n  color: #00008C;\n  text-align: center;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.popUpBtn {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n}\n\n.box-lbl {\n  font-size: small;\n  text-align: left;\n  color: #333333;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.popUpContent {\n  padding: 0% 15% 5% 15%;\n}\n\n.divbtn {\n  align-items: center;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.wrapText {\n  word-wrap: wrap break-word;\n  padding-left: 10px;\n}\n\n.itemRow {\n  margin: 10px;\n  text-align: left;\n}\n\n.radio-icon {\n  border-color: red !important;\n}\n\n.radio-checked .radio-icon {\n  border-color: red;\n}\n\n.yellowCard {\n  background: #FFD400;\n  padding: 10px;\n  align-items: center;\n  text-align: center;\n  margin: 25px 0px;\n}\n\n.closeButton {\n  text-align: right;\n  font-size: xx-large;\n  color: #00008C;\n  margin-right: 10px;\n}\n\nion-card {\n  margin: 10px;\n  padding: 1px;\n}\n\nion-card ion-row {\n  align-items: center;\n  text-align: center;\n  color: black;\n}\n\nion-card ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\nion-card ion-row.vioTxt {\n  color: #6D63D9;\n}\n\n.closeButton {\n  text-align: right;\n  color: #00008C;\n  margin-right: 10px;\n  font-size: 24px;\n}\n\nion-icon {\n  color: #00008C;\n  padding: 10px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC9jZXJ0LXBvcHVwL2NlcnQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDSixXQUFBO0FBQUE7O0FBRUE7RUFFRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBRUksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREM7RUFDRyw0QkFBQTtBQUlKOztBQUZBO0VBRUEsaUJBQUE7QUFJQTs7QUFBQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUdBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBQTs7QUFDSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBQ0k7RUFFRSwrQkFBQTtBQUFOOztBQUVJO0VBQ0ksY0FBQTtBQUFSOztBQUlBO0VBQ0ksaUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxjQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvY2VydC1wb3B1cC9jZXJ0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYmFja2dyb3VuZHtcclxuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1taW4taGVpZ2h0OjMwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4ubW9kYWxQb3B1cHtcclxuICAgIGhlaWdodDphdXRvO1xyXG53aWR0aDoxMDAlO1xyXG59XHJcbi5wb3BVcFRpdGxle1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogIzAwMDA4QztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnBvcFVwQnRuIHtcclxuYmFja2dyb3VuZDogIzAwMDA4QztcclxuYm9yZGVyLXJhZGl1czogN3B4O1xyXG5vcGFjaXR5OiAxO1xyXG5jb2xvcjp3aGl0ZTtcclxubWFyZ2luOmF1dG87XHJcbi8vd2lkdGg6MTAwcHg7XHJcbnBhZGRpbmc6IDEwcHggMjBweDtcclxuZm9udC1zaXplOm1lZGl1bTtcclxufVxyXG4uYm94LWxibHtcclxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIG1hcmdpbi10b3A6MnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToycHg7XHJcbiAgICB9XHJcbi5wb3BVcENvbnRlbnR7XHJcbiAgICAvLyBtYXJnaW46MjBweDtcclxuICAgIHBhZGRpbmc6IDAlIDE1JSA1JSAxNSU7XHJcbiBcclxufVxyXG4uZGl2YnRue1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG4ud3JhcFRleHR7XHJcbiAgICB3b3JkLXdyYXA6IHdyYXAgYnJlYWstd29yZDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG59XHJcbi5pdGVtUm93e1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuIC5yYWRpby1pY29ue1xyXG4gICAgYm9yZGVyLWNvbG9yOnJlZCAhaW1wb3J0YW50OyBcclxuIH1cclxuLnJhZGlvLWNoZWNrZWQgLnJhZGlvLWljb25cclxue1xyXG5ib3JkZXItY29sb3I6cmVkO1xyXG59XHJcblxyXG4vLy0tLVxyXG4ueWVsbG93Q2FyZHtcclxuICBiYWNrZ3JvdW5kOiAgICNGRkQ0MDA7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjoyNXB4IDBweDtcclxufVxyXG4vL1xyXG5cclxuLmNsb3NlQnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6ICMwMDAwOEM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vLy0tLVxyXG5cclxuaW9uLWNhcmR7XHJcbm1hcmdpbjoxMHB4O1xyXG5wYWRkaW5nOjFweDtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuICAgIGlvbi1jb2wuY29sQm9yZGVye1xyXG4gICAgICAgXHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyNDgsIDE0NiwgMTQ2KTtcclxuICAgIH1cclxuICAgIGlvbi1yb3cudmlvVHh0e1xyXG4gICAgICAgIGNvbG9yOiM2RDYzRDk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC8vIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogIzAwMDA4QztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjMDAwMDhDO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab4/cert-popup/cert-popup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab4/cert-popup/cert-popup.component.ts ***!
  \*********************************************************/
/*! exports provided: CertPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertPopupComponent", function() { return CertPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



var CertPopupComponent = /** @class */ (function () {
    function CertPopupComponent(popover) {
        this.popover = popover;
    }
    CertPopupComponent.prototype.ngOnInit = function () { };
    CertPopupComponent.prototype.confirm = function () {
        this.popover.dismiss();
    };
    CertPopupComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    CertPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cert-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cert-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/cert-popup/cert-popup.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cert-popup.component.scss */ "./src/app/tab4/cert-popup/cert-popup.component.scss")).default]
        })
    ], CertPopupComponent);
    return CertPopupComponent;
}());



/***/ }),

/***/ "./src/app/tab4/tab4-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab4PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function() { return Tab4PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");




var routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"],
    }
];
var Tab4PageRoutingModule = /** @class */ (function () {
    function Tab4PageRoutingModule() {
    }
    Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab4PageRoutingModule);
    return Tab4PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab4-routing.module */ "./src/app/tab4/tab4-routing.module.ts");
/* harmony import */ var _cert_popup_cert_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cert-popup/cert-popup.component */ "./src/app/tab4/cert-popup/cert-popup.component.ts");











var Tab4PageModule = /** @class */ (function () {
    function Tab4PageModule() {
    }
    Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"] }]),
                _tab4_routing_module__WEBPACK_IMPORTED_MODULE_9__["Tab4PageRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot({
                    name: '__1StepMiles-localstorage',
                    driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
                })
            ],
            declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"], _cert_popup_cert_popup_component__WEBPACK_IMPORTED_MODULE_10__["CertPopupComponent"]],
            entryComponents: [_cert_popup_cert_popup_component__WEBPACK_IMPORTED_MODULE_10__["CertPopupComponent"]]
        })
    ], Tab4PageModule);
    return Tab4PageModule;
}());



/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar {\n  height: 107px;\n  width: 107px;\n  border: 10px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.contributedText {\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n}\n\n.noteDiv {\n  margin-top: 5%;\n  font-size: 14px;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-bottom: 1%;\n  color: #535353;\n  text-align: left;\n}\n\n.center {\n  padding: 3% 7%;\n  padding-bottom: 2%;\n  text-align: center;\n  padding-bottom: 1px;\n  color: white;\n}\n\n.iconWalk {\n  background-color: #00008C;\n  padding: 2%;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n\n.iconJog {\n  background-color: #F58220;\n  padding: 2%;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n\n.cardColorBlue {\n  background: rgba(0, 189, 242, 0.07) 0% 0% no-repeat padding-box;\n}\n\n.cardColorYellow {\n  background: #fde37c;\n}\n\n.userimg {\n  font-size: 20vw;\n}\n\n.title {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n}\n\n.new-background-color {\n  --background: #00008C;\n}\n\nion-toolbar {\n  --background: transparent no-repeat fixed center;\n  --color: black;\n}\n\n.mainDiv {\n  position: relative;\n  border: none !important;\n  margin-top: 0;\n  padding: 2%;\n  height: 100%;\n  padding-bottom: 2%;\n  text-align: center;\n  background: linear-gradient(#00008C 50%, #fff 20%);\n  padding: 5%;\n}\n\n.certificateButton {\n  background: #00008C;\n  border-radius: 7px;\n  opacity: 1;\n  color: white;\n  margin: auto;\n  padding: 10px 20px;\n  font-size: medium;\n  margin-top: 20px;\n}\n\n.bottomCard {\n  background: transparent linear-gradient(270deg, #FFFFFF52 0%, #CEEFFF 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000033;\n  border-radius: 10px;\n  margin-top: 10%;\n}\n\n.mainCard {\n  padding: 5%;\n  background: white;\n  border-radius: 11px;\n}\n\n.mainCard ion-row {\n  align-items: center;\n  text-align: center;\n}\n\n.mainCard ion-col.colBorder {\n  border-right: 1px solid #f89292;\n}\n\n.mainCard .cardRow {\n  align-items: center;\n  margin-top: 20px;\n  padding: 10px 10px;\n  border-radius: 4px;\n  text-align: left;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mainCard .BottomCard {\n  padding: 5%;\n  border-radius: 11px;\n  text-align: left;\n  background-image: repeating-linear-gradient(to top right, #9474F1, #BD5DF5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBRUEsMkNBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrREFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnREFBQTtFQUNBLGNBQUE7QUFNRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFFQSxXQUFBO0FBSUY7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFFRSx1R0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQUtFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtFO0VBQ0UsK0JBQUE7QUFISjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrR0FBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvdGFiNC90YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgaGVpZ2h0OiAxMDdweDtcclxuICB3aWR0aDogMTA3cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDA4QztcclxuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XHJcbiAgLy8gb3BhY2l0eTogMC4zMTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRyaWJ1dGVkVGV4dHtcclxuICBjb2xvcjogI2ZmZjsgXHJcbiAgZm9udC1zaXplOiAxNHB4OyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ub3RlRGl2e1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBjb2xvcjogIzUzNTM1MztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIFxyXG59XHJcbi5jZW50ZXJ7XHJcbiAgcGFkZGluZzogMyUgNyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb25XYWxre1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwOEM7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG4uaWNvbkpvZ3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU4MjIwO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkQ29sb3JCbHVle1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLCAxODksIDI0MiwgMC4wNykgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5jYXJkQ29sb3JZZWxsb3d7XHJcbiAgYmFja2dyb3VuZDpyZ2IoMjUzLCAyMjcsIDEyNCk7XHJcbn1cclxuLnVzZXJpbWd7XHJcbiAgZm9udC1zaXplOiAyMHZ3O1xyXG59XHJcbi50aXRsZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMDA4QztcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDA7XHJcbn1cclxuLm1haW5EaXZ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDAwOEMgNTAlLCAjZmZmIDIwJSk7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDA4QztcclxuICBwYWRkaW5nOiA1JTtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIFxyXG59XHJcblxyXG4uY2VydGlmaWNhdGVCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDhDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICAvL3dpZHRoOjEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3R0b21DYXJke1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIzk0NzRGMSwjQkQ1REY1KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGRkZGRkY1MiAwJSwgI0NFRUZGRiAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB3aWR0aDogYXV0bztcclxuICAvLyBib3R0b206IDA7XHJcbiAgLy8gcmlnaHQ6IDA7XHJcblxyXG59XHJcbi5tYWluQ2FyZHtcclxuICBwYWRkaW5nOiA1JTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gIGlvbi1yb3d7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1jb2wuY29sQm9yZGVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDI0OCwgMTQ2LCAxNDYpO1xyXG4gIH1cclxuICAuY2FyZFJvd3tcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuXHJcbiAgLkJvdHRvbUNhcmR7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwjOTQ3NEYxLCNCRDVERjUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _cert_popup_cert_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cert-popup/cert-popup.component */ "./src/app/tab4/cert-popup/cert-popup.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var Tab4Page = /** @class */ (function () {
    function Tab4Page(service, popover, router, storage) {
        this.service = service;
        this.popover = popover;
        this.router = router;
        this.storage = storage;
        this.totalKm = '0';
        this.activityList = [];
        this.newUser = false;
        this.showLoading = false;
    }
    Tab4Page.prototype.ngOnInit = function () {
        this.pageInit();
    };
    // Automatic update page
    Tab4Page.prototype.ionViewWillEnter = function () {
        this.pageInit();
    };
    Tab4Page.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var empObj, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.service.activeTabIndex = 4;
                        empObj = this.service.getEmpObject();
                        // console.log(empObj)
                        this.empName = empObj.name;
                        if (empObj.location && src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl.includes('wfcprod')) {
                            this.location = this.service.decryptMessage(empObj.location);
                        }
                        else {
                            this.location = empObj.location;
                        }
                        _a = this;
                        return [4 /*yield*/, this.service.get('totalKm')];
                    case 1:
                        _a.totalKm = _b.sent();
                        if (this.totalKm === null) {
                            this.totalKm = '0';
                        }
                        if (localStorage.getItem('access_token')) {
                            this.service.getLeaderboardRanks(empObj.psNo).subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    this.showLoading = false;
                                    this.hideRefresher();
                                    this.service.set('leaderboard', response);
                                    this.updateUI(response);
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                _this.showLoading = false;
                                _this.hideRefresher();
                                if (error.status === 401) {
                                    _this.generateToken();
                                }
                                console.log("error--+" + JSON.stringify(error));
                            });
                        }
                        else {
                            this.generateToken();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.updateUI = function (response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.totalKm = parseFloat(response[0].TotalKMs).toFixed(1);
                this.service.totalKm = this.totalKm;
                this.service.set('totalKm', this.totalKm);
                return [2 /*return*/];
            });
        });
    };
    Tab4Page.prototype.hideRefresher = function () {
        if (this.refresher && this.refresher.target) {
            this.refresher.target.complete();
            this.refresher = '';
        }
    };
    Tab4Page.prototype.doRefresh = function (event) {
        this.refresher = event;
        this.pageInit();
    };
    Tab4Page.prototype.viewCertificate = function () {
        this.service.totalKm = Math.floor(parseFloat(this.totalKm));
        if (+this.totalKm < 50) {
            this.popover.create({
                component: _cert_popup_cert_popup_component__WEBPACK_IMPORTED_MODULE_5__["CertPopupComponent"],
                cssClass: 'certPopover', backdropDismiss: true
            }).then(function (popoverElement) {
                popoverElement.present();
            });
        }
        else {
            this.router.navigate(['certificate']);
        }
    };
    Tab4Page.prototype.generateToken = function () {
        var _this = this;
        this.service.generateToken().subscribe(function (response) {
            console.log(response);
            localStorage.setItem("token_expires_on", response.expires_on);
            localStorage.setItem("access_token", response.access_token);
            localStorage.setItem("token_expires_in", response.expires_in);
            _this.pageInit();
        }, function (error) {
            console.log(JSON.stringify(error));
        });
    };
    Tab4Page.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab4',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab4.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")).default]
        })
    ], Tab4Page);
    return Tab4Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map