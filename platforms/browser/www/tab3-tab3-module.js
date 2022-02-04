(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-title class=\"title\"><b>Leaderboard</b></ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- <ion-spinner class=\"loadingSpinner\" *ngIf=\"showLoading\"></ion-spinner> -->\n\n\n\n<ion-content style=\"font-family: 'Roboto';\">\n\n\n\n  <div *ngIf=\"showLoading || generateTokenLoading\">\n    <div class=\"page-loader\">\n      <img src=\"assets/images/loader.gif\">\n    </div>\n  </div>\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <div class=\"pagePadding\" *ngIf=\"leaderboard\">\n    <p class=\"lableTag\">\n      <b>Your Position</b>\n\n    </p>\n    <ion-row class=\"UserRow\">\n\n      <ion-col size=\"2\" class=\"rankCol\">\n        <p> <b>{{rank}}</b></p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <!--  <p > <img  src=\"assets/images/plant.png\"  class=\"imgProf\"></p> -->\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"boldTxt\"><b>{{empName}}</b></p>\n        <p class=\"medFont\">{{location}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <p class=\"vioTxt\">{{totalKMs | number : '1.0-2'}} Km</p>\n        <p>\n          <img src=\"assets/images/relaxing-walk.png\" *ngIf=\"isWalking\" class=\"activityImg\">\n          <img src=\"assets/images/running-person.png\" *ngIf=\"isJogging\" class=\"runningImg\">\n        </p>\n      </ion-col>\n    </ion-row>\n    <p class=\"lableTag\">\n      <b>Top Performers</b>\n    </p>\n\n    <ion-row class=\"headerRow\">\n\n      <ion-col size=\"2\">Rank</ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"6\">\n        Name</ion-col>\n      <ion-col size=\"3\">\n        Distance</ion-col>\n    </ion-row>\n    <ion-row class=\"listRow\" *ngFor=\"let item of leaderboard;let i=index\">\n      <ion-col size=\"2\" class=\"rankCol\">\n        <p><b>{{item.Rank}}</b></p>\n      </ion-col>\n      <ion-col size=\"1\">\n        <!--   <p > <img  src=\"assets/images/plant.png\" class=\"imgProf\"></p> -->\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"boldTxt\"><b>{{item.EmpName}}</b></p>\n        <p class=\"medFont\">{{item.EmpLocation}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <p class=\"vioTxt\">{{item.TotalKMs | number : '1.0-2'}} Km</p>\n        <p class=\"iconRow\">\n          <img src=\"assets/images/relaxing-walk.png\" *ngIf=\"item.Walking\" class=\"activityImg\">\n\n          <img src=\"assets/images/running-person.png\" *ngIf=\"item.Jogging\" class=\"runningImg\">\n\n        </p>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab3/tab3-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");




var routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
var Tab3PageRoutingModule = /** @class */ (function () {
    function Tab3PageRoutingModule() {
    }
    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Tab3PageRoutingModule);
    return Tab3PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab3-routing.module */ "./src/app/tab3/tab3-routing.module.ts");










