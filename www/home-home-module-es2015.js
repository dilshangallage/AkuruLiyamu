(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "3uIU":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/util.js ***!
  \**************************************************************/
/*! exports provided: get, getPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (window.Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "C6fG":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "OE48");
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-native-plugin */ "EKAo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function() { return _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]; });

/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ "yR3O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["getPromise"]; });

/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ "QMYr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["cordova"]; });

/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ "aJZl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__["cordovaFunctionOverride"]; });

/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ "gGGD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__["cordovaInstance"]; });

/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ "O2kO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertySet"]; });

/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ "HD7q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertySet"]; });

/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ "uC2i");
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__) if(["default","IonicNativePlugin","checkAvailability","instanceAvailability","wrap","getPromise","cordova","cordovaFunctionOverride","cordovaInstance","cordovaPropertyGet","cordovaPropertySet","instancePropertyGet","instancePropertySet"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));


// Decorators







Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "EKAo":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/ionic-native-plugin.js ***!
  \*****************************************************************************/
/*! exports provided: IonicNativePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicNativePlugin", function() { return IonicNativePlugin; });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ "yR3O");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "3uIU");


var IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        return Object(_decorators_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(this.pluginRef) === true;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        return Object(_util__WEBPACK_IMPORTED_MODULE_1__["get"])(window, this.pluginRef);
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        return this.pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        return this.pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        return this.plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        return this.platforms || [];
    };
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),

/***/ "EvNN":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/text-to-speech/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/*! exports provided: TextToSpeech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextToSpeech", function() { return TextToSpeech; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var TextToSpeech = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TextToSpeech, _super);
    function TextToSpeech() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeech.prototype.speak = function (textOrOptions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeech.prototype.stop = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stop", {}, arguments); };
    TextToSpeech.pluginName = "Text To Speech";
    TextToSpeech.plugin = "cordova-plugin-tts";
    TextToSpeech.pluginRef = "TTS";
    TextToSpeech.repo = "https://github.com/vilic/cordova-plugin-tts";
    TextToSpeech.platforms = ["Android", "iOS", "Windows Phone 8"];
TextToSpeech.ɵfac = function TextToSpeech_Factory(t) { return ɵTextToSpeech_BaseFactory(t || TextToSpeech); };
TextToSpeech.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TextToSpeech, factory: function (t) { return TextToSpeech.ɵfac(t); } });
var ɵTextToSpeech_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TextToSpeech);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextToSpeech, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return TextToSpeech;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvdGV4dC10by1zcGVlY2gvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBR0EsSUFvQ2tDLGdDQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQU0sSUFPekUsNEJBQUssYUFBQyxhQUFrQztBQU03QixJQUdYLDJCQUFJO0FBSXNCO0FBQWdEO0FBQWdEO0FBQW9DO0FBQXVFO2dEQXhCdE8sVUFBVTs7Ozs7MEJBQ0w7QUFBQyx1QkF6Q1A7QUFBRSxFQXlDZ0MsaUJBQWlCO0FBQ2xELFNBRFksWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVFRTT3B0aW9ucyB7XG4gIC8qKiB0ZXh0IHRvIHNwZWFrICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqIGEgc3RyaW5nIGxpa2UgJ2VuLVVTJywgJ3poLUNOJywgZXRjICovXG4gIGxvY2FsZT86IHN0cmluZztcbiAgLyoqIHNwZWVkIHJhdGUsIDAgfiAxICovXG4gIHJhdGU/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgVGV4dCBUbyBTcGVlY2hcbiAqIEBkZXNjcmlwdGlvblxuICogVGV4dCB0byBTcGVlY2ggcGx1Z2luXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBUZXh0VG9TcGVlY2ggfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RleHQtdG8tc3BlZWNoL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0dHM6IFRleHRUb1NwZWVjaCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy50dHMuc3BlYWsoJ0hlbGxvIFdvcmxkJylcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3MnKSlcbiAqICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gY29uc29sZS5sb2cocmVhc29uKSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogVFRTT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RleHQgVG8gU3BlZWNoJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdHRzJyxcbiAgcGx1Z2luUmVmOiAnVFRTJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWxpYy9jb3Jkb3ZhLXBsdWdpbi10dHMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRleHRUb1NwZWVjaCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3BlYWtzXG4gICAqIEBwYXJhbSB0ZXh0T3JPcHRpb25zIHtzdHJpbmcgfCBUVFNPcHRpb25zfSBUZXh0IHRvIHNwZWFrIG9yIFRUU09wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNwZWFraW5nIGZpbmlzaGVzXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDIsXG4gIH0pXG4gIHNwZWFrKHRleHRPck9wdGlvbnM6IHN0cmluZyB8IFRUU09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIGFueSBjdXJyZW50IFRUUyBwbGF5YmFja1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "HD7q":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \**************************************************************************************/
/*! exports provided: instancePropertyGet, instancePropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return instancePropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return instancePropertySet; });
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ "O2kO":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \*************************************************************************************/
/*! exports provided: cordovaPropertyGet, cordovaPropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return cordovaPropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return cordovaPropertySet; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordovaPropertyGet(pluginObj, key) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ "OE48":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/bootstrap.js ***!
  \*******************************************************************/
/*! exports provided: checkReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkReady", function() { return checkReady; });
function checkReady() {
    var DEVICE_READY_TIMEOUT = 5000;
    // To help developers using cordova, we listen for the device ready event and
    // log an error if it didn't fire in a reasonable amount of time. Generally,
    // when this happens, developers should remove and reinstall plugins, since
    // an inconsistent plugin is often the culprit.
    var before = Date.now();
    var didFireReady = false;
    document.addEventListener('deviceready', function () {
        console.log("Ionic Native: deviceready event fired after " + (Date.now() - before) + " ms");
        didFireReady = true;
    });
    setTimeout(function () {
        if (!didFireReady && window.cordova) {
            console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
        }
    }, DEVICE_READY_TIMEOUT);
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "QMYr":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova.js ***!
  \****************************************************************************/
