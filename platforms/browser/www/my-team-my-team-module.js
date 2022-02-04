(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-team-my-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/my-team/my-team.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/my-team/my-team.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Teams</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{teamDetails?.teamName}}</ion-title>\n  </ion-toolbar>\n  <ion-segment mode=\"md\" [(ngModel)]=\"team\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"myTeam\">\n      <ion-label>My Team</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"otherTeam\">\n      <ion-label>Other Teams</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-spinner class=\"page-loader\" color=\"primary\" *ngIf=\"teamDetailsLoading\">\n  </ion-spinner> -->\n  <div class=\"page-loader\" *ngIf=\"teamDetailsLoading\">\n    <img src=\"assets/images/loader.gif\">\n  </div>\n\n  <ng-container *ngIf=\"team === 'myTeam'\">\n    <div *ngIf=\"teamDetails\" class=\"my-team\">\n      <div class=\"blueContainer\">\n        <p>Rank <span>{{teamDetails.rank}}</span></p>\n        <p>Total Distance <span>{{teamDetails.distance | number : '1.0-2'}} Km</span></p>\n      </div>\n\n      <p class=\"member-count\">{{teamDetails.memberCount}} Team Members</p>\n\n      <ion-card>\n        <ion-card-content>\n          <ion-row *ngFor=\"let member of teamDetails.members;let i=index\"\n            [ngClass]=\"{'greyContainer': !member.isActiveMember}\">\n            <ion-col size=\"12\" *ngIf=\"!member.isActiveMember\" class=\"left-team\">\n              <ion-text>Left Team\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"8\" class=\"member-name\">\n              <p><b>{{member.name}}</b></p>\n              <p>{{location[i]}}</p>\n            </ion-col>\n            <ion-col size=\"4\" class=\"member-distance\">\n              <p>{{member.distance | number : '1.0-2'}} Km</p>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ng-container>\n\n  <!-- Other Teams Tab -->\n\n  <div *ngIf=\"team === 'otherTeam'\">\n    <ng-container *ngFor=\"let team of teamList\">\n      <ion-card *ngIf=\"team.teamID != currentTeamId\" class=\"teamCard\">\n        <div>\n          <ion-text *ngIf=\"team.memberCount>10\">\n            Occupancy Fulfilled\n          </ion-text>\n        </div>\n        <ion-card-header>\n          {{team.teamName}}\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <span>{{team.rank}}</span><br>\n                <span>Rank</span>\n              </ion-col>\n              <ion-col>\n                <span>{{team.currentKms| number : '1.0-2'}} km</span><br>\n                <span>Distance</span>\n              </ion-col>\n              <ion-col>\n                <span>{{team.memberCount}}</span><br>\n                <span>Members</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col (click)=\"viewTeam(team.teamID)\">\n                <ion-button expand=\"full\" fill=\"clear\">View</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"team === 'myTeam' && teamDetails\">\n  <ion-button (click)=\"!exitTeamLoading && exitTeam()\" expand=\"block\">\n    {{exitTeamLoading?'':'Exit Team'}}\n    <ion-spinner *ngIf=\"exitTeamLoading\" name=\"dots\" color=\"light\"></ion-spinner>\n  </ion-button>\n  <!-- <ion-button *ngIf=\"exitTeamLoading\" expand=\"block\">\n    <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n  </ion-button> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/tab5/my-team/my-team.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab5/my-team/my-team.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background-color: #07078c;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\nion-title {\n  text-align: center;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n\nion-segment ion-label {\n  color: #fff !important;\n  text-transform: initial;\n  font-size: 16px;\n}\n\nion-segment ion-segment-button {\n  --color-checked: #fff;\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 20px;\n}\n\nion-content .my-team .blueContainer {\n  background: rgba(0, 189, 242, 0.07) 0% 0% no-repeat padding-box;\n  margin: 0 10px 0 10px;\n  overflow: hidden;\n}\n\nion-content .my-team .blueContainer p:nth-child(1) {\n  float: left;\n  padding-left: 10px;\n}\n\nion-content .my-team .blueContainer p:nth-child(2) {\n  float: right;\n  padding-right: 10px;\n}\n\nion-content .my-team .blueContainer span {\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 10px;\n  color: var(--ion-color-primary);\n}\n\nion-content .my-team .member-count {\n  padding-left: 10px;\n}\n\nion-content .my-team ion-card ion-card-content {\n  padding: 0;\n}\n\nion-content .my-team ion-card .greyContainer {\n  background-color: #f5f5f5;\n}\n\nion-content .my-team ion-card ion-row {\n  color: #414141;\n  margin: 0 10px 0 10px;\n  border-bottom: 1px solid #cecece;\n}\n\nion-content .my-team ion-card ion-row .left-team {\n  text-align: right;\n  padding: 0;\n  --ion-grid-column-padding: 0;\n  line-height: 0.9;\n}\n\nion-content .my-team ion-card ion-row .left-team ion-text {\n  background-color: #ff6464;\n  border-bottom-left-radius: 11px;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 3px 2px 2px 6px;\n}\n\nion-content .my-team ion-card ion-row .member-name p:first-child {\n  font-weight: 500;\n  font-size: 14px;\n  color: #1a1a1a;\n  margin-top: 10px;\n}\n\nion-content .my-team ion-card ion-row .member-name p:nth-child(2) {\n  margin-bottom: 10px;\n}\n\nion-content .my-team ion-card ion-row .member-name p {\n  font-size: 12px;\n}\n\nion-content .my-team ion-card ion-row .member-distance {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: right;\n}\n\nion-content .my-team ion-card ion-row .member-distance p {\n  float: right;\n  color: #00008c;\n  font-weight: 600;\n  font-size: 15px;\n}\n\nion-content .my-team ion-card div:last-child ion-row {\n  border-bottom: none !important;\n}\n\nion-content .teamCard {\n  border-radius: 10px;\n  margin-inline: 0;\n  margin: 0 0 10px 0;\n}\n\nion-content .teamCard ion-card-content {\n  padding: 0;\n}\n\nion-content .teamCard div:first-child {\n  text-align: right;\n}\n\nion-content .teamCard div:first-child ion-text {\n  height: 20px;\n  background-color: #ff6464;\n  border-bottom-left-radius: 11px;\n  color: white;\n  font-size: 10px;\n  font-weight: 500;\n  text-align: center;\n  padding: 5px;\n}\n\nion-content .teamCard ion-card-header {\n  text-align: center;\n  color: black;\n  font-size: 18px;\n}\n\nion-content .teamCard ion-row:first-child ion-col span:first-child {\n  color: #00008c;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-content .teamCard ion-row:first-child ion-col :nth-child(3) {\n  font-size: 14px;\n  color: #1a1a1a;\n}\n\nion-content .teamCard ion-row:nth-child(2) {\n  border-top: 1px solid #cccccc;\n}\n\nion-content .teamCard ion-row:nth-child(2) ion-col:first-child {\n  text-align: center;\n  padding: 0;\n}\n\nion-content .teamCard ion-row ion-col {\n  text-align: center;\n}\n\nion-content .teamCard ion-row ion-col ion-button {\n  height: 35px;\n}\n\nion-content .teamCard ion-row ion-card-content {\n  padding-bottom: 0px;\n}\n\n.footer-md::before {\n  background-image: none;\n}\n\nion-footer ion-button {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiNS9teS10ZWFtL215LXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBR0o7O0FBQUk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUdSOztBQURJO0VBQ0kscUJBQUE7QUFHUjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFRO0VBQ0ksK0RBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFHaEI7O0FBRFk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFHaEI7O0FBRFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBR2hCOztBQUFRO0VBQ0ksa0JBQUE7QUFFWjs7QUFDWTtFQUNJLFVBQUE7QUFDaEI7O0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjs7QUFDWTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBQ2hCOztBQUFnQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFFcEI7O0FBRG9CO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUd4Qjs7QUFDb0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDeEI7O0FBQ29CO0VBQ0ksbUJBQUE7QUFDeEI7O0FBQ29CO0VBQ0ksZUFBQTtBQUN4Qjs7QUFFZ0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQXBCOztBQUNvQjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ3hCOztBQUtnQjtFQUNJLDhCQUFBO0FBSHBCOztBQVFJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBT1E7RUFDSSxVQUFBO0FBTFo7O0FBT1E7RUFDSSxpQkFBQTtBQUxaOztBQU1ZO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSmhCOztBQU9RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxaOztBQVlvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWeEI7O0FBWW9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFWeEI7O0FBY1k7RUFDSSw2QkFBQTtBQVpoQjs7QUFjZ0I7RUFFSSxrQkFBQTtFQUNBLFVBQUE7QUFicEI7O0FBZ0JZO0VBQ0ksa0JBQUE7QUFkaEI7O0FBZWdCO0VBQ0ksWUFBQTtBQWJwQjs7QUFnQlk7RUFDSSxtQkFBQTtBQWRoQjs7QUFtQkE7RUFDSSxzQkFBQTtBQWhCSjs7QUFtQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFoQlIiLCJmaWxlIjoic3JjL2FwcC90YWI1L215LXRlYW0vbXktdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MDc4YztcclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAubXktdGVhbSB7XHJcbiAgICAgICAgLmJsdWVDb250YWluZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4OSwgMjQyLCAwLjA3KSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWVtYmVyLWNvdW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ3JleUNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3cge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQxNDE7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2VjZTtcclxuICAgICAgICAgICAgICAgIC5sZWZ0LXRlYW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC45O1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMnB4IDJweCA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbWJlci1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhMWExYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW1iZXItZGlzdGFuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDA4YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGVhbUNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZTogMDtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwOGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTFhMWE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDElO1xyXG4gICAgICAgICAgICAgICAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjQ1KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmZvb3Rlci1tZDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tab5/my-team/my-team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/tab5/my-team/my-team.component.ts ***!
  \***************************************************/
