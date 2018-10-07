(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'first angular application';
        this.name = 'Pedro Garcia';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_service_provider_service_provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/service-provider/service-provider.component */ "./src/app/components/service-provider/service-provider.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _plumber_plumber_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plumber/plumber.component */ "./src/app/plumber/plumber.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__["BlankComponent"],
                _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_6__["FullComponent"],
                _components_service_provider_service_provider_component__WEBPACK_IMPORTED_MODULE_9__["ServiceProviderComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"],
                _plumber_plumber_component__WEBPACK_IMPORTED_MODULE_12__["PlumberComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["Approutes"], { useHash: true }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCai7G_mPBiWVyCuG7hB09J2qFaoUNgM0g'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: Approutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approutes", function() { return Approutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _components_service_provider_service_provider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/service-provider/service-provider.component */ "./src/app/components/service-provider/service-provider.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _plumber_plumber_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plumber/plumber.component */ "./src/app/plumber/plumber.component.ts");




var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            { path: '', redirectTo: '/authentication/signup', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            }
        ]
    },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
                path: 'service-provider',
                component: _components_service_provider_service_provider_component__WEBPACK_IMPORTED_MODULE_1__["ServiceProviderComponent"]
            }]
    },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
                path: 'location',
                component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
            }]
    },
    {
        path: 'location',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
                path: 'service-provider',
                component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
            }]
    },
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [{
                path: 'plumber-component',
                component: _plumber_plumber_component__WEBPACK_IMPORTED_MODULE_3__["PlumberComponent"]
            }]
    },
    {
        path: '**',
        redirectTo: '/authentication/signup'
    }
];


