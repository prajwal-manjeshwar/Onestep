(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-team-view-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/view-team/view-team.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/view-team/view-team.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Teams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-spinner class=\"page-loader\" color=\"primary\" *ngIf=\"teamDetailsLoading\">\n  </ion-spinner> -->\n\n  <div class=\"page-loader\" *ngIf=\"teamDetailsLoading\">\n    <img src=\"assets/images/loader.gif\">\n  </div>\n\n  <div *ngIf=\"teamDetails\" class=\"my-team\">\n    <h3>{{teamDetails.teamName}}</h3>\n    <div class=\"blueContainer\">\n      <p>Rank <span>{{teamDetails.rank}}</span></p>\n      <p>Total Distance <span>{{teamDetails.distance | number : '1.0-2'}} Km</span></p>\n    </div>\n\n    <p class=\"member-count\">{{teamDetails.memberCount}} Team Members</p>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-row *ngFor=\"let member of teamDetails.members;let i=index\"\n          [ngClass]=\"{'greyContainer': !member.isActiveMember}\">\n          <ion-col size=\"12\" *ngIf=\"!member.isActiveMember\" class=\"left-team\">\n            <ion-text>Left Team\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"8\" class=\"member-name\">\n            <p><b>{{member.name}}</b></p>\n            <p>{{location[i]}}</p>\n          </ion-col>\n          <ion-col size=\"4\" class=\"member-distance\">\n            <p>{{member.distance | number : '1.0-2'}} Km</p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n<ng-container *ngIf=\"!currentTeamId && teamDetails\">\n  <ion-footer *ngIf=\"teamDetails.members.length<10\">\n    <ion-button expand=\"block\" (click)=\"!joinTeamLoading && joinTeam()\">\n      {{joinTeamLoading?'':'Join'}}\n      <ion-spinner *ngIf=\"joinTeamLoading\" name=\"dots\"></ion-spinner>\n    </ion-button>\n  </ion-footer>\n</ng-container>");

/***/ }),

/***/ "./src/app/tab5/view-team/view-team.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/tab5/view-team/view-team.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n  padding-right: 68px;\n  font-weight: bold;\n}\n\nion-content .my-team > h3 {\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 18px;\n}\n\nion-content .my-team .blueContainer {\n  background: rgba(0, 189, 242, 0.07) 0% 0% no-repeat padding-box;\n  margin: 0 10px 0 10px;\n  overflow: hidden;\n}\n\nion-content .my-team .blueContainer p:nth-child(1) {\n  float: left;\n  padding-left: 10px;\n}\n\nion-content .my-team .blueContainer p:nth-child(2) {\n  float: right;\n  padding-right: 10px;\n}\n\nion-content .my-team .blueContainer span {\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 10px;\n  color: var(--ion-color-primary);\n}\n\nion-content .my-team .member-count {\n  padding-left: 10px;\n}\n\nion-content .my-team ion-card ion-card-content {\n  padding: 0;\n}\n\nion-content .my-team ion-card .greyContainer {\n  background-color: #f5f5f5;\n  margin: 0;\n  padding-left: 10px;\n}\n\nion-content .my-team ion-card .greyContainer .member-distance p {\n  margin-right: 10px;\n}\n\nion-content .my-team ion-card ion-row {\n  color: #414141;\n  margin: 0 10px 0 10px;\n  border-bottom: 1px solid #cecece;\n}\n\nion-content .my-team ion-card ion-row .left-team {\n  text-align: right;\n  padding: 0;\n  --ion-grid-column-padding: 0;\n  line-height: 0.9;\n}\n\nion-content .my-team ion-card ion-row .left-team ion-text {\n  background-color: #ff6464;\n  border-bottom-left-radius: 11px;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 3px 2px 2px 6px;\n}\n\nion-content .my-team ion-card ion-row .member-name p:first-child {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1a1a1a;\n  margin-top: 10px;\n}\n\nion-content .my-team ion-card ion-row .member-name p:nth-child(2) {\n  margin-bottom: 10px;\n}\n\nion-content .my-team ion-card ion-row .member-name p {\n  font-size: 12px;\n}\n\nion-content .my-team ion-card ion-row .member-distance {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: right;\n}\n\nion-content .my-team ion-card ion-row .member-distance p {\n  float: right;\n  color: #00008c;\n  font-weight: 600;\n  font-size: 15px;\n}\n\nion-content .my-team ion-card div:last-child ion-row {\n  border-bottom: none !important;\n}\n\n.footer-md::before {\n  background-image: none;\n}\n\nion-footer ion-button {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNS92aWV3LXRlYW0vdmlldy10ZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR1E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUFaOztBQUVRO0VBQ0ksK0RBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQVo7O0FBQ1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDaEI7O0FBQ1k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDaEI7O0FBQ1k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ2hCOztBQUVRO0VBQ0ksa0JBQUE7QUFBWjs7QUFHWTtFQUNJLFVBQUE7QUFEaEI7O0FBR1k7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQURoQjs7QUFHb0I7RUFDSSxrQkFBQTtBQUR4Qjs7QUFLWTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSGhCOztBQUlnQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFGcEI7O0FBR29CO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUR4Qjs7QUFLb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIeEI7O0FBS29CO0VBQ0ksbUJBQUE7QUFIeEI7O0FBS29CO0VBQ0ksZUFBQTtBQUh4Qjs7QUFNZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSnBCOztBQUtvQjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSHhCOztBQVFnQjtFQUNJLDhCQUFBO0FBTnBCOztBQVlBO0VBQ0ksc0JBQUE7QUFUSjs7QUFZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVRSIiwiZmlsZSI6InNyYy9hcHAvdGFiNS92aWV3LXRlYW0vdmlldy10ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDY4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgICAubXktdGVhbSB7XHJcbiAgICAgICAgPiBoMyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJsdWVDb250YWluZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4OSwgMjQyLCAwLjA3KSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVtYmVyLWNvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JleUNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLm1lbWJlci1kaXN0YW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQxNDE0MTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xyXG4gICAgICAgICAgICAgICAgLmxlZnQtdGVhbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAycHggMnB4IDZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVtYmVyLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbWJlci1kaXN0YW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDhjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5pb24tZm9vdGVyIHtcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tab5/view-team/view-team.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab5/view-team/view-team.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTeamComponent", function() { return ViewTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_team_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/team-details */ "./src/app/tab5/models/team-details.ts");