/*! exports provided: cordova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return cordova; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordova(pluginObj, methodName, config, args) {
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n<!--  <ion-toolbar>-->\n<!--    <ion-title>-->\n<!--      Blank-->\n<!--    </ion-title>-->\n<!--  </ion-toolbar>-->\n</ion-header>\n<ion-content>\n<div class=\"main-view\">\n    <div class=\"w1\"></div>\n    <div class=\"w2\"></div>\n    <div class=\"w3\"></div>\n    <div >\n        <ion-row class=\"button-set\">\n            <ion-col col-md-3>\n                <div class=\"button-item\">\n                    <ion-button id=\"sinhala-letters\" class=\"circle a-pulse button-solid\" data-animation=\"alternate\" style=\"--bgc:purple;\" routerLink=\"/white-board\">\n                        <img id=\"sinhala-akuru\" src=\"../../assets/sinhala-akuru.png\" alt=\"Nature\" class=\"responsive\"/>\n                    </ion-button>\n                </div>\n            </ion-col>\n            <ion-col col-md-3>\n                <div class=\"button-item\">\n                    <ion-button id=\"english-letters\" class=\"circle a-pulse button-solid\" data-animation=\"alternate\" style=\"--bgc:purple;\">\n                        <img id=\"english-akuru\" src=\"../../assets/english-letters.png\" alt=\"Nature\" class=\"responsive\"/>\n                    </ion-button>\n                </div>\n            </ion-col>\n\n            <ion-col col-md-3>\n                <div class=\"button-item\">\n                    <ion-button class=\"circle a-pulse button-solid\" data-animation=\"alternate\" style=\"--bgc:purple;\">\n                        <img id=\"numbers\" src=\"../../assets/bb-removebg-preview.png\" alt=\"Nature\" class=\"responsive\"/>\n                    </ion-button>\n                </div>\n            </ion-col>\n            <ion-col col-md-3>\n                <div class=\"button-item\">\n                    <ion-button class=\"circle a-pulse button-solid\" data-animation=\"alternate\" style=\"--bgc:purple;\" (click)=\"speech()\">\n                        <img id=\"kids-games\" src=\"../../assets/icons-removebg-preview.png\" alt=\"Nature\" class=\"responsive\"/>\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "aJZl":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \**********************************************************************************************/
/*! exports provided: cordovaFunctionOverride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return cordovaFunctionOverride; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "yR3O");


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPlugin"])(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  height: 100%;\n}\n\n.main-view {\n  background-image: url('home01.jpg');\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.box {\n  align-self: flex-end;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  background-color: #F44336;\n  height: 200px;\n  margin: 0 auto 0 auto;\n  transform-origin: bottom;\n  width: 200px;\n}\n\n.bounce-3 {\n  -webkit-animation-name: bounce-3;\n          animation-name: bounce-3;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n}\n\n@-webkit-keyframes bounce-3 {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n  30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n  }\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n@keyframes bounce-3 {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(1.1, 0.9) translateY(0);\n  }\n  30% {\n    transform: scale(0.9, 1.1) translateY(-100px);\n  }\n  50% {\n    transform: scale(1.05, 0.95) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(-7px);\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n\n.chk {\n  align-items: center;\n  cursor: pointer;\n  display: inline-flex;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.chk::before {\n  --ico-check: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M14 2.5l-8.5 8.5-3.5-3.5-1.5 1.5 5 5 10-10z\" fill=\"white\"></path></svg>');\n  background: silver var(--ico-check) center center/70% no-repeat;\n  border-radius: 0.25rem;\n  display: inline-block;\n  content: \"\";\n  height: 1.25rem;\n  -webkit-margin-end: 0.25rem;\n          margin-inline-end: 0.25rem;\n  width: 1.25rem;\n}\n\n.hidden {\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  -webkit-clip-path: inset(1px);\n          clip-path: inset(1px);\n  display: block;\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.circle {\n  --w: 150px;\n  align-items: center;\n  border-radius: 50%;\n  color: #FFF;\n  display: flex;\n  height: var(--w);\n  justify-content: center;\n  margin-bottom: 1rem;\n  width: var(--w);\n}\n\n.a-pulse {\n  --animdur: 1.5s;\n  --animn: pulse;\n  will-change: transform;\n}\n\n.a-slide {\n  --animdur: 3s;\n  --animn: slide;\n}\n\n[data-animation] {\n  -webkit-animation: var(--animn, none) var(--animdur, 0s) var(--animtf, linear) var(--animdel, 0s) var(--animic, infinite) var(--animdir, alternate) var(--animfm, none) var(--animps, running);\n          animation: var(--animn, none) var(--animdur, 0s) var(--animtf, linear) var(--animdel, 0s) var(--animic, infinite) var(--animdir, alternate) var(--animfm, none) var(--animps, running);\n}\n\n/* REDUCED MOTION */\n\n@media (prefers-reduced-motion) {\n  [data-animation=alternate] {\n    --animdur: 4s;\n    --animn: opacity;\n  }\n\n  [data-animation=slow] {\n    --animdur: 10s;\n  }\n\n  [data-animation=stop] {\n    --animps: paused;\n  }\n}\n\n/* SIMULATE REDUCED MOTION W/ CHECKBOX */\n\n[data-reduced-motion]:checked ~ [data-animation=alternate] {\n  --animdur: 4s;\n  --animn: opacity;\n}\n\n[data-reduced-motion]:checked ~ [data-animation=once] {\n  --animic: 1;\n}\n\n[data-reduced-motion]:checked ~ [data-animation=slow] {\n  --animdur: 10s;\n}\n\n[data-reduced-motion]:checked ~ [data-animation=stop] {\n  --animps: paused;\n}\n\n/* KEYFRAMES */\n\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes slide {\n  from {\n    margin-left: 0%;\n  }\n  to {\n    margin-left: calc(100% - var(--w, 150px));\n  }\n}\n\n@keyframes slide {\n  from {\n    margin-left: 0%;\n  }\n  to {\n    margin-left: calc(100% - var(--w, 150px));\n  }\n}\n\n#cycle-ride {\n  --background: #fff url('ride.png');\n}\n\n/* Generic transform */\n\n/* Rotation */\n\n/* Translation */\n\n/* Generic animation */\n\nbody {\n  background: #ffd41c;\n}\n\n.box {\n  position: relative;\n  margin: auto;\n  margin-top: 10%;\n  width: 890px;\n  height: 588px;\n  border: solid 4px none;\n}\n\n.bike {\n  position: absolute;\n}\n\n/* Wheels */\n\n.front-wheel, .back-wheel {\n  position: absolute;\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  background: none;\n  border: 12px solid #424242;\n  box-shadow: inset 0px 0px 0px 5px #FFF;\n  top: 350px;\n  z-index: 2;\n}\n\n/* Back wheel */\n\n.back-wheel {\n  left: 20px;\n}\n\n/* Front wheel*/\n\n.front-wheel {\n  left: 440px;\n}\n\n/*ROTATION ANIMATION for CASSETTE & SPOKES ~ CW*/\n\n@-webkit-keyframes rotation {\n  from {\n    transform: rotate(-359deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(-359deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n/* Cassette for both front and back wheel */\n\n.cassette {\n  position: absolute;\n  background: white;\n  border-radius: 50%;\n  border: 4px solid black;\n  width: 20px;\n  height: 20px;\n  top: 88px;\n  left: 86px;\n  z-index: 2;\n  -webkit-animation: rotation 1s infinite linear;\n  animation: rotation 1s infinite linear;\n}\n\n/* Spokes */\n\n._5-11, ._4-10, ._3-9, ._2-8, ._1-7, ._12-6 {\n  position: absolute;\n  background: grey;\n  width: 2px;\n  height: 190px;\n  top: -87px;\n  left: 9px;\n  z-index: 1;\n}\n\n/* 360deg/12 hrs = 30deg between each hour number change */\n\n._1-7 {\n  transform: rotate(30deg);\n}\n\n._2-8 {\n  transform: rotate(60deg);\n}\n\n._3-9 {\n  transform: rotate(90deg);\n}\n\n._4-10 {\n  transform: rotate(120deg);\n}\n\n._5-11 {\n  transform: rotate(150deg);\n}\n\n/*Bike Body Frame ~6 parts */\n\n.handlebar-frame, .seat-frame, .fr-upper, .fr-lower, .bk-upper, .bk-lower {\n  position: absolute;\n  background: #ed9a18;\n  height: 14px;\n  z-index: 3;\n  border-radius: 20px;\n}\n\n.bk-lower {\n  top: 465px;\n  left: 125px;\n  transform: rotate(3deg);\n  width: 185px;\n}\n\n.bk-upper {\n  transform: rotate(-50deg);\n  width: 200px;\n  top: 385px;\n  left: 90px;\n}\n\n.fr-lower {\n  width: 260px;\n  transform: rotate(-40deg);\n  top: 390px;\n  left: 272px;\n}\n\n.fr-upper {\n  width: 250px;\n  top: 295px;\n  left: 244px;\n  transform: rotate(-10deg);\n}\n\n.seat-frame {\n  width: 235px;\n  top: 365px;\n  left: 148px;\n  transform: rotate(-111deg);\n}\n\n.handlebar-frame {\n  width: 270px;\n  top: 340px;\n  left: 375px;\n  transform: rotate(-110deg);\n}\n\n/*seatpost ~ tipped white */\n\n.seatpost {\n  position: absolute;\n  width: 40px;\n  height: 14px;\n  background: #d6d6d6;\n  z-index: 5;\n  left: 190px;\n}\n\n/* Seat */\n\n.seat {\n  position: absolute;\n  background: #424242;\n  width: 90px;\n  height: 40px;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 120px;\n  border-top-left-radius: 40px;\n  border-top-right-radius: 20px;\n  top: 245px;\n  left: 185px;\n  z-index: 4;\n}\n\n/* HEADSET and HANDLEBAR section, in order from bottom to top*/\n\n.bar {\n  position: absolute;\n  z-index: 4;\n  border-radius: 10px;\n  width: 15px;\n}\n\n.headset {\n  background: #d6d6d6;\n  height: 65px;\n  top: 213px;\n  left: 466px;\n  transform: rotate(-20deg);\n}\n\n.stem {\n  background: #424242;\n  height: 35px;\n  top: 190px;\n  left: 460px;\n  transform: rotate(25deg);\n}\n\n.hb1 {\n  background: #424242;\n  height: 75px;\n  top: 160px;\n  left: 435px;\n  transform: rotate(90deg);\n}\n\n.hb2 {\n  background: #0073b5;\n  height: 50px;\n  top: 172.75px;\n  left: 415px;\n  transform: rotate(90deg);\n}\n\n/* Crankset & crank */\n\n.crankset {\n  position: absolute;\n  border: 5px solid #dedede;\n  background: none;\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  left: 275px;\n  top: 445px;\n  z-index: 5;\n}\n\n/*ROTATION ANIMATION for CRANK ~ CW*/\n\n@-webkit-keyframes crank-rot {\n  from {\n    transform: rotate(-359deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes crank-rot {\n  from {\n    transform: rotate(-359deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n}\n\n.crank {\n  position: absolute;\n  background: #dedede;\n  width: 5px;\n  height: 45px;\n  left: 305px;\n  top: 425px;\n  z-index: 5;\n  transform-origin: bottom left;\n  transform: rotate(25deg);\n  -webkit-animation: crank-rot 1s infinite linear;\n  animation: crank-rot 1s infinite linear;\n}\n\n/* Hub */\n\n.hub {\n  position: absolute;\n  background: none;\n  border: 4px solid #d6d6d6;\n  /* grey-tinged white */\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  top: 452px;\n  left: 120px;\n  z-index: 5;\n}\n\n/*Chains*/\n\n.chain-lo, .chain-upp {\n  position: absolute;\n  background: #353535;\n  width: 180px;\n  height: 3px;\n  z-index: 4;\n}\n\n.chain-upp {\n  top: 448px;\n  left: 130px;\n  z-index: 4;\n  transform: rotate(-1deg);\n}\n\n.chain-lo {\n  top: 486px;\n  left: 125px;\n  z-index: 4;\n  transform: rotate(7deg);\n}\n\n/* Bike Shadow */\n\n.bike-shadow {\n  position: absolute;\n  background: #f5cc1b;\n  border-radius: 20px;\n  width: 800px;\n  height: 28px;\n  top: 555px;\n  left: -60px;\n  z-index: 1;\n}\n\n/* Streaks of light on the ground */\n\n.streak4, .streak3, .streak2, .streak1 {\n  position: absolute;\n  background: white;\n  border-radius: 20px;\n  height: 5px;\n  opacity: 0.8;\n}\n\n@-webkit-keyframes moveStreak {\n  from {\n    transform: translate(-320px, 0px);\n  }\n  to {\n    transform: translate(-800px, 0px);\n  }\n}\n\n@keyframes moveStreak {\n  from {\n    transform: translate(-320px, 0px);\n  }\n  to {\n    transform: translate(-800px, 0px);\n  }\n}\n\n.streak1 {\n  width: 50px;\n  top: 500px;\n  left: 200px;\n  -webkit-animation: moveStreak 0.55s infinite ease-in;\n  animation: moveStreak 0.55s infinite ease-in;\n}\n\n.streak2 {\n  width: 80px;\n  top: 520px;\n  left: 300px;\n  -webkit-animation: moveStreak 0.8s infinite ease-in;\n  animation: moveStreak 0.8s infinite ease-in;\n}\n\n.streak3 {\n  width: 30px;\n  top: 500px;\n  left: 380px;\n  -webkit-animation: moveStreak 0.45s infinite ease-in;\n  animation: moveStreak 0.45s infinite ease-in;\n}\n\n.streak4 {\n  width: 120px;\n  top: 530px;\n  left: 280px;\n  -webkit-animation: moveStreak 0.3s infinite ease-in;\n  animation: moveStreak 0.3s infinite ease-in;\n}\n\n/*------------- START OF STYLING FOR GIRL ------------------------*/\n\n.girl {\n  position: absolute;\n}\n\n/*TORSO */\n\n.chest {\n  position: absolute;\n  background: #ffbd29;\n  width: 80px;\n  height: 85px;\n  border-radius: 35px;\n  left: 235px;\n  top: 75px;\n  z-index: 4;\n  transform: rotate(20deg);\n  -webkit-animation: movechest 1s infinite linear;\n  animation: movechest 1s infinite linear;\n  box-shadow: inset 4px 5px 0px 0px #ecb634;\n}\n\n@-webkit-keyframes movechest {\n  0% {\n    transform: translate(-4px, 0px);\n  }\n  20% {\n    transform: translate(3px, -2px);\n  }\n  40% {\n    transform: translate(8px, -6px);\n  }\n  80% {\n    transform: translate(3px, -2px);\n  }\n  100% {\n    transform: translate(-4px, 0px);\n  }\n}\n\n@keyframes movechest {\n  0% {\n    transform: translate(-4px, 0px);\n  }\n  20% {\n    transform: translate(3px, -2px);\n  }\n  40% {\n    transform: translate(8px, -6px);\n  }\n  80% {\n    transform: translate(3px, -2px);\n  }\n  100% {\n    transform: translate(-4px, 0px);\n  }\n}\n\n@-webkit-keyframes movebelly {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(20deg);\n    -webkit-transform: translate(-4px, 0px) rotate(20deg);\n    -moz-transform: translate(-4px, 0px) rotate(20deg);\n    -ms-transform: translate(-4px, 0px) rotate(20deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(20deg);\n    -webkit-transform: translate(3px, -2px) rotate(20deg);\n    -moz-transform: translate(3px, -2px) rotate(20deg);\n    -ms-transform: translate(3px, -2px) rotate(20deg);\n  }\n  40% {\n    transform: translate(8px, -6px) rotate(20deg);\n    -webkit-transform: translate(8px, -6px) rotate(20deg);\n    -moz-transform: translate(8px, -6px) rotate(20deg);\n    -ms-transform: translate(8px, -6px) rotate(20deg);\n  }\n}\n\n@keyframes movebelly {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(20deg);\n    -webkit-transform: translate(-4px, 0px) rotate(20deg);\n    -moz-transform: translate(-4px, 0px) rotate(20deg);\n    -ms-transform: translate(-4px, 0px) rotate(20deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(20deg);\n    -webkit-transform: translate(3px, -2px) rotate(20deg);\n    -moz-transform: translate(3px, -2px) rotate(20deg);\n    -ms-transform: translate(3px, -2px) rotate(20deg);\n  }\n  40% {\n    transform: translate(8px, -6px) rotate(20deg);\n    -webkit-transform: translate(8px, -6px) rotate(20deg);\n    -moz-transform: translate(8px, -6px) rotate(20deg);\n    -ms-transform: translate(8px, -6px) rotate(20deg);\n  }\n}\n\n.belly {\n  position: absolute;\n  background: #ffbd29;\n  width: 70px;\n  height: 68px;\n  border-radius: 10px;\n  left: 220px;\n  top: 133px;\n  z-index: 5;\n  -webkit-animation: movebelly 1s infinite linear;\n  animation: movebelly 1s infinite linear;\n}\n\n.back-shadow {\n  position: absolute;\n  background: #ecb634;\n  height: 100%;\n  width: 10%;\n}\n\n/* Right Arm */\n\n.r-arm {\n  position: absolute;\n  background: #bd5239;\n  width: 25px;\n  height: 210px;\n  border-radius: 20px;\n  left: 89px;\n  top: -32px;\n  transform: rotate(-60deg);\n}\n\n.r-sleeve {\n  position: absolute;\n  background: #ed9a18;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 40px;\n  height: 55px;\n  left: -8px;\n}\n\n.r-a-shadow {\n  position: absolute;\n  background: #8a3828;\n  height: 5%;\n  width: 100%;\n  top: 26%;\n}\n\n/* LEFT ARM */\n\n@-webkit-keyframes moveleftarm {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(-55deg);\n    -webkit-transform: translate(-4px, 0px) rotate(-55deg);\n    -moz-transform: translate(-4px, 0px) rotate(-55deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(-55deg);\n    -webkit-transform: translate(3px, -2px) rotate(-55deg);\n    -moz-transform: translate(3px, -2px) rotate(-55deg);\n  }\n  40% {\n    transform: translate(8px, -1px) rotate(-55deg);\n    -webkit-transform: translate(8px, -1px) rotate(-55deg);\n    -moz-transform: translate(8px, -1px) rotate(-55deg);\n  }\n}\n\n@keyframes moveleftarm {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(-55deg);\n    -webkit-transform: translate(-4px, 0px) rotate(-55deg);\n    -moz-transform: translate(-4px, 0px) rotate(-55deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(-55deg);\n    -webkit-transform: translate(3px, -2px) rotate(-55deg);\n    -moz-transform: translate(3px, -2px) rotate(-55deg);\n  }\n  40% {\n    transform: translate(8px, -1px) rotate(-55deg);\n    -webkit-transform: translate(8px, -1px) rotate(-55deg);\n    -moz-transform: translate(8px, -1px) rotate(-55deg);\n  }\n}\n\n.l-arm {\n  position: absolute;\n  background: #9c4231;\n  width: 25px;\n  height: 190px;\n  border-radius: 20px;\n  left: 360px;\n  top: 51px;\n  z-index: 1;\n  -webkit-animation: moveleftarm 1s infinite linear;\n  animation: moveleftarm 1s infinite linear;\n}\n\n.l-sleeve {\n  position: absolute;\n  background: #ed9a18;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 30px;\n  height: 50px;\n}\n\n.l-a-shadow {\n  position: absolute;\n  background: #8a3828;\n  width: 100%;\n  height: 5%;\n  top: 25%;\n}\n\n.pelvic-reg {\n  position: absolute;\n  background: #0073b5;\n  border-radius: 40px;\n  width: 95px;\n  height: 80px;\n  top: 185px;\n  left: 185px;\n  z-index: 4;\n  -webkit-animation: movechest 1s infinite linear;\n  animation: movechest 1s infinite linear;\n}\n\n/* RIGHT LEG */\n\n/*ROTATION ANIMATION for Right THIGH~ CW*/\n\n@-webkit-keyframes thigh-rot {\n  0%, 100% {\n    transform: rotate(-78deg);\n  }\n  50% {\n    transform: rotate(-35deg);\n  }\n}\n\n@keyframes thigh-rot {\n  0%, 100% {\n    transform: rotate(-78deg);\n  }\n  50% {\n    transform: rotate(-35deg);\n  }\n}\n\n.r-thigh {\n  position: absolute;\n  background: #bd5239;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 30px;\n  border-bottom-left-radius: 20px;\n  width: 33px;\n  height: 190px;\n  top: 230px;\n  left: 194px;\n  transform: rotate(-75deg);\n  z-index: 6;\n  transform-origin: left top;\n  -webkit-animation: thigh-rot 1s infinite linear;\n  animation: thigh-rot 1s infinite linear;\n}\n\n.r-pants {\n  position: absolute;\n  background: #0073b5;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 58px;\n  height: 125px;\n  left: -10px;\n}\n\n.r-shadow {\n  position: absolute;\n  background: #8a3828;\n  width: 100%;\n  height: 7%;\n  top: 65%;\n}\n\n/*ROTATION ANIMATION for Right CALF ~ CW*/\n\n@-webkit-keyframes right-calf-rot {\n  0%, 100% {\n    transform: rotate(80deg);\n  }\n  20% {\n    transform: rotate(60deg);\n  }\n  40% {\n    transform: rotate(50deg);\n  }\n  80% {\n    transform: rotate(110deg);\n  }\n  90% {\n    transform: rotate(100deg);\n  }\n  95% {\n    transform: rotate(90deg);\n  }\n}\n\n@keyframes right-calf-rot {\n  0%, 100% {\n    transform: rotate(80deg);\n  }\n  20% {\n    transform: rotate(60deg);\n  }\n  40% {\n    transform: rotate(50deg);\n  }\n  80% {\n    transform: rotate(110deg);\n  }\n  90% {\n    transform: rotate(100deg);\n  }\n  95% {\n    transform: rotate(90deg);\n  }\n}\n\n.r-calf {\n  position: absolute;\n  background: #bd5239;\n  border-radius: 40px;\n  width: 34px;\n  height: 170px;\n  top: 157.5px;\n  left: 21px;\n  transform: rotate(95deg);\n  -webkit-animation: right-calf-rot 1s infinite linear;\n  animation: right-calf-rot 1s infinite linear;\n  transform-origin: left top;\n}\n\n/* LEFT LEG */\n\n/*ROTATION ANIMATION for LEFT THIGH~ CW*/\n\n@-webkit-keyframes left-thigh-rot {\n  0%, 100% {\n    transform: rotate(-25deg);\n  }\n  50% {\n    transform: rotate(-70deg);\n  }\n}\n\n@keyframes left-thigh-rot {\n  0%, 100% {\n    transform: rotate(-25deg);\n  }\n  50% {\n    transform: rotate(-70deg);\n  }\n}\n\n.l-thigh {\n  position: absolute;\n  background: #9c4231;\n  border-radius: 40px;\n  width: 34px;\n  height: 185px;\n  top: 218px;\n  left: 215px;\n  transform: rotate(-22deg);\n  z-index: 1;\n  transform-origin: left top;\n  -webkit-animation: left-thigh-rot 1s infinite linear;\n  animation: left-thigh-rot 1s infinite linear;\n}\n\n.l-pants {\n  position: absolute;\n  background: #066da2;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  width: 55px;\n  height: 124px;\n  left: -10px;\n}\n\n.l-shadow {\n  position: absolute;\n  background: #8a3828;\n  width: 100%;\n  height: 7%;\n  top: 65%;\n}\n\n/*ROTATION ANIMATION for Left CALF ~ CW*/\n\n@-webkit-keyframes left-calf-rot {\n  0%, 100% {\n    transform: rotate(45deg);\n  }\n  38% {\n    transform: rotate(110deg);\n  }\n  70% {\n    transform: rotate(55deg);\n  }\n}\n\n@keyframes left-calf-rot {\n  0%, 100% {\n    transform: rotate(45deg);\n  }\n  38% {\n    transform: rotate(110deg);\n  }\n  70% {\n    transform: rotate(55deg);\n  }\n}\n\n.l-calf {\n  position: absolute;\n  background: #9c4231;\n  border-radius: 40px;\n  width: 34px;\n  height: 170px;\n  top: 153px;\n  left: 21px;\n  transform: rotate(30deg);\n  -webkit-animation: left-calf-rot 1s infinite linear;\n  animation: left-calf-rot 1s infinite linear;\n  transform-origin: left top;\n}\n\n/* Socks & shoes */\n\n.sock {\n  position: absolute;\n  background: white;\n  border-radius: 10px;\n  width: 100%;\n  height: 140px;\n  top: 40px;\n}\n\n/* darker colored sock on left leg ~ shadow */\n\n.darker {\n  background: #dedede;\n}\n\n/*blue stripe on sock*/\n\n.blue-top {\n  position: absolute;\n  background: #0073b5;\n  width: 100%;\n  height: 30px;\n}\n\n#dark-blue {\n  background: #006aad;\n}\n\n.shoe-base {\n  position: absolute;\n  background: #0073b5;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 10px;\n  width: 215%;\n  height: 22px;\n  top: 115px;\n  left: -8px;\n}\n\n.shoe-lining {\n  position: absolute;\n  width: 100%;\n  height: 25%;\n  background: white;\n  top: 90%;\n}\n\n.toecap {\n  position: absolute;\n  background: #006aad;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 40%;\n  height: 85%;\n  top: 8%;\n  right: 1px;\n}\n\n.heelcap {\n  position: absolute;\n  height: 50%;\n  width: 30%;\n  background: #0073b5;\n  top: -40%;\n}\n\n.shoetongue {\n  position: absolute;\n  height: 90%;\n  width: 30%;\n  background: #0073b5;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  top: -85%;\n  left: 28%;\n}\n\n.lace2, .lace1 {\n  position: absolute;\n  height: 12%;\n  width: 40%;\n  background: white;\n}\n\n.lace1 {\n  left: 25%;\n  top: -35%;\n}\n\n.lace2 {\n  left: 25%;\n  top: -20%;\n}\n\n.pedal {\n  position: absolute;\n  background: #424242;\n  border-radius: 40px;\n  width: 50%;\n  height: 40%;\n  top: 133%;\n  left: 20%;\n  transform-origin: left top;\n  transform: rotate(-5deg);\n}\n\n/* HEAD & NECK */\n\n@-webkit-keyframes movehead {\n  0%, 100% {\n    transform: translate(-4px, 0px);\n  }\n  40% {\n    transform: translate(8px, -3px);\n  }\n}\n\n@keyframes movehead {\n  0%, 100% {\n    transform: translate(-4px, 0px);\n  }\n  40% {\n    transform: translate(8px, -3px);\n  }\n}\n\n@-webkit-keyframes moveneck {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(20deg);\n    -webkit-transform: translate(-4px, 0px) rotate(20deg);\n    -moz-transform: translate(-4px, 0px) rotate(20deg);\n    -ms-transform: translate(-4px, 0px) rotate(20deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(20deg);\n    -webkit-transform: translate(3px, -2px) rotate(20deg);\n    -moz-transform: translate(3px, -2px) rotate(20deg);\n    -ms-transform: translate(3px, -2px) rotate(20deg);\n  }\n  40% {\n    transform: translate(8px, -6px) rotate(20deg);\n    -webkit-transform: translate(8px, -6px) rotate(20deg);\n    -moz-transform: translate(8px, -6px) rotate(20deg);\n    -ms-transform: translate(8px, -6px) rotate(20deg);\n  }\n}\n\n@keyframes moveneck {\n  0%, 100% {\n    transform: translate(-4px, 0px) rotate(20deg);\n    -webkit-transform: translate(-4px, 0px) rotate(20deg);\n    -moz-transform: translate(-4px, 0px) rotate(20deg);\n    -ms-transform: translate(-4px, 0px) rotate(20deg);\n  }\n  20%, 80% {\n    transform: translate(3px, -2px) rotate(20deg);\n    -webkit-transform: translate(3px, -2px) rotate(20deg);\n    -moz-transform: translate(3px, -2px) rotate(20deg);\n    -ms-transform: translate(3px, -2px) rotate(20deg);\n  }\n  40% {\n    transform: translate(8px, -6px) rotate(20deg);\n    -webkit-transform: translate(8px, -6px) rotate(20deg);\n    -moz-transform: translate(8px, -6px) rotate(20deg);\n    -ms-transform: translate(8px, -6px) rotate(20deg);\n  }\n}\n\n.neck {\n  position: absolute;\n  background: #a5422b;\n  border-radius: 20px;\n  width: 26px;\n  height: 40px;\n  left: 280px;\n  top: 50px;\n  z-index: 5;\n  -webkit-animation: moveneck 1s infinite ease-in;\n  animation: moveneck 1s infinite ease-in;\n}\n\n.face {\n  position: absolute;\n  background: #bd5239;\n  width: 95px;\n  height: 100px;\n  border-radius: 50%;\n  left: 266px;\n  top: -35px;\n  z-index: 6;\n  -webkit-animation: movehead 1s infinite ease-in;\n  animation: movehead 1s infinite ease-in;\n}\n\n.r-eye, .l-eye {\n  position: absolute;\n  background: none;\n  width: 20px;\n  height: 15px;\n  border-radius: 50%;\n}\n\n.l-eye {\n  box-shadow: inset 0.5px 3px 0px 0px #390000;\n  left: 42px;\n  top: 39px;\n}\n\n.r-eye {\n  box-shadow: inset 0.3px 3px 0px 0px #390000;\n  left: 74px;\n  top: 40px;\n}\n\n.l-cheek {\n  position: absolute;\n  background: #d36a69;\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  top: 52px;\n  left: 21px;\n}\n\n.mouth {\n  position: absolute;\n  width: 20px;\n  height: 8%;\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n  border: 2px solid #e299a4;\n  background: white;\n  top: 65px;\n  left: 56px;\n}\n\n.nose {\n  position: absolute;\n  background: #a5422b;\n  width: 10px;\n  height: 6px;\n  border-radius: 20px;\n  top: 53px;\n  left: 64px;\n}\n\n.ear {\n  position: absolute;\n  background: #bd5239;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  top: 39px;\n  left: -4px;\n}\n\n.r-hair {\n  position: absolute;\n  background: #390000;\n  width: 40px;\n  height: 30px;\n  border-top-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n  left: 50px;\n}\n\n.l-hair {\n  position: absolute;\n  background: #390000;\n  width: 40px;\n  height: 58px;\n  border-top-left-radius: 50px;\n  border-bottom-right-radius: 40px;\n  transform: rotate(20deg);\n  left: 10px;\n  top: -7px;\n}\n\n@-webkit-keyframes rotate-ponytail {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  20% {\n    transform: rotate(15deg);\n  }\n  90% {\n    transform: rotate(-5deg);\n  }\n}\n\n@keyframes rotate-ponytail {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  20% {\n    transform: rotate(15deg);\n  }\n  90% {\n    transform: rotate(-5deg);\n  }\n}\n\n.ponytail {\n  position: absolute;\n  background: #390000;\n  border-top-left-radius: 50px;\n  border-bottom-right-radius: 50px;\n  width: 150px;\n  height: 40px;\n  left: 140px;\n  top: 1px;\n  z-index: 2;\n  transform-origin: right top;\n  transform: rotate(-8deg);\n  -webkit-animation: rotate-ponytail 1s infinite linear;\n  animation: rotate-ponytail 1s infinite linear;\n}\n\n.neck-shadow {\n  position: absolute;\n  background: #8a3828;\n  opacity: 0.75;\n  border-radius: 40px;\n  width: 8px;\n  height: 87%;\n}\n\n.jaw-shadow {\n  position: absolute;\n  background: none;\n  box-shadow: 5px 5px 0px 0px #9c4231;\n  border-radius: 50%;\n  width: 10px;\n  height: 40px;\n  top: 57px;\n  left: 16px;\n  transform: rotate(-212deg);\n}\n\n.ear-shadow {\n  position: absolute;\n  background: none;\n  box-shadow: -3px 0px 0px 0px #9c4231;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n\n/* Wind */\n\n@-webkit-keyframes movewind1 {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  60% {\n    transform: translate(-600px, 200px);\n  }\n  100% {\n    transform: translate(-2000px, 100px);\n  }\n}\n\n@keyframes movewind1 {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  60% {\n    transform: translate(-600px, 200px);\n  }\n  100% {\n    transform: translate(-2000px, 100px);\n  }\n}\n\n@-webkit-keyframes movewind2 {\n  0% {\n    transform: translate(-10px, 0px);\n  }\n  100% {\n    transform: translate(-2000px, 0px);\n  }\n}\n\n@keyframes movewind2 {\n  0% {\n    transform: translate(-10px, 0px);\n  }\n  100% {\n    transform: translate(-2000px, 0px);\n  }\n}\n\n@-webkit-keyframes movewind3 {\n  0% {\n    transform: translate(-10px, 0px);\n  }\n  50% {\n    transform: translate(-500px, -50px);\n  }\n  100% {\n    transform: translate(-2000px, 0px);\n  }\n}\n\n@keyframes movewind3 {\n  0% {\n    transform: translate(-10px, 0px);\n  }\n  50% {\n    transform: translate(-500px, -50px);\n  }\n  100% {\n    transform: translate(-2000px, 0px);\n  }\n}\n\n.w3, .w2, .w1 {\n  position: absolute;\n  background: white;\n  opacity: 0.5;\n  width: 200px;\n  height: 4px;\n  right: 10px;\n}\n\n.w1 {\n  top: 50px;\n  -webkit-animation: movewind1 1s infinite linear;\n  animation: movewind1 1s infinite linear;\n}\n\n.w2 {\n  top: 400px;\n  -webkit-animation: movewind2 1.8s infinite linear;\n  animation: movewind2 1.8s infinite linear;\n  z-index: 7;\n}\n\n.w3 {\n  top: 600px;\n  -webkit-animation: movewind3 1.2s infinite linear;\n  animation: movewind3 1.2s infinite linear;\n  z-index: 7;\n}\n\n.button-set {\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n}\n\n.button-item {\n  display: flex;\n  justify-content: center;\n}\n\n.responsive {\n  width: 100%;\n  height: auto;\n}\n\n#sinhala-akuru {\n  margin: auto;\n  width: 200px;\n  height: 100px;\n  color: white;\n  -webkit-animation: mymove 8s infinite;\n          animation: mymove 8s infinite;\n}\n\n#english-akuru {\n  margin: auto;\n  width: 200px;\n  height: 100px;\n  color: white;\n  -webkit-animation: mymove 8s infinite;\n          animation: mymove 8s infinite;\n}\n\n#numbers {\n  margin: auto;\n  width: 200px;\n  height: 100px;\n  color: white;\n  -webkit-animation: mymove 8s infinite;\n          animation: mymove 8s infinite;\n}\n\n#kids-games {\n  margin: auto;\n  width: 200px;\n  height: 100px;\n  color: white;\n  -webkit-animation: mymove 8s infinite;\n          animation: mymove 8s infinite;\n}\n\n@-webkit-keyframes mymove {\n  60% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes mymove {\n  60% {\n    transform: rotate(360deg);\n  }\n}\n\n.button-solid {\n  --background: #0c1631c4 !important;\n  --color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGOztBQUtBO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUhGOztBQWNBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBWEY7O0FBYUE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQVZGOztBQVlBO0VBQ0U7SUFBTyxvQ0FBQTtFQVJQO0VBU0E7SUFBTyx3Q0FBQTtFQU5QO0VBT0E7SUFBTyw2Q0FBQTtFQUpQO0VBS0E7SUFBTywwQ0FBQTtFQUZQO0VBR0E7SUFBTyx1Q0FBQTtFQUFQO0VBQ0E7SUFBTyxvQ0FBQTtFQUVQO0VBREE7SUFBTyxvQ0FBQTtFQUlQO0FBQ0Y7O0FBWkE7RUFDRTtJQUFPLG9DQUFBO0VBUlA7RUFTQTtJQUFPLHdDQUFBO0VBTlA7RUFPQTtJQUFPLDZDQUFBO0VBSlA7RUFLQTtJQUFPLDBDQUFBO0VBRlA7RUFHQTtJQUFPLHVDQUFBO0VBQVA7RUFDQTtJQUFPLG9DQUFBO0VBRVA7RUFEQTtJQUFPLG9DQUFBO0VBSVA7QUFDRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7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QUFBO0FBMmdERjs7QUF4Z0RBO0VBQ0U7SUFBSyx5QkFBQTtFQTRnREw7QUFDRjs7QUE5Z0RBO0VBQ0U7SUFBSyx5QkFBQTtFQTRnREw7QUFDRjs7QUExZ0RBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtBQTRnREYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluLXZpZXd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2hvbWUwMS5qcGcnKTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNzaW5oYWxhLWxldHRlcnMge1xuICAvL2hlaWdodDogMjByZW07XG4gIC8vd2lkdGg6IDIwcmVtO1xuICAvLy0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uL2Fzc2V0cy9zaW5oYWxhLWFrdXJ1LnBuZycpO1xuICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgLy9iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYm94IHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjQ0MzM2O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmJvdW5jZS0zIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZS0zO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xufVxuQGtleWZyYW1lcyBib3VuY2UtMyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHNjYWxlKDEsMSkgICAgICB0cmFuc2xhdGVZKDApOyB9XG4gIDEwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSwuOSkgICB0cmFuc2xhdGVZKDApOyB9XG4gIDMwJSAgeyB0cmFuc2Zvcm06IHNjYWxlKC45LDEuMSkgICB0cmFuc2xhdGVZKC0xMDBweCk7IH1cbiAgNTAlICB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSwuOTUpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTclICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoLTdweCk7IH1cbiAgNjQlICB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSwxKSAgICAgIHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLmNoayB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmNoazo6YmVmb3JlIHtcbiAgLS1pY28tY2hlY2s6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj48cGF0aCBkPVwiTTE0IDIuNWwtOC41IDguNS0zLjUtMy41LTEuNSAxLjUgNSA1IDEwLTEwelwiIGZpbGw9XCJ3aGl0ZVwiPjwvcGF0aD48L3N2Zz4nKTtcbiAgYmFja2dyb3VuZDogc2lsdmVyIHZhcigtLWljby1jaGVjaykgY2VudGVyIGNlbnRlci83MCUgbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwLjI1cmVtO1xuICB3aWR0aDogMS4yNXJlbTtcbn1cbi5oaWRkZW4ge1xuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgY2xpcC1wYXRoOiBpbnNldCgxcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDFweDtcbn1cbi5jaXJjbGUge1xuICAvLy0tYmdjOiBjb3JuZmxvd2VyYmx1ZTtcbiAgLS13OiAxNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IHZhcigtLXcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2lkdGg6IHZhcigtLXcpO1xufVxuLmEtcHVsc2Uge1xuICAtLWFuaW1kdXI6IDEuNXM7XG4gIC0tYW5pbW46IHB1bHNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmEtc2xpZGUge1xuICAtLWFuaW1kdXI6IDNzO1xuICAtLWFuaW1uOiBzbGlkZTtcbn1cbltkYXRhLWFuaW1hdGlvbl0ge1xuICBhbmltYXRpb246IHZhcigtLWFuaW1uLCBub25lKSB2YXIoLS1hbmltZHVyLCAwcykgdmFyKC0tYW5pbXRmLCBsaW5lYXIpIHZhcigtLWFuaW1kZWwsIDBzKSB2YXIoLS1hbmltaWMsIGluZmluaXRlKSB2YXIoLS1hbmltZGlyLCBhbHRlcm5hdGUpIHZhcigtLWFuaW1mbSwgbm9uZSkgdmFyKC0tYW5pbXBzLCBydW5uaW5nKTtcbn1cblxuLyogUkVEVUNFRCBNT1RJT04gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xuICBbZGF0YS1hbmltYXRpb249XCJhbHRlcm5hdGVcIl0ge1xuICAgIC0tYW5pbWR1cjogNHM7XG4gICAgLS1hbmltbjogb3BhY2l0eTtcbiAgfVxuICBbZGF0YS1hbmltYXRpb249XCJzbG93XCJdIHtcbiAgICAtLWFuaW1kdXI6IDEwcztcbiAgfVxuICBbZGF0YS1hbmltYXRpb249XCJzdG9wXCJdIHtcbiAgICAtLWFuaW1wczogcGF1c2VkO1xuICB9XG59XG5cbi8qIFNJTVVMQVRFIFJFRFVDRUQgTU9USU9OIFcvIENIRUNLQk9YICovXG5bZGF0YS1yZWR1Y2VkLW1vdGlvbl06Y2hlY2tlZCB+IFtkYXRhLWFuaW1hdGlvbj1cImFsdGVybmF0ZVwiXSB7XG4gIC0tYW5pbWR1cjogNHM7XG4gIC0tYW5pbW46IG9wYWNpdHk7XG59XG5bZGF0YS1yZWR1Y2VkLW1vdGlvbl06Y2hlY2tlZCB+IFtkYXRhLWFuaW1hdGlvbj1cIm9uY2VcIl0ge1xuICAtLWFuaW1pYzogMTtcbn1cbltkYXRhLXJlZHVjZWQtbW90aW9uXTpjaGVja2VkIH4gW2RhdGEtYW5pbWF0aW9uPVwic2xvd1wiXSB7XG4gIC0tYW5pbWR1cjogMTBzO1xufVxuW2RhdGEtcmVkdWNlZC1tb3Rpb25dOmNoZWNrZWQgfiBbZGF0YS1hbmltYXRpb249XCJzdG9wXCJdIHtcbiAgLS1hbmltcHM6IHBhdXNlZDtcbn1cblxuW2RhdGEtcmVkdWNlZC1tb3Rpb25dOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbn1cblxuLyogS0VZRlJBTUVTICovXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZSB7XG4gIGZyb20geyBtYXJnaW4tbGVmdDogMCU7IH1cbiAgdG8geyBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gdmFyKC0tdywgMTUwcHgpKTsgfVxufVxuXG4jY3ljbGUtcmlkZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy4uLy4uL2Fzc2V0cy9yaWRlLnBuZycpO1xufVxuXG5cbiRiZy1jb2xvcjogI2ZmZDQxYztcblxuLy8gQmlrZSBjb2xvciB2YXJpYWJsZXNcbiRidHduLXNwb2tlOiBub25lO1xuJHRpcmU6ICM0MjQyNDI7XG4kd2hlZWwtbGluaW5nOiAjRkZGO1xuJHNwb2tlOiBncmV5O1xuJGJpa2UtZnJhbWU6ICNlZDlhMTg7XG4kc2VhdDogIzQyNDI0MjtcbiRoYW5kbGViYXItYm90dG9tOiNkNmQ2ZDY7XG4kaGFuZGxlYmFyLXRpcDojMDA3M2I1O1xuJGhhbmRsZWJhci1taWRkbGU6ICRzZWF0O1xuXG4vLyBHaXJsIGNvbG9yIHZhcmlhYmxlc1xuJHBlbHZpYzogIzAwNzNiNTtcbiRiZWxseTogI2ZmYmQyOTtcbiRjaGVzdDogI2ZmYmQyOTtcbiRiYWNrLXNoYWRvdzogI2VjYjYzNDtcbi8vTGVnXG4kbGVnOiAjYmQ1MjM5O1xuJGwtbGVnOiAjOWM0MjMxO1xuJHRoaWdoOiAjYmQ1MjM5O1xuJHItcGFudHM6ICMwMDczYjU7XG4kbC1wYW50czogIzA2NmRhMjtcbiRzaGFkb3c6ICM4YTM4Mjg7IC8vRm9yIGJvdGggYXJtcyAmIGxlZ3Ncbi8vQXJtXG4kYXJtLXNsZWV2ZTogI2VkOWExODtcbiRyLWFybTogI2JkNTIzOTtcbiRsLWFybTogIzljNDIzMTtcbi8vIEhlYWQgJiBuZWNrXG4kZmFjZTogI2JkNTIzOTtcbiRleWVzOiAjMzkwMDAwO1xuJGNoZWVrOiAjZDM2YTY5O1xuJG5vc2U6ICNhNTQyMmI7XG4kaGFpcjogIzM5MDAwMDtcbiRuZWNrLXNoYWRvdzogIzhhMzgyODtcbiRmYWNlLXNoYWRvdzogIzljNDIzMTtcbiRuZWNrOiAjYTU0MjJiO1xuLy9Tb2NrIGFuZCBzaG9lIHZhcmlhYmxlc1xuJHNvY2s6IHdoaXRlO1xuJGJsdWUtdG9wOiAjMDA3M2I1O1xuJGwtYmx1ZS10b3A6ICMwMDZhYWQ7XG4kc2hvZS1iYXNlOiAjMDA3M2I1O1xuJHNob2UtbGluaW5nOiB3aGl0ZTtcbiR0aXA6ICMwMDZhYWQ7XG4kbGFjZTogd2hpdGU7XG5cbi8qIEdlbmVyaWMgdHJhbnNmb3JtICovXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtcztcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtcztcbiAgLW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtcztcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn1cbi8qIFJvdGF0aW9uICovXG5AbWl4aW4gcm90YXRlKCRkZWcpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKHJvdGF0ZSgjeyRkZWd9ZGVnKSk7XG59XG5cbi8qIFRyYW5zbGF0aW9uICovXG5AbWl4aW4gdHJhbnNsYXRlKCR4LCAkeSkge1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlKCgjeyR4fXB4KSwgKCN7JHl9cHgpKSk7XG59XG5cbi8qIEdlbmVyaWMgYW5pbWF0aW9uICovXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAjeyRzdHJ9O1xuICAtbW96LWFuaW1hdGlvbjogI3skc3RyfTtcbiAgLW1zLWFuaW1hdGlvbjogI3skc3RyfTtcbiAgLW8tYW5pbWF0aW9uOiAjeyRzdHJ9O1xuICBhbmltYXRpb246ICN7JHN0cn07XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAkYmctY29sb3I7XG59XG5cbi5ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB3aWR0aDogODkwcHg7XG4gIGhlaWdodDogNTg4cHg7XG4gIGJvcmRlcjogc29saWQgNHB4IG5vbmU7XG59XG5cbi5iaWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG59XG4vKiBXaGVlbHMgKi9cbiV3aGVlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDokYnR3bi1zcG9rZTtcbiAgYm9yZGVyOiAxMnB4IHNvbGlkICR0aXJlO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCA1cHggJHdoZWVsLWxpbmluZztcbiAgdG9wOiAzNTBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLyogQmFjayB3aGVlbCAqL1xuLmJhY2std2hlZWwge1xuICBAZXh0ZW5kICV3aGVlbDtcbiAgbGVmdDogMjBweDtcbn1cblxuLyogRnJvbnQgd2hlZWwqL1xuLmZyb250LXdoZWVsIHtcbiAgQGV4dGVuZCAld2hlZWw7XG4gIGxlZnQ6IDQ0MHB4O1xufVxuXG4vKlJPVEFUSU9OIEFOSU1BVElPTiBmb3IgQ0FTU0VUVEUgJiBTUE9LRVMgfiBDVyovXG5AaW5jbHVkZSBrZXlmcmFtZXMocm90YXRpb24pIHtcbiAgZnJvbSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKC0zNTkpO1xuICB9XG4gIHRvIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoMCk7XG4gIH1cbn1cblxuLyogQ2Fzc2V0dGUgZm9yIGJvdGggZnJvbnQgYW5kIGJhY2sgd2hlZWwgKi9cbi5jYXNzZXR0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogODhweDtcbiAgbGVmdDogODZweDtcbiAgei1pbmRleDogMjtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdyb3RhdGlvbiAxcyBpbmZpbml0ZSBsaW5lYXInKVxufVxuXG4vKiBTcG9rZXMgKi9cbiVzcG9rZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRzcG9rZTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgdG9wOiAtODdweDtcbiAgbGVmdDogOXB4O1xuICB6LWluZGV4OjE7XG59XG5cbi8qIDM2MGRlZy8xMiBocnMgPSAzMGRlZyBiZXR3ZWVuIGVhY2ggaG91ciBudW1iZXIgY2hhbmdlICovXG4uXzEyLTYge1xuICBAZXh0ZW5kICVzcG9rZXM7XG59XG5cbi5fMS03IHtcbiAgQGV4dGVuZCAlc3Bva2VzO1xuICBAaW5jbHVkZSByb3RhdGUoMzApO1xufVxuXG4uXzItOCB7XG4gIEBleHRlbmQgJXNwb2tlcztcbiAgQGluY2x1ZGUgcm90YXRlKDYwKTtcbn1cblxuLl8zLTkge1xuICBAZXh0ZW5kICVzcG9rZXM7XG4gIEBpbmNsdWRlIHJvdGF0ZSg5MCk7XG59XG5cbi5fNC0xMCB7XG4gIEBleHRlbmQgJXNwb2tlcztcbiAgQGluY2x1ZGUgcm90YXRlKDEyMCk7XG59XG5cbi5fNS0xMSB7XG4gIEBleHRlbmQgJXNwb2tlcztcbiAgQGluY2x1ZGUgcm90YXRlKDE1MCk7XG59XG5cbi8qQmlrZSBCb2R5IEZyYW1lIH42IHBhcnRzICovXG4lZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRiaWtlLWZyYW1lO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHotaW5kZXg6IDM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5iay1sb3dlciB7XG4gIHRvcDogNDY1cHg7XG4gIGxlZnQ6IDEyNXB4O1xuICBAaW5jbHVkZSByb3RhdGUoMyk7XG4gIEBleHRlbmQgJWZyYW1lO1xuICB3aWR0aDogMTg1cHg7XG59XG5cbi5iay11cHBlciB7XG4gIEBleHRlbmQgJWZyYW1lO1xuICBAaW5jbHVkZSByb3RhdGUoLTUwKTtcbiAgd2lkdGg6IDIwMHB4O1xuICB0b3A6IDM4NXB4O1xuICBsZWZ0OiA5MHB4O1xuXG59XG5cbi5mci1sb3dlciB7XG4gIEBleHRlbmQgJWZyYW1lO1xuICB3aWR0aDogMjYwcHg7XG4gIEBpbmNsdWRlIHJvdGF0ZSgtNDApO1xuICB0b3A6IDM5MHB4O1xuICBsZWZ0OiAyNzJweDtcbn1cblxuLmZyLXVwcGVyIHtcbiAgQGV4dGVuZCAlZnJhbWU7XG4gIHdpZHRoOiAyNTBweDtcbiAgdG9wOiAyOTVweDtcbiAgbGVmdDogMjQ0cHg7XG4gIEBpbmNsdWRlIHJvdGF0ZSgtMTApO1xufVxuXG4uc2VhdC1mcmFtZSB7XG4gIEBleHRlbmQgJWZyYW1lO1xuICB3aWR0aDogMjM1cHg7XG4gIHRvcDogMzY1cHg7XG4gIGxlZnQ6IDE0OHB4O1xuICBAaW5jbHVkZSByb3RhdGUoLTExMSk7XG5cbn1cblxuLmhhbmRsZWJhci1mcmFtZSB7XG4gIEBleHRlbmQgJWZyYW1lO1xuICB3aWR0aDogMjcwcHg7XG4gIHRvcDogMzQwcHg7XG4gIGxlZnQ6IDM3NXB4O1xuICBAaW5jbHVkZSByb3RhdGUoLTExMCk7XG59XG5cbi8qc2VhdHBvc3QgfiB0aXBwZWQgd2hpdGUgKi9cbi5zZWF0cG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTRweDtcbiAgYmFja2dyb3VuZDogJGhhbmRsZWJhci1ib3R0b207XG4gIHotaW5kZXg6IDU7XG4gIGxlZnQ6IDE5MHB4O1xufVxuXG4vKiBTZWF0ICovXG4uc2VhdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJHNlYXQ7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHRvcDogMjQ1cHg7XG4gIGxlZnQ6IDE4NXB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4vKiBIRUFEU0VUIGFuZCBIQU5ETEVCQVIgc2VjdGlvbiwgaW4gb3JkZXIgZnJvbSBib3R0b20gdG8gdG9wKi9cbi5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuLmhlYWRzZXQge1xuICBiYWNrZ3JvdW5kOiAkaGFuZGxlYmFyLWJvdHRvbTtcbiAgaGVpZ2h0OiA2NXB4O1xuICB0b3A6IDIxM3B4O1xuICBsZWZ0OiA0NjZweDtcbiAgQGluY2x1ZGUgcm90YXRlKC0yMCk7XG59XG5cbi5zdGVtIHtcbiAgYmFja2dyb3VuZDogJGhhbmRsZWJhci1taWRkbGU7XG4gIGhlaWdodDogMzVweDtcbiAgdG9wOiAxOTBweDtcbiAgbGVmdDogNDYwcHg7XG4gIEBpbmNsdWRlIHJvdGF0ZSgyNSk7XG59XG5cbi5oYjEge1xuICBiYWNrZ3JvdW5kOiAkaGFuZGxlYmFyLW1pZGRsZTtcbiAgaGVpZ2h0OiA3NXB4O1xuICB0b3A6IDE2MHB4O1xuICBsZWZ0OiA0MzVweDtcbiAgQGluY2x1ZGUgcm90YXRlKDkwKTtcbn1cblxuLmhiMiB7XG4gIGJhY2tncm91bmQ6ICRoYW5kbGViYXItdGlwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRvcDogMTcyLjc1cHg7XG4gIGxlZnQ6IDQxNXB4O1xuICBAaW5jbHVkZSByb3RhdGUoOTApO1xufVxuXG5cbi8qIENyYW5rc2V0ICYgY3JhbmsgKi9cbi5jcmFua3NldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA1cHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsZWZ0OiAyNzVweDtcbiAgdG9wOiA0NDVweDtcbiAgei1pbmRleDogNTtcbn1cblxuLypST1RBVElPTiBBTklNQVRJT04gZm9yIENSQU5LIH4gQ1cqL1xuQGluY2x1ZGUga2V5ZnJhbWVzKGNyYW5rLXJvdCkge1xuICBmcm9tIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoLTM1OSk7XG4gIH1cbiAgdG8ge1xuICAgIEBpbmNsdWRlIHJvdGF0ZSgwKTtcbiAgfVxufVxuXG4uY3Jhbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbGVmdDogMzA1cHg7XG4gIHRvcDogNDI1cHg7XG4gIHotaW5kZXg6IDU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICBAaW5jbHVkZSByb3RhdGUoMjUpO1xuICBAaW5jbHVkZSBhbmltYXRpb24oJ2NyYW5rLXJvdCAxcyBpbmZpbml0ZSBsaW5lYXInKTtcbn1cblxuXG4vKiBIdWIgKi9cbi5odWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNkNmQ2ZDY7IC8qIGdyZXktdGluZ2VkIHdoaXRlICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiA0NTJweDtcbiAgbGVmdDogMTIwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi8qQ2hhaW5zKi9cbiVjaGFpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzM1MzUzNTtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgei1pbmRleDogNDtcbn1cbi5jaGFpbi11cHAge1xuICB0b3A6IDQ0OHB4O1xuICBsZWZ0OiAxMzBweDtcbiAgei1pbmRleDogNDtcbiAgQGV4dGVuZCAlY2hhaW47XG4gIEBpbmNsdWRlIHJvdGF0ZSgtMSk7XG59XG5cbi5jaGFpbi1sb3tcbiAgdG9wOiA0ODZweDtcbiAgbGVmdDogMTI1cHg7XG4gIHotaW5kZXg6IDQ7XG4gIEBleHRlbmQgJWNoYWluO1xuICBAaW5jbHVkZSByb3RhdGUoNyk7XG59XG5cbi8qIEJpa2UgU2hhZG93ICovXG4uYmlrZS1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmNWNjMWI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB0b3A6IDU1NXB4O1xuICBsZWZ0OiAtNjBweDtcbiAgei1pbmRleDogMTtcblxufVxuXG4vKiBTdHJlYWtzIG9mIGxpZ2h0IG9uIHRoZSBncm91bmQgKi9cbiVncm91bmQtc3RyZWFre1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG5AaW5jbHVkZSBrZXlmcmFtZXMobW92ZVN0cmVhaykge1xuICBmcm9tIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTMyMCwgMCk7XG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTgwMCwgMCk7XG4gICAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwMHB4KTtcbiAgfVxufVxuXG4uc3RyZWFrMSB7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6NTAwcHggO1xuICBsZWZ0OiAyMDBweDtcbiAgQGV4dGVuZCAlZ3JvdW5kLXN0cmVhaztcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdtb3ZlU3RyZWFrIDAuNTVzIGluZmluaXRlIGVhc2UtaW4nKTtcbn1cblxuLnN0cmVhazIge1xuICB3aWR0aDogODBweDtcbiAgdG9wOjUyMHB4IDtcbiAgbGVmdDogMzAwcHg7XG4gIEBleHRlbmQgJWdyb3VuZC1zdHJlYWs7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbignbW92ZVN0cmVhayAwLjhzIGluZmluaXRlIGVhc2UtaW4nKTtcbn1cblxuLnN0cmVhazMge1xuICB3aWR0aDogMzBweDtcbiAgdG9wOjUwMHB4IDtcbiAgbGVmdDogMzgwcHg7XG4gIEBleHRlbmQgJWdyb3VuZC1zdHJlYWs7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbignbW92ZVN0cmVhayAwLjQ1cyBpbmZpbml0ZSBlYXNlLWluJyk7XG59XG5cbi5zdHJlYWs0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICB0b3A6NTMwcHggO1xuICBsZWZ0OiAyODBweDtcbiAgQGV4dGVuZCAlZ3JvdW5kLXN0cmVhaztcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdtb3ZlU3RyZWFrIDAuM3MgaW5maW5pdGUgZWFzZS1pbicpO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLSBTVEFSVCBPRiBTVFlMSU5HIEZPUiBHSVJMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vL3otaW5kZXggZXF1YWwgdG8gb3IgaGlnaGVyIHRoYW4gNVxuXG4uZ2lybCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLypUT1JTTyAqL1xuLmNoZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkY2hlc3Q7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGxlZnQ6IDIzNXB4O1xuICB0b3A6IDc1cHg7XG4gIHotaW5kZXg6IDQ7XG4gIEBpbmNsdWRlIHJvdGF0ZSgyMCk7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbignbW92ZWNoZXN0IDFzIGluZmluaXRlIGxpbmVhcicpO1xuICBib3gtc2hhZG93OiBpbnNldCA0cHggNXB4IDBweCAwcHggJGJhY2stc2hhZG93O1xuXG59XG5cbkBpbmNsdWRlIGtleWZyYW1lcyhtb3ZlY2hlc3QpIHtcbiAgMCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtNCwwKTtcbiAgfVxuICAyMCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgzLC0yKTtcbiAgfVxuICA0MCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSg4LC02KTtcbiAgfVxuICA4MCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgzLC0yKTtcbiAgfVxuICAxMDAlIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTQsMCk7XG4gIH1cbn1cblxuXG5AaW5jbHVkZSBrZXlmcmFtZXMobW92ZWJlbGx5KSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LDBweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwwcHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoMjBkZWcpO1xuICB9XG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsLTJweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwtMnB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LC0ycHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwtMnB4KSByb3RhdGUoMjBkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC02cHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsLTZweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwtNnB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsLTZweCkgcm90YXRlKDIwZGVnKTtcbiAgfVxufVxuXG4uYmVsbHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRjaGVzdDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGVmdDogMjIwcHg7XG4gIHRvcDogMTMzcHg7XG4gIHotaW5kZXg6IDU7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbignbW92ZWJlbGx5IDFzIGluZmluaXRlIGxpbmVhcicpO1xuXG59XG5cbi5iYWNrLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGJhY2stc2hhZG93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi8qIFJpZ2h0IEFybSAqL1xuLnItYXJtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkci1hcm07XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDIxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBsZWZ0OiA4OXB4O1xuICB0b3A6IC0zMnB4O1xuICBAaW5jbHVkZSByb3RhdGUoLTYwKTtcblxufVxuXG4uci1zbGVldmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRhcm0tc2xlZXZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNTVweDtcbiAgbGVmdDotOHB4O1xuXG59XG5cbi5yLWEtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkc2hhZG93O1xuICBoZWlnaHQ6IDUlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAyNiU7XG59XG5cbi8qIExFRlQgQVJNICovXG5AaW5jbHVkZSBrZXlmcmFtZXMobW92ZWxlZnRhcm0pIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoLTU1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoLTU1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoLTU1ZGVnKTtcbiAgfVxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LC0ycHgpIHJvdGF0ZSgtNTVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LC0ycHgpIHJvdGF0ZSgtNTVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LC0ycHgpIHJvdGF0ZSgtNTVkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC0xcHgpIHJvdGF0ZSgtNTVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC0xcHgpIHJvdGF0ZSgtNTVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC0xcHgpIHJvdGF0ZSgtNTVkZWcpO1xuICB9XG59XG5cbi5sLWFybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGwtYXJtO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbGVmdDogMzYwcHg7XG4gIHRvcDogNTFweDtcbiAgei1pbmRleDogMTtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdtb3ZlbGVmdGFybSAxcyBpbmZpbml0ZSBsaW5lYXInKTtcblxufVxuXG5cbi5sLXNsZWV2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGFybS1zbGVldmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuXG59XG5cbi5sLWEtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkc2hhZG93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1JTtcbiAgdG9wOiAyNSU7XG59XG5cbi5wZWx2aWMtcmVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkcGVsdmljO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0b3A6IDE4NXB4O1xuICBsZWZ0OiAxODVweDtcbiAgei1pbmRleDogNDtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdtb3ZlY2hlc3QgMXMgaW5maW5pdGUgbGluZWFyJyk7XG5cbn1cblxuLyogUklHSFQgTEVHICovXG5cbi8qUk9UQVRJT04gQU5JTUFUSU9OIGZvciBSaWdodCBUSElHSH4gQ1cqL1xuQGluY2x1ZGUga2V5ZnJhbWVzKHRoaWdoLXJvdCkge1xuICAwJSwgMTAwJSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKC03OCk7XG4gIH1cbiAgNTAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoLTM1KTtcbiAgfVxufVxuXG5cbi5yLXRoaWdoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkdGhpZ2g7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgdG9wOiAyMzBweDtcbiAgbGVmdDogMTk0cHg7XG4gIEBpbmNsdWRlIHJvdGF0ZSgtNzUpO1xuICB6LWluZGV4OiA2O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCd0aGlnaC1yb3QgMXMgaW5maW5pdGUgbGluZWFyJyk7XG5cbn1cblxuXG4uci1wYW50cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJHItcGFudHM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5yLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJHNoYWRvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNyU7XG4gIHRvcDogNjUlO1xufVxuXG4vKlJPVEFUSU9OIEFOSU1BVElPTiBmb3IgUmlnaHQgQ0FMRiB+IENXKi9cbkBpbmNsdWRlIGtleWZyYW1lcyhyaWdodC1jYWxmLXJvdCkge1xuICAwJSwgMTAwJSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKDgwKTtcbiAgfVxuICAyMCUge1xuICAgIEBpbmNsdWRlIHJvdGF0ZSg2MCk7XG4gIH1cbiAgNDAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoNTApO1xuICB9XG4gIDgwJSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKDExMCk7XG4gIH1cbiAgOTAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoMTAwKTtcbiAgfVxuICA5NSUge1xuICAgIEBpbmNsdWRlIHJvdGF0ZSg5MCk7XG4gIH1cbn1cblxuXG4uci1jYWxmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkbGVnO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgLy90b3AgaXMgaW4gdGhlIGxlZnQgZGlyZWN0aW9uXG4gIHRvcDogMTU3LjVweDtcbiAgLy9sZWZ0IGlzIGluIHRoZSB1cCBkaXJlY3Rpb25cbiAgbGVmdDogMjFweDtcbiAgQGluY2x1ZGUgcm90YXRlKDk1KTtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdyaWdodC1jYWxmLXJvdCAxcyBpbmZpbml0ZSBsaW5lYXInKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG5cbi8qIExFRlQgTEVHICovXG4vKlJPVEFUSU9OIEFOSU1BVElPTiBmb3IgTEVGVCBUSElHSH4gQ1cqL1xuQGluY2x1ZGUga2V5ZnJhbWVzKGxlZnQtdGhpZ2gtcm90KSB7XG4gIDAlLCAxMDAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoLTI1KTtcbiAgfVxuICA1MCUge1xuICAgIEBpbmNsdWRlIHJvdGF0ZSgtNzApO1xuICB9XG59XG5cblxuLmwtdGhpZ2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRsLWxlZztcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMTg1cHg7XG4gIHRvcDogMjE4cHg7XG4gIGxlZnQ6IDIxNXB4O1xuICBAaW5jbHVkZSByb3RhdGUoLTIyKTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbignbGVmdC10aGlnaC1yb3QgMXMgaW5maW5pdGUgbGluZWFyJyk7XG5cbn1cblxuLmwtcGFudHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRsLXBhbnRzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogMTI0cHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4ubC1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRzaGFkb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDclO1xuICB0b3A6IDY1JTtcbn1cblxuLypST1RBVElPTiBBTklNQVRJT04gZm9yIExlZnQgQ0FMRiB+IENXKi9cbkBpbmNsdWRlIGtleWZyYW1lcyhsZWZ0LWNhbGYtcm90KSB7XG4gIDAlLCAxMDAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoNDUpO1xuICB9XG4gIDM4JSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKDExMCk7XG4gIH1cbiAgNzAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoNTUpO1xuICB9XG59XG5cblxuLmwtY2FsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGwtbGVnO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgdG9wOiAxNTNweDsgLy8gdG8gdGhlIGxlZnRcbiAgbGVmdDogMjFweDtcbiAgQGluY2x1ZGUgcm90YXRlKDMwKTtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdsZWZ0LWNhbGYtcm90IDFzIGluZmluaXRlIGxpbmVhcicpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbn1cblxuLyogU29ja3MgJiBzaG9lcyAqL1xuLnNvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRzb2NrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgdG9wOiA0MHB4O1xufVxuXG4vKiBkYXJrZXIgY29sb3JlZCBzb2NrIG9uIGxlZnQgbGVnIH4gc2hhZG93ICovXG4uZGFya2VyIHtcbiAgYmFja2dyb3VuZDogI2RlZGVkZTtcbn1cblxuLypibHVlIHN0cmlwZSBvbiBzb2NrKi9cbi5ibHVlLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGJsdWUtdG9wO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jZGFyay1ibHVlIHtcbiAgYmFja2dyb3VuZDogJGwtYmx1ZS10b3A7XG59XG5cbi5zaG9lLWJhc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRzaG9lLWJhc2U7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDIxNSU7XG4gIGhlaWdodDogMjJweDtcbiAgdG9wOiAxMTVweDtcbiAgbGVmdDogLThweDtcbn1cblxuLnNob2UtbGluaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQ6ICRzaG9lLWxpbmluZztcbiAgdG9wOiA5MCU7XG59XG5cbi50b2VjYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICR0aXA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDg1JTtcbiAgdG9wOiA4JTtcbiAgcmlnaHQ6IDFweDtcbn1cblxuLmhlZWxjYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kOiAkc2hvZS1iYXNlO1xuICB0b3A6IC00MCU7XG59XG5cbi5zaG9ldG9uZ3VlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZDogJHNob2UtYmFzZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHRvcDogLTg1JTtcbiAgbGVmdDogMjglO1xufVxuXG4lbGFjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMiU7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQ6ICRsYWNlO1xufVxuXG4ubGFjZTEge1xuICBAZXh0ZW5kICVsYWNlO1xuICBsZWZ0OiAyNSU7XG4gIHRvcDogLTM1JTtcbn1cblxuLmxhY2UyIHtcbiAgQGV4dGVuZCAlbGFjZTtcbiAgbGVmdDogMjUlO1xuICB0b3A6IC0yMCU7XG59XG5cbi5wZWRhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJHNlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDAlO1xuICB0b3A6IDEzMyU7XG4gIGxlZnQ6IDIwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gIEBpbmNsdWRlIHJvdGF0ZSgtNSk7XG5cbn1cblxuLyogSEVBRCAmIE5FQ0sgKi9cbkBpbmNsdWRlIGtleWZyYW1lcyhtb3ZlaGVhZCkge1xuICAwJSwgMTAwJSB7XG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC00LDApO1xuICB9XG4gIDQwJSB7XG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKDgsLTMpO1xuICB9XG59XG5cbkBpbmNsdWRlIGtleWZyYW1lcyhtb3ZlbmVjaykge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTRweCwwcHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LDBweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsMHB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LDBweCkgcm90YXRlKDIwZGVnKTtcbiAgfVxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LC0ycHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsLTJweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwtMnB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsLTJweCkgcm90YXRlKDIwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwtNnB4KSByb3RhdGUoMjBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC02cHgpIHJvdGF0ZSgyMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsLTZweCkgcm90YXRlKDIwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoOHB4LC02cHgpIHJvdGF0ZSgyMGRlZyk7XG4gIH1cbn1cblxuLm5lY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRuZWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsZWZ0OiAyODBweDtcbiAgdG9wOiA1MHB4O1xuICB6LWluZGV4OiA1O1xuICBAaW5jbHVkZSBhbmltYXRpb24oJ21vdmVuZWNrIDFzIGluZmluaXRlIGVhc2UtaW4nKTtcbn1cblxuLmZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRmYWNlO1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsZWZ0OiAyNjZweDtcbiAgdG9wOiAtMzVweDtcbiAgei1pbmRleDogNjtcbiAgQGluY2x1ZGUgYW5pbWF0aW9uKCdtb3ZlaGVhZCAxcyBpbmZpbml0ZSBlYXNlLWluJyk7XG5cbn1cblxuJWV5ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubC1leWUge1xuICBAZXh0ZW5kICVleWU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAuNXB4IDNweCAwcHggMHB4ICRleWVzO1xuICBsZWZ0OiA0MnB4O1xuICB0b3A6IDM5cHg7XG5cbn1cblxuLnItZXllIHtcbiAgQGV4dGVuZCAlZXllO1xuICBib3gtc2hhZG93OiBpbnNldCAwLjNweCAzcHggMHB4IDBweCAkZXllcztcbiAgbGVmdDogNzRweDtcbiAgdG9wOiA0MHB4O1xufVxuXG4ubC1jaGVlayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGNoZWVrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHRvcDogNTJweDtcbiAgbGVmdDogMjFweDtcblxufVxuXG4ubW91dGgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDglO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2UyOTlhNDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRvcDogNjVweDtcbiAgbGVmdDogNTZweDtcbn1cblxuLm5vc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICRub3NlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRvcDogNTNweDtcbiAgbGVmdDogNjRweDtcbn1cblxuLmVhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGZhY2U7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiAzOXB4O1xuICBsZWZ0OiAtNHB4O1xufVxuXG5cbi5yLWhhaXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGhhaXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuXG5cblxuLmwtaGFpcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkaGFpcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwcHg7XG4gIEBpbmNsdWRlIHJvdGF0ZSgyMCk7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogLTdweDtcblxufVxuXG5AaW5jbHVkZSBrZXlmcmFtZXMocm90YXRlLXBvbnl0YWlsKSB7XG4gIDAlLCAxMDAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICBAaW5jbHVkZSByb3RhdGUoMTUpO1xuICB9XG4gIDkwJSB7XG4gICAgQGluY2x1ZGUgcm90YXRlKC01KTtcbiAgfVxufVxuXG5cbi5wb255dGFpbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJGhhaXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGVmdDogMTQwcHg7XG4gIHRvcDogMXB4O1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG4gIEBpbmNsdWRlIHJvdGF0ZSgtOCk7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbigncm90YXRlLXBvbnl0YWlsIDFzIGluZmluaXRlIGxpbmVhcicpO1xuXG59XG5cbi5uZWNrLXNoYWRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogJG5lY2stc2hhZG93O1xuICBvcGFjaXR5OiAuNzU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDo4NyU7XG59XG5cbi5qYXctc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDBweCAwcHggJGZhY2Utc2hhZG93O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOjEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdG9wOiA1N3B4O1xuICBsZWZ0OiAxNnB4O1xuICBAaW5jbHVkZSByb3RhdGUoLTIxMik7XG59XG5cbi5lYXItc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiAtM3B4IDBweCAwcHggMHB4ICRmYWNlLXNoYWRvdztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi8qIFdpbmQgKi9cblxuQGluY2x1ZGUga2V5ZnJhbWVzIChtb3Zld2luZDEpIHtcbiAgMCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgwLDEwMClcbiAgfVxuICA2MCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtNjAwLCAyMDApXG4gIH1cbiAgMTAwJSB7XG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC0yMDAwLCAxMDApXG4gIH1cbn1cblxuQGluY2x1ZGUga2V5ZnJhbWVzIChtb3Zld2luZDIpIHtcbiAgMCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtMTAsMClcbiAgfVxuICAxMDAlIHtcbiAgICBAaW5jbHVkZSB0cmFuc2xhdGUoLTIwMDAsIDApXG4gIH1cbn1cblxuQGluY2x1ZGUga2V5ZnJhbWVzIChtb3Zld2luZDMpIHtcbiAgMCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtMTAsMClcbiAgfVxuICA1MCUge1xuICAgIEBpbmNsdWRlIHRyYW5zbGF0ZSgtNTAwLCAtNTApXG4gIH1cbiAgMTAwJSB7XG4gICAgQGluY2x1ZGUgdHJhbnNsYXRlKC0yMDAwLCAwKVxuICB9XG59XG5cbiV3aW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLncxIHtcbiAgQGV4dGVuZCAld2luZDtcbiAgdG9wOiA1MHB4O1xuICBAaW5jbHVkZSBhbmltYXRpb24obW92ZXdpbmQxIDFzIGluZmluaXRlIGxpbmVhcik7XG59XG5cbi53MiB7XG4gIEBleHRlbmQgJXdpbmQ7XG4gIHRvcDogNDAwcHg7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbihtb3Zld2luZDIgMS44cyBpbmZpbml0ZSBsaW5lYXIpO1xuICB6LWluZGV4OiA3O1xufVxuXG4udzMge1xuICBAZXh0ZW5kICV3aW5kO1xuICB0b3A6IDYwMHB4O1xuICBAaW5jbHVkZSBhbmltYXRpb24obW92ZXdpbmQzIDEuMnMgaW5maW5pdGUgbGluZWFyKTtcbiAgei1pbmRleDogNztcbn1cblxuLmJ1dHRvbi1zZXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG5cbi5idXR0b24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNzaW5oYWxhLWFrdXJ1IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uOiBteW1vdmUgOHMgaW5maW5pdGU7XG59XG4jZW5nbGlzaC1ha3VydSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDhzIGluZmluaXRlO1xufVxuXG4jbnVtYmVycyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDhzIGluZmluaXRlO1xufVxuXG4ja2lkcy1nYW1lcyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogbXltb3ZlIDhzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIG15bW92ZSB7XG4gIDYwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbi5idXR0b24tc29saWQge1xuICAtLWJhY2tncm91bmQ6ICMwYzE2MzFjNCAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "gGGD":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \*************************************************************************************/
/*! exports provided: cordovaInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return cordovaInstance; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "yR3O");

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrapInstance"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ "uC2i":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "yR3O":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/common.js ***!
  \***************************************************************************/
