(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_6__["AuthenticationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");


var AuthenticationRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            }, {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" >\n    <!-- style=\"background-image:url(/assets/images/background/img_cleaner-handyman.jpg);\" -->\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginform\">\n        <h3 class=\"box-title m-b-20\">Sign In</h3>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Username\"> </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"password\" required=\"\" placeholder=\"Password\"> </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12 font-14\">\n            <div class=\"checkbox checkbox-primary pull-left p-t-0\">\n              <input id=\"checkbox-signup\" type=\"checkbox\">\n              <label for=\"checkbox-signup\"> Remember me </label>\n            </div> <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\"><!-- <i class=\"fa fa-lock m-r-5\"></i> --> Forgot pwd?</a> </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <a class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" [routerLink]=\"['/dashboard/dashboard1']\" >Log In</a>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n            <div class=\"social\">\n              <a href=\"javascript:void(0)\" class=\"btn btn-facebook\" placement=\"top\" ngbTooltip=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fa fa-facebook\"></i> </a>\n              <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" placement=\"top\" ngbTooltip=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fa fa-google-plus\"></i> </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            <div>Don't have an account? <a class=\"text-info m-l-5\" [routerLink]=\"['/authentication/signup']\"><b>Sign Up</b></a></div>\n          </div>\n        </div>\n      </form>\n      <form class=\"form-horizontal\" id=\"recoverform\" action=\"index.html\">\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <h3>Recover Password</h3>\n            <p class=\"text-muted\">Enter your Email and instructions will be sent to you! </p>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\"> </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <a class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" [routerLink]=\"['/login']\">Reset</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.title = 'first angular application';
        this.name = 'Pedro Garcia';
    }
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-modal {\n    position: absolute;\n}"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(/assets/images/background/img_cleaner-handyman.jpg);\">\n    <!-- style=\"background-image:url(/assets/images/background/img_cleaner-handyman.jpg);\" -->\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginform\">\n        <h3 class=\"box-title m-b-20\">Get your chores done today with HandyMax. Register Today!</h3>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" required=\"\" type=\"text\" placeholder=\"Name\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" required=\"\" type=\"text\" placeholder=\"Email\">\n          </div>\n        </div>\n        <div class=\"form-group \">\n            <div class=\"col-xs-12\">\n              <input class=\"form-control\" required=\"\" type=\"text\" placeholder=\"Address\">\n            </div>\n          </div>\n\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" required=\"\" type=\"password\" placeholder=\"Password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12\">\n            <input class=\"form-control\" required=\"\" type=\"password\" placeholder=\"Confirm Password\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <div class=\"checkbox checkbox-success p-t-0\">\n              <input id=\"checkbox-signup\" type=\"checkbox\" required=\"\" class=\"filled-in chk-col-light-blue\">\n              <label for=\"checkbox-signup\"> I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center p-b-20\">\n          <div class=\"col-xs-12\">\n            <a [routerLink]=\"['/location']\" class=\"btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light\">Sign Up</a>\n          </div>\n        </div>\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n            Already have an account? <a class=\"text-info m-l-5\" [routerLink]=\"['/authentication/login']\"><b>Sign In</b></a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"modal-body\"> -->\n<!--     \n      <div class=\"row\">\n        <!-- <div class=\"col-md-4\">.col-md-4</div> -->\n        <!-- <div class=\"col-md-4 ml-auto\"></div>\n      </div>\n      <div class=\"card-modal\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\"assets/images/background/contractor-handyman.jpeg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Select a Chore & Time</h5>\n            <p class=\"card-text\">\n                Handymax offers over 400 pre-priced jobs and thousands of Build Your Own Job chores. Find what you need and request it now, or schedule for a specific time..</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div> --> -->\n        <!-- </div> -->\n      <!-- <div class=\"row\">\n        <div class=\"col-md-6 ml-auto\">.col-md-6 .ml-auto</div>\n      </div> -->\n      <!-- <div class=\"row\">\n        <div class=\"col-sm-9\">\n          Level 1: .col-sm-9\n          <div class=\"row\">\n            <div class=\"col-8 col-sm-6\">\n              Level 2: .col-8 .col-sm-6\n            </div>\n            <div class=\"col-4 col-sm-6\">\n              Level 2: .col-4 .col-sm-6\n            </div>\n          </div>\n        </div>\n      </div> -->\n    \n  <!-- </div> -->"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.title = 'first angular application';
        this.name = 'Pedro Garcia';
    }
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map