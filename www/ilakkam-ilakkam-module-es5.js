(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ilakkam-ilakkam-module"], {
    /***/
    "9mwd":
    /*!*****************************************!*\
      !*** ./src/app/ilakkam/ilakkam.page.ts ***!
      \*****************************************/

    /*! exports provided: IlakkamPage */

    /***/
    function mwd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IlakkamPage", function () {
        return IlakkamPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ilakkam_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ilakkam.page.html */
      "Qb92");
      /* harmony import */


      var _ilakkam_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ilakkam.page.scss */
      "PCh6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IlakkamPage = /*#__PURE__*/function () {
        function IlakkamPage() {
          _classCallCheck(this, IlakkamPage);
        }

        _createClass(IlakkamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "next",
          value: function next() {
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
          }
        }, {
          key: "prev",
          value: function prev() {
            this.slides.lockSwipes(false);
            this.slides.slidePrev();
            this.slides.lockSwipes(true);
          }
        }]);

        return IlakkamPage;
      }();

      IlakkamPage.ctorParameters = function () {
        return [];
      };

      IlakkamPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider', {
            "static": true
          }]
        }]
      };
      IlakkamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ilakkam',
        template: _raw_loader_ilakkam_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ilakkam_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IlakkamPage);
      /***/
    },

    /***/
    "PCh6":
    /*!*******************************************!*\
      !*** ./src/app/ilakkam/ilakkam.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function PCh6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #0d5171;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2lsYWtrYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJpbGFra2FtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiAjMGQ1MTcxO1xufVxuIl19 */";
      /***/
    },

    /***/
    "Qb92":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ilakkam/ilakkam.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Qb92(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">ඉලක්කම් / Numbers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 98%; background-color: #dddedc45;\">\n    <ion-slides style=\"margin-top: 1%; height: 95%\" #mySlider pager=\"false\">\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(0).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(1).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(2).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(3).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(4).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(5).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(6).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(7).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(8).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(9).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/ilakkam/My%20Post(10).png\">\n      </ion-slide>\n\n\n    </ion-slides>\n\n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev\" (click)=\"prev()\">Prev</ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\">\n      <ion-button type=\"submit\" float-right ion-button color=\"primary\" class=\"btnNext\" (click)=\"next()\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "ZQu4":
    /*!*******************************************!*\
      !*** ./src/app/ilakkam/ilakkam.module.ts ***!
      \*******************************************/

    /*! exports provided: IlakkamPageModule */

    /***/
    function ZQu4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IlakkamPageModule", function () {
        return IlakkamPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ilakkam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ilakkam-routing.module */
      "w5L7");
      /* harmony import */


      var _ilakkam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ilakkam.page */
      "9mwd");

      var IlakkamPageModule = function IlakkamPageModule() {
        _classCallCheck(this, IlakkamPageModule);
      };

      IlakkamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ilakkam_routing_module__WEBPACK_IMPORTED_MODULE_5__["IlakkamPageRoutingModule"]],
        declarations: [_ilakkam_page__WEBPACK_IMPORTED_MODULE_6__["IlakkamPage"]]
      })], IlakkamPageModule);
      /***/
    },

    /***/
    "w5L7":
    /*!***************************************************!*\
      !*** ./src/app/ilakkam/ilakkam-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: IlakkamPageRoutingModule */

    /***/
    function w5L7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IlakkamPageRoutingModule", function () {
        return IlakkamPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ilakkam_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ilakkam.page */
      "9mwd");

      var routes = [{
        path: '',
        component: _ilakkam_page__WEBPACK_IMPORTED_MODULE_3__["IlakkamPage"]
      }];

      var IlakkamPageRoutingModule = function IlakkamPageRoutingModule() {
        _classCallCheck(this, IlakkamPageRoutingModule);
      };

      IlakkamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IlakkamPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ilakkam-ilakkam-module-es5.js.map