var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
                _tab3_routing_module__WEBPACK_IMPORTED_MODULE_9__["Tab3PageRoutingModule"],
                _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot({
                    name: '__1StepMiles-localstorage',
                    driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
                })
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagePadding {\n  padding: 5px;\n}\n\n.lableTag {\n  margin: 10px;\n  padding: 5px;\n  font-size: 19px;\n  font-weight: 600;\n  color: #1A1A1A;\n}\n\n.headerRow {\n  font-size: 14px;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 4px;\n  background: rgba(232, 232, 232, 0.31) 0% 0% no-repeat padding-box;\n  color: black;\n  font-weight: 600;\n}\n\n.listRow {\n  color: #414141;\n  margin: 10px;\n  margin-top: 8px;\n  border-radius: 4px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.activityImg {\n  border: 1.2px solid #6D63D9;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  padding: 2px 6px;\n  width: 22px;\n  height: 22px;\n}\n\n.runningImg {\n  margin-right: 3%;\n  margin-left: 8%;\n  border: 1.2px solid #6D63D9;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  padding: 2px 3px;\n  width: 22px;\n  height: 22px;\n}\n\n.UserRow {\n  font-size: 14px;\n  margin: 10px;\n  border-radius: 4px;\n  border: 1px solid #6d63d9;\n  color: #414141;\n}\n\nion-col {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.rankCol {\n  margin: auto;\n  text-align: center;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.vioTxt {\n  color: #6d63d9;\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.boldTxt {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1A1A1A;\n}\n\n.medFont {\n  font-size: 12px;\n}\n\n.title {\n  color: #00008C;\n  text-align: center;\n  font-size: 20px;\n}\n\n.imgProf {\n  padding-top: 40%;\n}\n\n.iconRow {\n  margin-top: -9%;\n}\n\n.loadingSpinner {\n  color: #00008C;\n  width: 50px;\n  height: 50px;\n  stroke: #444;\n  fill: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpRUFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksY0FBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSwrR0FBQTtBQUpKOztBQU9BO0VBR0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFQSjs7QUFVQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtBQVJKOztBQVdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7QUFSSjs7QUFXQTtFQUVJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBVEoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VQYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmxhYmxlVGFnIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzFBMUExQTtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBSb2JvdG8sIE1lZGl1bTtcclxufVxyXG5cclxuLmhlYWRlclJvdyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzMiwgMjMyLCAyMzIsIDAuMzEpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8vIG9wYWNpdHk6IDAuMzE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxufVxyXG5cclxuLmxpc3RSb3cge1xyXG4gICAgY29sb3I6ICM0MTQxNDE7XHJcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDc0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5hY3Rpdml0eUltZyB7XHJcblxyXG4gICAgLy8gbWFyZ2luLXRvcDogLTE4JTtcclxuICAgIGJvcmRlcjogMS4ycHggc29saWQgIzZENjNEOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5ydW5uaW5nSW1nIHtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgYm9yZGVyOiAxLjJweCBzb2xpZCAjNkQ2M0Q5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDJweCAzcHg7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5cclxuLlVzZXJSb3cge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZkNjNkOTtcclxuICAgIGNvbG9yOiAjNDE0MTQxO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ucmFua0NvbCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLnZpb1R4dCB7XHJcbiAgICBjb2xvcjogIzZkNjNkOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5ib2xkVHh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFBMUExQTtcclxufVxyXG5cclxuLm1lZEZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDAwOEM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG5cclxuLmltZ1Byb2Yge1xyXG4gICAgcGFkZGluZy10b3A6IDQwJTtcclxufVxyXG5cclxuLmljb25Sb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcblxyXG4ubG9hZGluZ1NwaW5uZXIge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBjb2xvcjogIzAwMDA4QztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgc3Ryb2tlOiAjNDQ0O1xyXG4gICAgZmlsbDogIzIyMjtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var Tab3Page = /** @class */ (function () {
    function Tab3Page(service, popover, storage) {
        this.service = service;
        this.popover = popover;
        this.storage = storage;
        this.leaderboard = null;
        this.empName = '';
        this.location = '';
        this.totalKMs = '0';
        this.rank = '---';
        this.isJogging = true;
        this.isWalking = false;
        this.showLoading = true;
        this.generateTokenLoading = false;
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.pageInit();
    };
    // Automatic refresh leaderboard
    Tab3Page.prototype.ionViewWillEnter = function () {
        this.pageInit();
    };
    Tab3Page.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var empObj, that;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                empObj = this.service.getEmpObject() || {};
                this.empName = empObj.name;
                if (empObj.location && src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl.includes('wfcprod')) {
                    this.location = this.service.decryptMessage(empObj.location);
                }
                else {
                    this.location = empObj.location;
                }
                that = this;
                if (localStorage.getItem('access_token')) {
                    this.service.getLeaderboardRanks(empObj.psNo).subscribe(function (response) {
                        _this.showLoading = false;
                        // this.service.dismissLoading()
                        //console.log("response: ",response)
                        if (response && response.length > 0) {
                            response.forEach(function (value) {
                                if (value.EmpLocation && src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl.includes('wfcprod')) {
                                    value.EmpLocation = that.service.decryptMessage(value.EmpLocation);
                                }
                            });
                        }
                        _this.updateUI(response);
                        _this.hideRefresher();
                    }, function (error) {
                        _this.showLoading = false;
                        _this.hideRefresher();
                        _this.service.dismissLoading();
                        if (error.status === 401) {
                            // localStorage.removeItem('access_token')
                            _this.getNewToken();
                        }
                        console.log("error--+" + JSON.stringify(error));
                    });
                }
                else {
                    this.getNewToken();
                }
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.prototype.hideRefresher = function () {
        if (this.refresher && this.refresher.target) {
            this.refresher.target.complete();
            this.refresher = '';
        }
    };
    Tab3Page.prototype.doRefresh = function (event) {
        this.refresher = event;
        this.pageInit();
    };
    Tab3Page.prototype.updateUI = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var userActivity, item, activities;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                //console.log("update UI: ",data)
                this.service.set('leaderboard', data);
                this.totalKMs = parseFloat(data[0].TotalKMs).toFixed(2);
                this.service.totalKm = this.totalKMs;
                this.service.set('totalKm', this.totalKMs);
                this.rank = data[0].Rank;
                userActivity = data[0].ActivityType.split(',');
                //console.log("userActivity:",userActivity)
                //console.log("this data")
                console.log(data[0]);
                userActivity.indexOf('Jogging') >= 0 ? this.isJogging = true : this.isJogging = false;
                userActivity.indexOf('Walking') >= 0 ? this.isWalking = true : this.isWalking = false;
                this.leaderboard = data.slice(1); //removed the currnt employee info from top to display leaderboard ahead
                //console.log(this.leaderboard)
                //this.leaderboard=data 
                for (item in this.leaderboard) {
                    activities = this.leaderboard[item].ActivityType.split(',');
                    activities.indexOf('Jogging') >= 0 ? this.leaderboard[item].Jogging = true : this.leaderboard[item].Jogging = false;
                    activities.indexOf('Walking') >= 0 ? this.leaderboard[item].Walking = true : this.leaderboard[item].Walking = false;
                }
                this.leaderboard.sort(function (a, b) {
                    return a.Rank - b.Rank;
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.prototype.getNewToken = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.generateTokenLoading = true;
                this.service.showLoading();
                this.service.generateToken().subscribe(function (response) {
                    _this.service.dismissLoading();
                    console.log("getNewToken", response);
                    localStorage.setItem("token_expires_on", response.expires_on);
                    localStorage.setItem("access_token", response.access_token);
                    localStorage.setItem("token_expires_in", response.expires_in);
                    _this.generateTokenLoading = false;
                    _this.pageInit();
                }, function (error) {
                    _this.generateTokenLoading = false;
                    _this.service.dismissLoading();
                    console.log(JSON.stringify(error));
                });
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
        })
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map