var ViewTeamComponent = /** @class */ (function () {
    function ViewTeamComponent(router, service, activatedRoute, navCtrl) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.teamDetailsLoading = false;
        this.joinTeamLoading = false;
        this.generateTokenLoading = false;
        this.failedRequests = [];
        this.location = [];
    }
    ViewTeamComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    ViewTeamComponent.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, teamId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.employeeDetails = this.service.getEmpObject();
                        _a = this;
                        return [4 /*yield*/, this.service.get('teamId')];
                    case 1:
                        _a.currentTeamId = _b.sent();
                        console.log('employeeDetails', this.employeeDetails);
                        teamId = this.activatedRoute.snapshot.paramMap.get("id");
                        console.log('teamId', teamId);
                        this.getTeamDetails(teamId);
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTeamComponent.prototype.getTeamDetails = function (teamId) {
        var _this = this;
        this.teamDetailsLoading = true;
        var params = {};
        params.TeamID = teamId;
        console.log('getTeamDetails', params);
        this.service.getData('getDetailsByTeamID', params)
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('getTeamDetails', response);
                this.teamDetailsLoading = false;
                this.teamDetails = new _models_team_details__WEBPACK_IMPORTED_MODULE_5__["TeamDetails"](response);
                this.teamDetails.members.forEach(function (element) {
                    _this.location.push(_this.service.decryptMessage(element.location));
                });
                console.log('teamDetails', this.teamDetails);
                return [2 /*return*/];
            });
        }); }, function (error) {
            if (error.status === 401) {
                _this.generateToken('getTeamDetails', teamId);
            }
            else {
                _this.teamDetailsLoading = false;
                if (_this.service.onlineStatus)
                    _this.service.showToast('Something went wrong, please try again');
            }
        });
    };
    ViewTeamComponent.prototype.joinTeam = function () {
        var _this = this;
        this.joinTeamLoading = true;
        var params = {};
        params.TeamID = this.teamDetails.teamID;
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
                        this.service.showToast(response);
                        that = this;
                        if (!(response == ' Team Joined')) return [3 /*break*/, 2];
                        empObj = (_a = this.service.getUserData()) === null || _a === void 0 ? void 0 : _a.empObj;
                        return [4 /*yield*/, this.service.set('empObjBefore', empObj)];
                    case 1:
                        _b.sent();
                        this.service.set('teamId', this.teamDetails.teamID).then(function (value) {
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
                _this.generateToken('joinTeam', 'joinTeamLoading');
            }
            else {
                _this.joinTeamLoading = false;
                if (_this.service.onlineStatus)
                    _this.service.showToast('Something went wrong, please try again');
            }
        });
    };
    ViewTeamComponent.prototype.goBack = function () {
        this.router.navigate(['tabs/tab5']);
    };
    ViewTeamComponent.prototype.generateToken = function (retryFuncName, id) {
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
    ViewTeamComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    ViewTeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/view-team/view-team.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-team.component.scss */ "./src/app/tab5/view-team/view-team.component.scss")).default]
        })
    ], ViewTeamComponent);
    return ViewTeamComponent;
}());



/***/ }),

/***/ "./src/app/tab5/view-team/view-team.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tab5/view-team/view-team.module.ts ***!
  \****************************************************/
/*! exports provided: ViewTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTeamModule", function() { return ViewTeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-team.component */ "./src/app/tab5/view-team/view-team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var routes = [
    {
        path: '',
        component: _view_team_component__WEBPACK_IMPORTED_MODULE_5__["ViewTeamComponent"]
    }
];
var ViewTeamModule = /** @class */ (function () {
    function ViewTeamModule() {
    }
    ViewTeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_team_component__WEBPACK_IMPORTED_MODULE_5__["ViewTeamComponent"]]
        })
    ], ViewTeamModule);
    return ViewTeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-team-view-team-module.js.map