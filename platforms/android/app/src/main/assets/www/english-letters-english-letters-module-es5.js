(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["english-letters-english-letters-module"], {
    /***/
    "1R11":
    /*!***********************************************************!*\
      !*** ./src/app/english-letters/english-letters.module.ts ***!
      \***********************************************************/

    /*! exports provided: EnglishLettersPageModule */

    /***/
    function R11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishLettersPageModule", function () {
        return EnglishLettersPageModule;
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


      var _english_letters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./english-letters-routing.module */
      "OX5P");
      /* harmony import */


      var _english_letters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./english-letters.page */
      "eyk6");

      var EnglishLettersPageModule = function EnglishLettersPageModule() {
        _classCallCheck(this, EnglishLettersPageModule);
      };

      EnglishLettersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _english_letters_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnglishLettersPageRoutingModule"]],
        declarations: [_english_letters_page__WEBPACK_IMPORTED_MODULE_6__["EnglishLettersPage"]]
      })], EnglishLettersPageModule);
      /***/
    },

    /***/
    "FSRA":
    /*!***********************************************************!*\
      !*** ./src/app/english-letters/english-letters.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function FSRA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #0d5171;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VuZ2xpc2gtbGV0dGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImVuZ2xpc2gtbGV0dGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzBkNTE3MTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Gv30":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/english-letters/english-letters.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Gv30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">English Alphabet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"height: 98%; background-color: #dddedc45;\">\n    <ion-slides style=\"margin-top: 1%; height: 95%\" #mySlider pager=\"false\">\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post.png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(1).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(2).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(3).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(4).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(5).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(6).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(7).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(8).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(9).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(10).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(11).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(12).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(13).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(14).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(15).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(16).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(17).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(18).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(19).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(20).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(21).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(22).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(23).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(24).png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/English%20letters/My%20Post(25).png\">\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev\" (click)=\"prev()\">Prev</ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\">\n      <ion-button type=\"submit\" float-right ion-button color=\"primary\" class=\"btnNext\" (click)=\"next()\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "OX5P":
    /*!*******************************************************************!*\
      !*** ./src/app/english-letters/english-letters-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EnglishLettersPageRoutingModule */

    /***/
    function OX5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishLettersPageRoutingModule", function () {
        return EnglishLettersPageRoutingModule;
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


      var _english_letters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./english-letters.page */
      "eyk6");

      var routes = [{
        path: '',
        component: _english_letters_page__WEBPACK_IMPORTED_MODULE_3__["EnglishLettersPage"]
      }];

      var EnglishLettersPageRoutingModule = function EnglishLettersPageRoutingModule() {
        _classCallCheck(this, EnglishLettersPageRoutingModule);
      };

      EnglishLettersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnglishLettersPageRoutingModule);
      /***/
    },

    /***/
    "eyk6":
    /*!*********************************************************!*\
      !*** ./src/app/english-letters/english-letters.page.ts ***!
      \*********************************************************/

    /*! exports provided: EnglishLettersPage */

    /***/
    function eyk6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishLettersPage", function () {
        return EnglishLettersPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_english_letters_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./english-letters.page.html */
      "Gv30");
      /* harmony import */


      var _english_letters_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./english-letters.page.scss */
      "FSRA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EnglishLettersPage = /*#__PURE__*/function () {
        // next(){
        //   this.slides.slideNext();
        // }
        //
        // prev(){
        //   this.slides.slidePrev();
        // }
        function EnglishLettersPage() {
          _classCallCheck(this, EnglishLettersPage);
        }

        _createClass(EnglishLettersPage, [{
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

        return EnglishLettersPage;
      }();

      EnglishLettersPage.ctorParameters = function () {
        return [];
      };

      EnglishLettersPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider', {
            "static": true
          }]
        }]
      };
      EnglishLettersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-english-letters',
        template: _raw_loader_english_letters_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_english_letters_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnglishLettersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=english-letters-english-letters-module-es5.js.map