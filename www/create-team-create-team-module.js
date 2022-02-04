(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-team-create-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/create-team/create-team.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/create-team/create-team.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">Create Team</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div [class.hideBg]=\"employeeDetailsLoading\" *ngIf=\"employeeDetailsLoading\">\n    <div class=\"page-loader\">\n      <img src=\"assets/images/loader.gif\">\n    </div>\n  </div>\n\n  <p class=\"center\">\n    Contribute your efforts as a Team to achieve target completed by you helps\n     towards Tree plantation \n  </p>\n\n  <img src=\"assets/images/createTeam.PNG\" alt=\"your image\">\n\n  <p class=\"title\">Create a Team Name</p>\n\n  <ion-input (ionChange)=\"validateName()\" [(ngModel)]=\"teamName\" placeholder=\"Enter Team name\"\n    [ngClass]=\"{'errorTextBox': (placeNameError === true) || (characterLimitError === true) }\">\n  </ion-input>\n\n  <p *ngIf=\"placeNameError\" class=\"errorMessage\">- \n    Team name should not contain such as Location name, your name etc. \n    ( example – LTIPowai, LTIAiroli etc)\n  </p>\n  <p *ngIf=\"uniqueTeamError\" class=\"errorMessage\">- Team name already exists</p>\n  <p *ngIf=\"characterLimitError\" class=\"errorMessage\">- Character limit should not exceed 20 characters</p>\n  <p *ngIf=\"specialCharacterError\" class=\"errorMessage\">- Team name should not contain special characters</p>\n\n  <p class=\"border\"></p>\n\n  <p class=\"title\">Team Name Guidelines</p>\n  <ul>\n    <li>\n      <p>Team name should not contain a place name</p>\n    </li>\n    <li>Team name should not exceed 20 characters</li>\n    <li>Team name can not contain special characters</li>\n  </ul>\n\n  <ion-button (click)=\"!createTeamLoading && createTeam()\" expand=\"block\">\n    {{createTeamLoading?'':'Create Team'}}\n    <ion-spinner *ngIf=\"createTeamLoading\" name=\"dots\"></ion-spinner>\n  </ion-button>\n\n  <!-- <ion-button *ngIf=\"createTeamLoading\" expand=\"block\">\n    <ion-spinner name=\"dots\"></ion-spinner>\n  </ion-button> -->\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tab5/create-team/create-team.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/tab5/create-team/create-team.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  padding-right: 68px;\n  text-align: center;\n  font-weight: bold;\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\nion-content .center {\n  text-align: center;\n}\n\nion-content > img {\n  width: auto;\n  height: 35vh;\n}\n\nion-content .title {\n  font-weight: bold;\n  font-size: 16px;\n  color: #1a1a1a;\n  margin-top: 1%;\n  margin-bottom: 0;\n}\n\nion-content ion-input {\n  margin-top: 3%;\n  width: 90%;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\nion-content .errorTextBox {\n  margin-top: 3%;\n  margin-left: 5%;\n  width: 90%;\n  border-radius: 5px;\n  border: 1px solid #ff2424;\n}\n\nion-content .border {\n  border-bottom: 1px solid #cecece;\n  margin-top: 5%;\n}\n\nion-content .errorMessage {\n  color: #ff2424;\n  font-size: 14px;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 0;\n}\n\nion-content li {\n  color: #1a1a1a;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNS9jcmVhdGUtdGVhbS9jcmVhdGUtdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxjQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFFSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFEUjs7QUFHSTtFQUNJLGdDQUFBO0VBRUEsY0FBQTtBQUZSOztBQUlJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZSOztBQUlJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvdGFiNS9jcmVhdGUtdGVhbS9jcmVhdGUtdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC8vIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICA+IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgIC8vIGhlaWdodDogNDB2aDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMWExYTFhO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIH1cclxuICAgIC5lcnJvclRleHRCb3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjI0MjQ7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcclxuICAgICAgICAvLyBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcbiAgICAuZXJyb3JNZXNzYWdlIHtcclxuICAgICAgICBjb2xvcjogI2ZmMjQyNDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBjb2xvcjogIzFhMWExYTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab5/create-team/create-team.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tab5/create-team/create-team.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamComponent", function() { return CreateTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");





var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(router, service, navCtrl) {
        this.router = router;
        this.service = service;
        this.navCtrl = navCtrl;
        this.createTeamLoading = false;
        this.employeeDetailsLoading = false;
        this.generateTokenLoading = false;
        this.failedRequests = [];
        this.places = ['Pune', 'Mumbai', 'Hyderabad', 'Bangalore', 'Chennai', 'Powai'];
        this.teamName = null;
        this.teamLists = [];
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    CreateTeamComponent.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var teamData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                teamData = localStorage.getItem('teamLists');
                teamData = teamData ? JSON.parse(teamData) : [];
                if (teamData && teamData.length > 0) {
                    teamData.forEach(function (value) {
                        this.teamLists.push(value.teamName);
                    }, this);
                }
                console.log('teamLists', this.teamLists);
                this.employeeDetails = this.service.getEmpObject();
                return [2 /*return*/];
            });
        });
    };
    CreateTeamComponent.prototype.goBack = function () {
        this.router.navigate(['tabs/tab5']);
    };
    CreateTeamComponent.prototype.validateName = function () {
        // console.log(this.teamName);
        for (var index in this.places) {
            // console.log(this.teamName)
            if (this.teamName.toLowerCase().includes(this.places[index].toLowerCase())) {
                this.placeNameError = true;
                break;
            }
            else {
                this.placeNameError = false;
            }
        }
        for (var index in this.teamLists) {
            // console.log(this.teamName)
            if (this.teamName.toLowerCase() == this.teamLists[index].toLowerCase()) {
                this.uniqueTeamError = true;
                break;
            }
            else {
                this.uniqueTeamError = false;
            }
        }
        if (this.teamName.length > 20) {
            this.characterLimitError = true;
        }
        else {
            this.characterLimitError = false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (format.test(this.teamName)) {
            this.specialCharacterError = true;
        }
        else {
            this.specialCharacterError = false;
        }
    };
    CreateTeamComponent.prototype.createTeam = function () {
        var _this = this;
        if (!this.teamName) {
            this.service.showToast('Please enter team name');
            return;
        }
        if (this.placeNameError || this.characterLimitError || this.specialCharacterError ||
            this.uniqueTeamError) {
            return;
        }
        this.createTeamLoading = true;
        var params = {};
        params.TeamName = this.teamName;
        params.PsNumber = this.employeeDetails.psNo;
        params.Activitytype = 'walking';
        console.log('createTeam', params);
        this.service.postData('createTeam', params)
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('createTeam', response);
                this.createTeamLoading = false;
                if (response) {
                    this.service.showToast(response);
                }
                if (response == 'Team Created Successfully!') {
                    this.getEmployeeDetails();
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log('error', error);
            if (error.status === 401) {
                _this.generateToken('createTeam');
            }
            else {
                _this.createTeamLoading = false;
                if (_this.service.onlineStatus)
                    _this.service.showToast('Something went wrong, please try again');
            }
        });
    };
    CreateTeamComponent.prototype.getEmployeeDetails = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.employeeDetailsLoading = true;
                        params = {};
                        _a = params;
                        return [4 /*yield*/, this.service.get('loggedInUserEmail')];
                    case 1:
                        _a.Email = _b.sent();
                        console.log('getEmployeeDetails', params);
                        this.service.getData('GetCurrentTargetDetails', params)
                            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var details, that, empObj;
                            var _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        console.log('getEmployeeDetails', response);
                                        this.employeeDetailsLoading = false;
                                        details = response.teamMemberDetail;
                                        that = this;
                                        empObj = (_a = this.service.getUserData()) === null || _a === void 0 ? void 0 : _a.empObj;
                                        return [4 /*yield*/, this.service.set('empObjBefore', empObj)];
                                    case 1:
                                        _b.sent();
                                        this.service.set('teamId', details.TeamID).then(function (value) {
                                            that.service.updateTeamDetails();
                                            that.navCtrl.navigateRoot('tabs/tab5/my-team');
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            if (error.status === 401) {
                                _this.generateToken('getEmployeeDetails');
                            }
                            else {
                                _this.employeeDetailsLoading = false;
                                if (_this.service.onlineStatus)
                                    _this.service.showToast('Something went wrong, please try again');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateTeamComponent.prototype.generateToken = function (retryFuncName, id) {
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
    CreateTeamComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    CreateTeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/create-team/create-team.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-team.component.scss */ "./src/app/tab5/create-team/create-team.component.scss")).default]
        })
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "./src/app/tab5/create-team/create-team.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tab5/create-team/create-team.module.ts ***!
  \********************************************************/
/*! exports provided: CreateTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamModule", function() { return CreateTeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-team.component */ "./src/app/tab5/create-team/create-team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var routes = [
    {
        path: '',
        component: _create_team_component__WEBPACK_IMPORTED_MODULE_5__["CreateTeamComponent"]
    }
];
var CreateTeamModule = /** @class */ (function () {
    function CreateTeamModule() {
    }
    CreateTeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_team_component__WEBPACK_IMPORTED_MODULE_5__["CreateTeamComponent"]]
        })
    ], CreateTeamModule);
    return CreateTeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=create-team-create-team-module.js.map