/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <style>\n      /* Always set the map height explicitly to define the size of the div\n       * element that contains the map. */\n      #map {\n        height: 100%;\n        width: 100%;\n      }\n      /* Optional: Makes the sample page fill the window. */\n      html, body {\n        height: 100%;\n        margin: 0;\n        padding: 0;\n      }\n      #description {\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n      }\n\n      #infowindow-content .title {\n        font-weight: bold;\n      }\n\n      #infowindow-content {\n        display: none;\n      }\n\n      #map #infowindow-content {\n        display: inline;\n      }\n\n      .pac-card {\n        margin: 10px 10px 0 0;\n        border-radius: 2px 0 0 2px;\n        box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        outline: none;\n        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n        background-color: #fff;\n        font-family: Roboto;\n      }\n\n      #pac-container {\n        padding-bottom: 12px;\n        margin-right: 12px;\n      }\n\n      .pac-controls {\n        display: inline-block;\n        padding: 5px 11px;\n      }\n\n      .pac-controls label {\n        font-family: Roboto;\n        font-size: 13px;\n        font-weight: 300;\n      }\n\n      #pac-input {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 400px;\n      }\n\n      #pac-input:focus {\n        border-color: #4d90fe;\n      }\n\n      #title {\n        color: #fff;\n        background-color: #4d90fe;\n        font-size: 25px;\n        font-weight: 500;\n        padding: 6px 12px;\n      }\n      #target {\n        width: 345px;\n      }\n    </style>\n    <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\">\n    \n    <div class=\"row \" >\n      <div class=\"col-9\">\n        <div id=\"map\"></div>\n      </div>\n      <div class=\"col-2\">\n          <div class=\"card\" style=\"width: 22rem;\">\n              <img class=\"card-img-top\" src=\"/assets/images/background/Service-providers.jpeg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Locate Providers</h5>\n                <p class=\"card-text\">Licensed Providers are available to take on your daily Chores!</p>\n                <a href=\"#\" [routerLink]=\"['/service-provider']\" class=\"btn btn-primary\">Find Providers</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-1\">\n\n      </div>\n    </div>\n\n        \n    \n  \n  "

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {google} from 'angular-google-maps'
var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
        // startMap() {
        //   const ironhackBCN = {
        //     lat: 41.3977381,
        //     lng: 2.190471916};
        //   const map = new google.maps.Map(
        //     document.getElementById('map'),
        //     {
        //       zoom: 15,
        //       center: ironhackBCN
        //     }
        //   );
        // }
        // startMap();
        this.lat = 51.5033640;
        this.lng = -0.1276250;
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            styles: ["\n    agm-map {\n      height: 500px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/service-provider/service-provider.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/service-provider/service-provider.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/service-provider/service-provider.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/service-provider/service-provider.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<Div class=\"provider-header\" style=\"background-image:url(/assets/images/background/image-tools.jpg);\">\n<p style=\"text-align: center\">\n  Find same-day help for over 100 pre-priced home services!\n</p>\n</Div>\n\n  <div class=\"container2\">\n    <div class=\"row\"  >\n      <div class=\"col-3\"></div>\n      <div class=\"col-3\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"/assets/images/background/Gardner.jpeg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Gardener</h5>\n                <p class=\"card-text\">Approved Providers are available to complete some of our most popular lawn and garden services today.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n              </div>\n            </div>\n      </div>\n      \n      <div class=\"col-3\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"/assets/images/background/images.jpeg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Plumber</h5>\n                <p class=\"card-text\"> Licensed Plumbers that are ready to fix any plumbing problem. The Plumbing Doctors.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>  \n\n   <div class=\"row\">\n      <div class=\"col-3\"></div>\n      <div class=\"col-3\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\"/assets/images/background/contractor.jpeg\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Handyman</h5>\n            <p class=\"card-text\">Finding a local handyman for pre-priced small home improvements has never been so easy.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-3\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"/assets/images/background/cleaner.jpeg\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Cleaner</h5>\n                <p class=\"card-text\">Find help fast for a variety of cleaning and housekeeping services.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n              </div>\n            </div>\n      </div>\n      <div class=\"col-3\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/service-provider/service-provider.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/service-provider/service-provider.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServiceProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviderComponent", function() { return ServiceProviderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceProviderComponent = /** @class */ (function () {
    function ServiceProviderComponent() {
    }
    ServiceProviderComponent.prototype.ngOnInit = function () {
    };
    ServiceProviderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-provider',
            template: __webpack_require__(/*! ./service-provider.component.html */ "./src/app/components/service-provider/service-provider.component.html"),
            styles: [__webpack_require__(/*! ./service-provider.component.css */ "./src/app/components/service-provider/service-provider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceProviderComponent);
    return ServiceProviderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/blank/blank.component.css":
/*!***************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/blank/blank.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/layouts/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.css */ "./src/app/layouts/blank/blank.component.css")]
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/full/full.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* footer {\n      font: bold;\n      padding: 5px;\n      margin: 0px;\n}\n\n/*  */\nheader-style {\n      -webkit-text-decoration-style: solid 15px;\n              text-decoration-style: solid 15px;\n      float: right;\n      align-content: right;\n      \n}\n/* \n.footer-row {\n      color: #fff;\n      font-family: 'AvenirLTStd-Book';\n      padding: 20px 0;\n      border-top: 1px solid #96aab1;\n      background-color: #1d4959;\n      position: absolute;\n      width: 100%;\n      bottom: 0px;\n      left: 0px;\n  } */"

/***/ }),

/***/ "./src/app/layouts/full/full.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <div class=\"background-color\">\n\n\n      <div class=\"row\">\n           \n          <div class=\"col-md-3 col-lg-3\">\n              <a class=\"\" style=\"white-space: nowrap\" href=\"claims/add\"> Favorites</a>\n          </div>\n          <div class=\"col-md-3 col-lg-3\">\n              <a style=\"white-space: nowrap\" href=\"/profile\">My Jobs</a>\n          </div>\n\n          <div class=\"col-md-3 col-lg-3\">\n              <a class=\"\" style=\"white-space: nowrap\" href=\"/login\">Home</a>\n          </div>\n\n          <div class=\"col-md-3 col-lg-3\">\n            <a class=\"\" style=\"white-space: nowrap\" href=\"/signup\">Logout</a>\n        </div>\n        <div class=\"header-style\">\n                <p>HandyMax</p> \n              </div>\n    </div>\n\n\n    \n\n  </div>\n</nav>\n<div id=\"main-wrapper\" >\n\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n\n\n   \n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n      <router-outlet ></router-outlet>\n      <!-- ============================================================== -->\n      <!-- End Start Page Content -->\n      <!-- ============================================================== -->\n\n </div>\n\n  <!-- ============================================================== -->\n  <!-- End Page wrapper  -->\n  <!-- ============================================================== -->\n  <!-- ============================================================== -->\n  <!-- footer -->\n  <!-- ============================================================== -->\n\n\n  <!-- ============================================================== -->\n  <!-- End footer -->\n  <!-- ============================================================== -->\n\n</div>\n<!-- <footer class=\"footer row\">\n  <div class=\"fix-width\">\n     \n      <div class =\"footer col-md-12\">\n          <a class=\"\" href=\"claims/add\"> Favorites</a>\n          <a class=\"\" href=\"/profile\">My Jobs</a>\n          <a class=\"\" href=\"/login\">home</a>\n          <a class=\"\" href=\"/signup\">Settings</a>\n        </div>\n      \n    <div class=\"row\">\n      \n      <div class=\"clearfix\"></div>\n      <div class=\"col-md-12 sub-footer\">\n        <span>Copyright 2018. All Rights Reserved</span>\n        <span class=\"pull-right\">Design & Developed by Me</span>\n      </div>\n    </div>\n  </div>\n</footer> -->\n\n\n<footer class=\"footer-row\">\n    <div class=\"page-footer-container\">\n  \n      \n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.color = 'defaultdark';
        this.showSettings = false;
        this.showMinisidebar = false;
        this.showDarktheme = false;
        this.config = {};
    }
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/authentication/signup']);
        }
    };
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full.component.html */ "./src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.css */ "./src/app/layouts/full/full.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/plumber/plumber.component.css":
/*!***********************************************!*\
  !*** ./src/app/plumber/plumber.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/plumber/plumber.component.html":
/*!************************************************!*\
  !*** ./src/app/plumber/plumber.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  plumber works!\n</p>\n"

/***/ }),

/***/ "./src/app/plumber/plumber.component.ts":
/*!**********************************************!*\
  !*** ./src/app/plumber/plumber.component.ts ***!
  \**********************************************/
/*! exports provided: PlumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumberComponent", function() { return PlumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlumberComponent = /** @class */ (function () {
    function PlumberComponent() {
    }
    PlumberComponent.prototype.ngOnInit = function () {
    };
    PlumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plumber',
            template: __webpack_require__(/*! ./plumber.component.html */ "./src/app/plumber/plumber.component.html"),
            styles: [__webpack_require__(/*! ./plumber.component.css */ "./src/app/plumber/plumber.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlumberComponent);
    return PlumberComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnatan/Desktop/handymax-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map