/*! exports provided: MyTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamComponent", function() { return MyTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _models_team_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/team-lists */ "./src/app/tab5/models/team-lists.ts");
/* harmony import */ var _models_team_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/team-details */ "./src/app/tab5/models/team-details.ts");







var MyTeamComponent = /** @class */ (function () {
    function MyTeamComponent(router, service, activatedRoute, platform, navCtrl) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.team = 'myTeam';
        this.teamDetailsLoading = false;
        this.teamListsLoading = false;
        this.exitTeamLoading = false;
        this.generateTokenLoading = false;
        this.failedRequests = [];
        this.location = [];
    }
    MyTeamComponent.prototype.segmentChanged = function (ev) {
    };
    MyTeamComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    // async ionViewWillEnter() {
    //   this.employeeDetails = await this.service.get('empObj');
    //   if (!this.employeeDetails.isActiveTeam) {
    //     this.navCtrl.navigateRoot(['/tabs/tab5/search-team'])
    //   }
    // }
    // ionViewWillEnter(){
    //   if (this.team == 'myTeam') {
    //     this.getTeamDetails();
    //   } else {
    //     this.getTeamLists();
    //   }
    // }
    MyTeamComponent.prototype.pageInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.employeeDetails = this.service.getEmpObject();
                        _a = this;
                        return [4 /*yield*/, this.service.get('teamId')];
                    case 1:
                        _a.currentTeamId = _b.sent();
                        console.log('employeeDetails', this.employeeDetails);
                        this.getTeamDetails('pageInit');
                        this.getTeamLists('pageInit');
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTeamComponent.prototype.getTeamDetails = function (pageInit) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var params, id;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.teamDetailsLoading = !this.refresher;
                        params = {};
                        return [4 /*yield*/, this.service.get('teamId')];
                    case 1:
                        id = _a.sent();
                        params.TeamID = JSON.stringify(id);
                        console.log('getTeamDetai', params);
                        this.service.getData('getDetailsByTeamID', params)
                            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                console.log('getTeamDetails', response);
                                this.teamDetailsLoading = false;
                                this.teamDetails = new _models_team_details__WEBPACK_IMPORTED_MODULE_6__["TeamDetails"](response);
                                this.teamDetails.members.forEach(function (element) {
                                    _this.location.push(_this.service.decryptMessage(element.location));
                                });
                                this.hideRefresher();
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            _this.teamDetailsLoading = false;
                            _this.hideRefresher();
                            if (error.status === 401) {
                                _this.generateToken('getTeamDetails');
                            }
                            else {
                                if (_this.service.onlineStatus)
                                    _this.service.showToast('Something went wrong, please try again');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTeamComponent.prototype.getTeamLists = function (pageInit) {
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
                }
                console.log('teamList', this.teamList);
                this.hideRefresher();
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.teamListsLoading = false;
            _this.hideRefresher();
            console.log('error', error);
            if (error.status === 401) {
                _this.generateToken('getTeamLists');
            }
            else {
                _this.teamList = [];
                if (_this.service.onlineStatus)
                    _this.service.showToast('Something went wrong, please try again');
            }
        });
    };
    MyTeamComponent.prototype.exitTeam = function () {
        var _this = this;
        this.exitTeamLoading = true;
        var params = {};
        params.TeamID = this.currentTeamId;
        params.PsNumber = this.employeeDetails.psNo;
        params.Activitytype = 'walking';
        params.ExitDate = new Date();
        params.IsActiveMember = 0;
        console.log('exitTeam', params);
        this.service.postData('exitTeam', params)
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var that;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log('exitTeam', response);
                this.exitTeamLoading = false;
                if (response) {
                    this.service.showToast(response);
                }
                that = this;
                if (response == ' Exited') {
                    this.service.set('teamId', '').then(function (value) {
                        that.service.set('teamKms', {}).then(function (value) {
                            that.navCtrl.navigateRoot('tabs/tab5/search-team');
                        });
                    });
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log('error', error);
            if (error.status === 401) {
                _this.generateToken('exitTeam');
            }
            else {
                _this.exitTeamLoading = false;
                if (_this.service.onlineStatus)
                    _this.service.showToast('Something went wrong, please try again');
            }
        });
    };
    MyTeamComponent.prototype.viewTeam = function (id) {
        this.router.navigate(['/tabs/tab5/view-team', id]);
    };
    MyTeamComponent.prototype.hideRefresher = function () {
        if (this.refresher && this.refresher.target) {
            this.refresher.target.complete();
            this.refresher = '';
        }
    };
    MyTeamComponent.prototype.generateToken = function (retryFuncName, id) {
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
    MyTeamComponent.prototype.doRefresh = function (event) {
        this.refresher = event;
        if (this.team == 'myTeam') {
            this.getTeamDetails();
        }
        else {
            this.getTeamLists();
        }
    };
    MyTeamComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    MyTeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/my-team/my-team.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-team.component.scss */ "./src/app/tab5/my-team/my-team.component.scss")).default]
        })
    ], MyTeamComponent);
    return MyTeamComponent;
}());



/***/ }),

/***/ "./src/app/tab5/my-team/my-team.module.ts":
/*!************************************************!*\
  !*** ./src/app/tab5/my-team/my-team.module.ts ***!
  \************************************************/
/*! exports provided: MyTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamModule", function() { return MyTeamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-team.component */ "./src/app/tab5/my-team/my-team.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var routes = [
    {
        path: '',
        component: _my_team_component__WEBPACK_IMPORTED_MODULE_5__["MyTeamComponent"]
    }
];
var MyTeamModule = /** @class */ (function () {
    function MyTeamModule() {
    }
    MyTeamModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_my_team_component__WEBPACK_IMPORTED_MODULE_5__["MyTeamComponent"]]
        })
    ], MyTeamModule);
    return MyTeamModule;
}());



/***/ })

}]);
//# sourceMappingURL=my-team-my-team-module.js.map