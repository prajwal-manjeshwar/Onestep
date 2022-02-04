(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: TeamGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGuard", function() { return TeamGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");





var TeamGuard = /** @class */ (function () {
    function TeamGuard(router, navCtrl, service) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.service = service;
    }
    TeamGuard.prototype.canActivate = function (route, state) {
        return this.checkTeamStatus(state.url);
    };
    TeamGuard.prototype.checkTeamStatus = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var teamId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.get('teamId')];
                    case 1:
                        teamId = _a.sent();
                        if (teamId) {
                            return [2 /*return*/, true];
                        }
                        this.navCtrl.navigateRoot(['/tabs/tab5/search-team']);
                        return [2 /*return*/, false];
                }
            });
        });
    };
    TeamGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    TeamGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TeamGuard);
    return TeamGuard;
}());



/***/ }),

/***/ "./src/app/tab5/tab5-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab5/tab5-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab5PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageRoutingModule", function() { return Tab5PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");




var routes = [
    {
        path: '',
        redirectTo: 'my-team'
    },
    {
        path: 'search-team',
        loadChildren: function () { return Promise.all(/*! import() | search-team-search-team-module */[__webpack_require__.e("common"), __webpack_require__.e("search-team-search-team-module")]).then(__webpack_require__.bind(null, /*! ./search-team/search-team.module */ "./src/app/tab5/search-team/search-team.module.ts")).then(function (m) { return m.SearchTeamModule; }); }
    },
    {
        path: 'view-team/:id',
        loadChildren: function () { return Promise.all(/*! import() | view-team-view-team-module */[__webpack_require__.e("common"), __webpack_require__.e("view-team-view-team-module")]).then(__webpack_require__.bind(null, /*! ./view-team/view-team.module */ "./src/app/tab5/view-team/view-team.module.ts")).then(function (m) { return m.ViewTeamModule; }); }
    },
    {
        path: 'my-team',
        loadChildren: function () { return Promise.all(/*! import() | my-team-my-team-module */[__webpack_require__.e("common"), __webpack_require__.e("my-team-my-team-module")]).then(__webpack_require__.bind(null, /*! ./my-team/my-team.module */ "./src/app/tab5/my-team/my-team.module.ts")).then(function (m) { return m.MyTeamModule; }); },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["TeamGuard"]]
    },
    {
        path: 'create-team',
        loadChildren: function () { return __webpack_require__.e(/*! import() | create-team-create-team-module */ "create-team-create-team-module").then(__webpack_require__.bind(null, /*! ./create-team/create-team.module */ "./src/app/tab5/create-team/create-team.module.ts")).then(function (m) { return m.CreateTeamModule; }); },
    }
];
var Tab5PageRoutingModule = /** @class */ (function () {
    function Tab5PageRoutingModule() {
    }
    Tab5PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], Tab5PageRoutingModule);
    return Tab5PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab5-routing.module */ "./src/app/tab5/tab5-routing.module.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.guard */ "./src/app/services/auth.guard.ts");







var Tab5PageModule = /** @class */ (function () {
    function Tab5PageModule() {
    }
    Tab5PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tab5_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab5PageRoutingModule"]
            ],
            declarations: [],
            providers: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["TeamGuard"]]
        })
    ], Tab5PageModule);
    return Tab5PageModule;
}());



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map