(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-team-search-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/search-team/search-team.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/search-team/search-team.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Teams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <!-- <ion-spinner name=\"lines\" color=\"dark\" class=\"page-loader\" >\n  </ion-spinner> -->\n\n  <div class=\"page-loader\" *ngIf=\"teamListsLoading\">\n    <img src=\"assets/images/loader.gif\">\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ng-container *ngIf=\"!teamListsLoading\">\n\n    <p>Join a Team or Create your own Team\n      Participate together & Contribute more\n    </p>\n\n    <ion-card class=\"str-btn\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p>Create your own Team</p>\n          </ion-col>\n\n          <ion-col>\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"createTeam()\">Start</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n\n    <div class=\"tm-search\">\n      <p>Recommended Teams for you</p>\n      <ion-searchbar (ionInput)=\"filterItem($event)\" [(ngModel)]=\"searchText\" placeholder=\"Search by Team name\">\n      </ion-searchbar>\n    </div>\n\n    <ion-card class=\"teamCard\" *ngFor=\"let team of teamList\">\n      <div>\n        <ion-text *ngIf=\"team.memberCount>10\">\n          Occupancy Fulfilled\n        </ion-text>\n      </div>\n      <ion-card-header>\n        {{team.teamName}}\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <span>{{team.rank}}</span><br>\n              <span>Rank</span>\n            </ion-col>\n            <ion-col>\n              <span>{{team.currentKms| number : '1.0-2'}} km</span><br>\n              <span>Distance</span>\n            </ion-col>\n            <ion-col>\n              <span>{{team.memberCount}}</span><br>\n              <span>Members</span>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col (click)=\"viewTeam(team.teamID)\">\n              <ion-button expand=\"full\" fill=\"clear\">View</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button *ngIf=\"!joinTeamLoading || selectedId != team.teamID\" [disabled]=\"team.memberCount > 10\"\n                expand=\"full\" fill=\"clear\" (click)=\"joinTeam(team.teamID); selectedId = team.teamID\">\n                Join\n              </ion-button>\n              <ion-button *ngIf=\"joinTeamLoading && selectedId == team.teamID\" expand=\"full\" fill=\"clear\">\n                <ion-spinner name=\"dots\"></ion-spinner>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/tab5/search-team/search-team.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tab5/search-team/search-team.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-weight: bold;\n  text-align: center;\n}\n\nion-content > p {\n  text-align: center;\n  color: #1a1a1a;\n  padding: 0 10px 0 10px;\n}\n\nion-content .str-btn ion-col {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\nion-content .str-btn p:first-child {\n  font-weight: bold;\n  color: #000000;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n}\n\nion-content .str-btn ion-button {\n  font-weight: bold;\n}\n\nion-content .tm-search {\n  margin-top: 20px;\n}\n\nion-content .tm-search p {\n  font-weight: bold;\n  font-size: 14px;\n  color: black;\n  margin-left: 5%;\n  margin-bottom: 0;\n}\n\nion-content .teamCard {\n  border-radius: 10px;\n  padding: 0;\n}\n\nion-content .teamCard ion-card-content {\n  padding: 0;\n}\n\nion-content .teamCard div:first-child {\n  text-align: right;\n}\n\nion-content .teamCard div:first-child ion-text {\n  height: 20px;\n  background-color: #ff6464;\n  border-bottom-left-radius: 11px;\n  color: white;\n  font-size: 10px;\n  font-weight: 500;\n  text-align: center;\n  padding: 5px;\n}\n\nion-content .teamCard ion-card-header {\n  text-align: center;\n  color: black;\n  font-size: 18px;\n}\n\nion-content .teamCard ion-row:first-child {\n  margin-bottom: 1%;\n}\n\nion-content .teamCard ion-row:first-child ion-col span:first-child {\n  color: #00008c;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-content .teamCard ion-row:first-child ion-col :nth-child(3) {\n  font-size: 14px;\n  color: #1a1a1a;\n}\n\nion-content .teamCard ion-row:nth-child(2) {\n  border-top: 1px solid rgba(112, 112, 112, 0.45);\n  padding-top: 1%;\n}\n\nion-content .teamCard ion-row:nth-child(2) ion-col:first-child {\n  border-right: 1px solid rgba(112, 112, 112, 0.45);\n  text-align: center;\n}\n\nion-content .teamCard ion-row ion-col {\n  text-align: center;\n}\n\nion-content .teamCard ion-row ion-col ion-button {\n  height: 20px;\n}\n\nion-content .teamCard ion-row ion-card-content {\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNS9zZWFyY2gtdGVhbS9zZWFyY2gtdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBRVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFaOztBQUVRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUFaOztBQUVRO0VBQ0ksaUJBQUE7QUFBWjs7QUFHSTtFQUNJLGdCQUFBO0FBRFI7O0FBRVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBR0k7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFEUjs7QUFFUTtFQUNJLFVBQUE7QUFBWjs7QUFFUTtFQUNJLGlCQUFBO0FBQVo7O0FBQ1k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDaEI7O0FBRVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQVo7O0FBSVk7RUFDSSxpQkFBQTtBQUZoQjs7QUFJb0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRnhCOztBQUlvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRnhCOztBQU1ZO0VBQ0ksK0NBQUE7RUFDQSxlQUFBO0FBSmhCOztBQUtnQjtFQUNJLGlEQUFBO0VBQ0Esa0JBQUE7QUFIcEI7O0FBTVk7RUFDSSxrQkFBQTtBQUpoQjs7QUFLZ0I7RUFDSSxZQUFBO0FBSHBCOztBQU1ZO0VBQ0ksbUJBQUE7QUFKaEIiLCJmaWxlIjoic3JjL2FwcC90YWI1L3NlYXJjaC10ZWFtL3NlYXJjaC10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgID4gcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3RyLWJ0biB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRtLXNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRlYW1DYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwOGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFhMWE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuNDUpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQ1KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tab5/search-team/search-team.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab5/search-team/search-team.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTeamComponent", function() { return SearchTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_team_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/team-lists */ "./src/app/tab5/models/team-lists.ts");






var SearchTeamComponent = /** @class */ (function () {
    function SearchTeamComponent(router, service, navCtrl) {
        this.router = router;
        this.service = service;
        this.navCtrl = navCtrl;
        this.teamListsLoading = false;
        this.joinTeamLoading = false;
        this.searchText = '';
        this.teamList = [];
        this.teamName = '';
        this.rank = '';
        this.distance = '';
        this.members = [];
        this.generateTokenLoading = false;
        this.failedRequests = [];
    }
    SearchTeamComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    SearchTeamComponent.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.employeeDetails = this.service.getEmpObject();
                console.log('employeeDetails', this.employeeDetails);
                this.getTeamLists('pageInit');
                return [2 /*return*/];
            });
        });
    };
    SearchTeamComponent.prototype.getTeamLists = function (pageInit) {
        var _this = this;
        this.teamListsLoading = !this.refresher;
        this.service.getData('getTeamsList')
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.teamListsLoading = false;
                console.log('getTeamLists', response);
                if (response && response.length > 0) {
                    this.teamList = response.map(function (data) {
                        return new _models_team_lists__WEBPACK_IMPORTED_MODULE_5__["TeamLists"](data);
                    });
                    this.teamsData = this.teamList;
                    console.log('teamList', this.teamList);
                }
                this.hideRefresher();
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log('error', error);
            if (error.status === 401) {
                _this.generateToken('getTeamLists');
            }
            else {
                _this.teamListsLoading = false;
                _this.hideRefresher();
                _this.teamList = [];
            }
        });
    };
    SearchTeamComponent.prototype.assignCopy = function () {
        this.teamList = Object.assign([], this.teamsData);
    };
    SearchTeamComponent.prototype.filterItem = function (value) {
        console.log(value.target.value);
        value = value.target.value;
        if (!value) {
            this.assignCopy();
        } // when nothing has typed
        this.teamList = Object.assign([], this.teamsData).filter(function (item) { return item.teamName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    SearchTeamComponent.prototype.createTeam = function () {
        localStorage.setItem('teamLists', JSON.stringify(this.teamList));
        this.router.navigate(['/tabs/tab5/create-team']);
    };
    SearchTeamComponent.prototype.viewTeam = function (id) {
        this.router.navigate(['/tabs/tab5/view-team', id]);
    };
    SearchTeamComponent.prototype.joinTeam = function (id) {
        var _this = this;
        this.joinTeamLoading = true;
        var params = {};
        params.TeamID = id;
        params.PsNumber = this.employeeDetails.psNo;
        params.Activitytype = 'walking';
        console.log('joinTeam', params);
        this.service.postData('joinTeam', params)
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var that, empObj;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('joinTeam', response);
                        this.joinTeamLoading = false;
                        if (response) {
                            this.service.showToast(response);
                        }
                        that = this;
                        if (!(response == ' Team Joined')) return [3 /*break*/, 2];
                        empObj = (_a = this.service.getUserData()) === null || _a === void 0 ? void 0 : _a.empObj;
                        return [4 /*yield*/, this.service.set('empObjBefore', empObj)];
                    case 1:
                        _b.sent();
                        this.service.set('teamId', id).then(function (value) {
                            that.service.updateTeamDetails();
                            that.navCtrl.navigateRoot('tabs/tab5/my-team');
                        });
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, function (error) {
            console.log('error', error);
            if (error.status === 401) {
                _this.generateToken('joinTeam', id);
            }
            else {
                _this.joinTeamLoading = false;
            }
        });
    };
    SearchTeamComponent.prototype.changeTab = function (tabIndex) {
        this.activetab = tabIndex;
    };
    SearchTeamComponent.prototype.exitTeam = function () {
        this.service.setTeamStatus(false);
    };
    SearchTeamComponent.prototype.doRefresh = function (event) {
        this.refresher = event;
        this.pageInit();
    };
    SearchTeamComponent.prototype.hideRefresher = function () {
        if (this.refresher && this.refresher.target) {
            this.refresher.target.complete();
            this.refresher = '';
        }
    };
    SearchTeamComponent.prototype.generateToken = function (retryFuncName, id) {
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
    SearchTeamComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    SearchTeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/search-team/search-team.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-team.component.scss */ "./src/app/tab5/search-team/search-team.component.scss")).default]
        })
    ], SearchTeamComponent);
    return SearchTeamComponent;
}());



/***/ }),

/***/ "./src/app/tab5/search-team/search-team.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab5/search-team/search-team.module.ts ***!
  \********************************************************/
/*! exports provided: SearchTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTeamModule", function() { return SearchTeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-team.component */ "./src/app/tab5/search-team/search-team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var routes = [
    {
        path: '',
        component: _search_team_component__WEBPACK_IMPORTED_MODULE_5__["SearchTeamComponent"]
    }
];
var SearchTeamModule = /** @class */ (function () {
    function SearchTeamModule() {
    }
    SearchTeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_team_component__WEBPACK_IMPORTED_MODULE_5__["SearchTeamComponent"]]
        })
    ], SearchTeamModule);
    return SearchTeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-team-search-team-module.js.map