/*! exports provided: ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED, getPromise, wrapPromise, checkAvailability, instanceAvailability, setIndex, callCordovaPlugin, callInstance, getPlugin, get, pluginWarn, cordovaWarn, wrap, wrapInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CORDOVA_NOT_AVAILABLE", function() { return ERR_CORDOVA_NOT_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_PLUGIN_NOT_INSTALLED", function() { return ERR_PLUGIN_NOT_INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPromise", function() { return wrapPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return checkAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return instanceAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndex", function() { return setIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCordovaPlugin", function() { return callCordovaPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callInstance", function() { return callInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlugin", function() { return getPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginWarn", function() { return pluginWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaWarn", function() { return cordovaWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInstance", function() { return wrapInstance; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (window.angular) {
        var injector = window.angular
            .element(document.querySelector('[ng-app]') || document.body)
            .injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event even name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element = element ? get(window, element) : window;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (!window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return (pluginObj._objectInstance &&
        (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined'));
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    return get(window, pluginRef);
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' +
            pluginName +
            '.' +
            method +
            ', but the ' +
            pluginName +
            ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (method) {
        console.warn('Native: tried calling ' +
            pluginName +
            '.' +
            method +
            ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
    else {
        console.warn('Native: tried accessing the ' +
            pluginName +
            ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "SOMP");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "EvNN");







let HomePage = class HomePage {
    constructor(navCtrl, animationService, tts) {
        this.navCtrl = navCtrl;
        this.tts = tts;
        this.animator = animationService.builder();
    }
    animateElem() {
        this.animator.setType('flipInX').show(this.myElem.nativeElement);
    }
    gotoWhiteBoardPage() {
        this.navCtrl;
    }
    speech() {
        this.tts.speak('Hello World')
            .then(() => console.log('Success'))
            .catch((reason) => console.log(reason));
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"] },
    { type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"] }
];
HomePage.propDecorators = {
    myElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['myElement',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map