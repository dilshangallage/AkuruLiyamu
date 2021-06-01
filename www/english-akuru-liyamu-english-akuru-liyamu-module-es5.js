(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["english-akuru-liyamu-english-akuru-liyamu-module"], {
    /***/
    "3rdP":
    /*!*********************************************************************!*\
      !*** ./src/app/english-akuru-liyamu/english-akuru-liyamu.module.ts ***!
      \*********************************************************************/

    /*! exports provided: EnglishAkuruLiyamuPageModule */

    /***/
    function rdP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishAkuruLiyamuPageModule", function () {
        return EnglishAkuruLiyamuPageModule;
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


      var _english_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./english-akuru-liyamu-routing.module */
      "Lt/l");
      /* harmony import */


      var _english_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./english-akuru-liyamu.page */
      "r6sa");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var EnglishAkuruLiyamuPageModule = function EnglishAkuruLiyamuPageModule() {
        _classCallCheck(this, EnglishAkuruLiyamuPageModule);
      };

      EnglishAkuruLiyamuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _english_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnglishAkuruLiyamuPageRoutingModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]],
        declarations: [_english_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__["EnglishAkuruLiyamuPage"]]
      })], EnglishAkuruLiyamuPageModule);
      /***/
    },

    /***/
    "F8/9":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/english-akuru-liyamu/english-akuru-liyamu.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F89(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">English Alphabet </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<div>-->\n  <!--  <ion-slides>-->\n  <!--    <ion-slide #mySlider>-->\n  <!--      <canvas #myCanvas1 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>-->\n  <!--    </ion-slide>-->\n  <!--    <ion-slide>-->\n  <!--      <canvas #myCanvas2 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>-->\n  <!--    </ion-slide>-->\n  <!--  </ion-slides>-->\n  <!--</div>-->\n\n  <div>\n    <ion-row>\n      <ion-range snaps=\"true\" ticks=\"false\" color=\"danger\" class=\"ion-range-bar\"  min=\"2\" max=\"20\" [(ngModel)]=\"lineWidth\" (ionChange)=\"changePenSize()\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n      </ion-range>\n    </ion-row>\n  </div>\n  <div style=\"height: 80%\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-col size=\"2\">\n          <ion-row *ngFor=\"let color of colors\" class=\"color-block\" tappable\n                   (click)=\"selectColor(color)\">\n            <div style=\"width: 100%; display: inline-flex;\">\n              <div id=\"pencil\" [style.background-color]=\"color\" >\n                <div id=\"top\" style=\"width: 5%\"></div>\n                <div id=\"top_border\"></div>\n\n              </div>\n              <div  class=\"pencile-top\" [style.border-left-color]=\"color\" style=\"height: 100%\"></div>\n            </div>\n          </ion-row>\n        </ion-col>\n      </ion-col>\n      <ion-col size=\"10\" class=\"\">\n        <!--        <canvas #myCanvas1 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>-->\n        <signature-pad id=\"signature-pad\" class=\"signature-pad-class\" [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"\n                       (window:resize)=\"resizeSignaturePad()\"></signature-pad>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-button type=\"submit\" float-left ion-button  fill=\"clear\" class=\"btnPrev ion-button-class\" (click)=\"prev()\" [disabled]=\"number== 27\">Prev</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button type=\"submit\" float-left ion-button   fill=\"clear\" class=\"btnPrev ion-button-class-functional\" (click)=\"playMusic()\" *ngIf=\"!play_music\">\n        <ion-icon name=\"megaphone\"></ion-icon>\n      </ion-button>\n      <ion-button type=\"submit\" float-left ion-button   fill=\"clear\" class=\"btnPrev ion-button-class-functional-mute\" (click)=\"stopMusic()\" *ngIf=\"play_music\">\n        <ion-icon name=\"volume-off\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\" size=\"3\">\n      <ion-button type=\"submit\" float-right ion-button  fill=\"clear\" class=\"btnNext ion-button-class-functional\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\" size=\"3\">\n      <ion-button type=\"submit\" float-right ion-button  fill=\"clear\" class=\"btnNext ion-button-class\" (click)=\"next()\" [disabled]=\"number==52\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "Lt/l":
    /*!*****************************************************************************!*\
      !*** ./src/app/english-akuru-liyamu/english-akuru-liyamu-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: EnglishAkuruLiyamuPageRoutingModule */

    /***/
    function LtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishAkuruLiyamuPageRoutingModule", function () {
        return EnglishAkuruLiyamuPageRoutingModule;
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


      var _english_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./english-akuru-liyamu.page */
      "r6sa");

      var routes = [{
        path: '',
        component: _english_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__["EnglishAkuruLiyamuPage"]
      }];

      var EnglishAkuruLiyamuPageRoutingModule = function EnglishAkuruLiyamuPageRoutingModule() {
        _classCallCheck(this, EnglishAkuruLiyamuPageRoutingModule);
      };

      EnglishAkuruLiyamuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EnglishAkuruLiyamuPageRoutingModule);
      /***/
    },

    /***/
    "ioGL":
    /*!*********************************************************************!*\
      !*** ./src/app/english-akuru-liyamu/english-akuru-liyamu.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function ioGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "canvas-draw {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\ncanvas-draw #top-toolbar {\n  position: absolute;\n  top: 0;\n}\ncanvas-draw #bottom-toolbar {\n  position: absolute;\n  bottom: 0;\n}\n.color-block {\n  height: 40px;\n  padding: 2px;\n}\n.toolbar-background {\n  background-color: red !important;\n}\n.new-background-color {\n  --background: #0d5171;\n}\n#container {\n  padding: 20px;\n  background-color: #fff2cc;\n}\n#outer_space {\n  margin-left: 450px;\n  margin-top: 100px;\n  width: 51px;\n  height: 120px;\n}\n#line {\n  margin-top: 40px;\n  width: 475px;\n  border: 1px solid black;\n}\n#pencil {\n  width: 100%;\n  height: 100%;\n}\n#top {\n  width: 1rem;\n  height: 100%;\n  background-color: black;\n}\n#top_border {\n  width: 1rem;\n  height: 100%;\n  background-color: white;\n}\n#bottom {\n  width: 0px;\n  height: 11px;\n  border-left: 30px solid #ffc266;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n}\n#nib {\n  width: 0px;\n  height: 0px;\n  border-left: 11px solid black;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n#design {\n  margin-left: 90px;\n  width: 10px;\n  height: 100%;\n  background-color: #ffc266;\n}\n#small_design {\n  float: bottom;\n  width: 0px;\n  height: 0px;\n  border-left: 9px solid gray;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n.pencile-top {\n  border-left: 3rem solid;\n  border-top: 1rem solid transparent;\n  border-bottom: 1rem solid transparent;\n  padding: 0px;\n}\n.pencile-point {\n  width: 0px;\n  height: 0px;\n  border-left: 1rem solid black;\n  border-top: 0.5rem solid transparent;\n  border-bottom: 0.5rem solid transparent;\n}\n.ion-button-class {\n  background-color: #5db37e;\n  color: white;\n  border-radius: 0.5rem;\n}\n.ion-button-class-functional {\n  background-color: #0fc8e0;\n  color: white;\n  border-radius: 0.5rem;\n  font-size: 1.3rem;\n}\n.ion-button-class-functional-mute {\n  background-color: #e00f53;\n  color: white;\n  border-radius: 0.5rem;\n  font-size: 1.3rem;\n}\n.ion-range-bar {\n  border-radius: 1rem;\n  background-color: #4caf50b5;\n  color: #eff3f5;\n  top: 0.2rem;\n  --bar-background: #e0e9ea;\n  left: 0.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VuZ2xpc2gtYWt1cnUtbGl5YW11LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7QUFDQTtFQUNFLHFCQUFBO0FBRUY7QUFFQTtFQUVFLGFBQUE7RUFDQSx5QkFBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFDRjtBQUVBO0VBQ0UsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtBQUNGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRkY7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoiZW5nbGlzaC1ha3VydS1saXlhbXUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzLWRyYXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgI3RvcC10b29sYmFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gIH1cbiAgI2JvdHRvbS10b29sYmFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cblxuLmNvbG9yLWJsb2NrIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQhaW1wb3J0YW50O1xufVxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICMwZDUxNzE7XG59XG5cblxuI2NvbnRhaW5lclxue1xuICBwYWRkaW5nOjIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjJjYztcbn1cbiNvdXRlcl9zcGFjZSB7XG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4jbGluZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiA0NzVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNwZW5jaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jdG9wIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiN0b3BfYm9yZGVyIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNib3R0b20ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNmZmMyNjY7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbiNuaWIge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4jZGVzaWduIHtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyNjY7XG59XG5cbiNzbWFsbF9kZXNpZ24ge1xuICBmbG9hdDogYm90dG9tO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnBlbmNpbGUtdG9wIHtcbiAgYm9yZGVyLWxlZnQ6IDNyZW0gc29saWQ7XG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnBlbmNpbGUtcG9pbnQge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuXG59XG5cblxuLmlvbi1idXR0b24tY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMzdlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLy93aWR0aDogNnJlbTtcbn1cblxuLmlvbi1idXR0b24tY2xhc3MtZnVuY3Rpb25hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZmM4ZTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5pb24tYnV0dG9uLWNsYXNzLWZ1bmN0aW9uYWwtbXV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDBmNTM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmlvbi1yYW5nZS1iYXIge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwYjU7XG4gIGNvbG9yOiAjZWZmM2Y1O1xuICB0b3A6IDAuMnJlbTtcbiAgLS1iYXItYmFja2dyb3VuZDogI2UwZTllYTtcbiAgbGVmdDogMC4xcmVtO1xufVxuIl19 */";
      /***/
    },

    /***/
    "r6sa":
    /*!*******************************************************************!*\
      !*** ./src/app/english-akuru-liyamu/english-akuru-liyamu.page.ts ***!
      \*******************************************************************/

    /*! exports provided: EnglishAkuruLiyamuPage */

    /***/
    function r6sa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnglishAkuruLiyamuPage", function () {
        return EnglishAkuruLiyamuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_english_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./english-akuru-liyamu.page.html */
      "F8/9");
      /* harmony import */


      var _english_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./english-akuru-liyamu.page.scss */
      "ioGL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/native-audio/ngx */
      "fLLL");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var EnglishAkuruLiyamuPage = /*#__PURE__*/function () {
        function EnglishAkuruLiyamuPage(platform, nativeAudio, alertCtrl) {
          var _this = this;

          _classCallCheck(this, EnglishAkuruLiyamuPage);

          this.platform = platform;
          this.nativeAudio = nativeAudio;
          this.alertCtrl = alertCtrl;
          this.signaturePadOptions = {
            'minWidth': 5,
            'color': 'red',
            'canvasWidth': 600,
            'canvasHeight': 600
          };
          this.currentColour = '#1abc9c';
          this.brushSize = 10;
          this.selectedColor = '#9e2956';
          this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
          this.drawing = false;
          this.lineWidth = 5;
          this.number = 27;
          this.play_music = false;
          platform.ready().then(function () {
            _this.nativeAudio.preloadComplex('uniqueId4', 'assets/mp3/background-music/song5.mp3', 1, 1, 0).then(function (success) {}, function (err) {});
          }); // this.nativeAudio.preloadComplex('trackID', 'mp3/sinhala-akuru/sinhala-hodiya.mp3', 1, 1, 0).then(function() {
          //   let alert = this.alertCtrl.create({
          //     title: 'Low battery',
          //     subTitle: '10% of battery remaining',
          //     buttons: ['Dismiss']
          //   });
          //   alert.present();
          // }, function(err) {
          //   let alert = this.alertCtrl.create({
          //     title: 'Error',
          //     subTitle: '10% of battery remaining',
          //     buttons: ['Dismiss']
          //   });
          //   alert.present();
          // });

          this.availableColours = ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
        }

        _createClass(EnglishAkuruLiyamuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changePenSize",
          value: function changePenSize() {
            this.signaturePad.set('minWidth', this.lineWidth);
          }
        }, {
          key: "selectColor",
          value: function selectColor(color) {
            this.signaturePad.set('penColor', color);
          }
        }, {
          key: "resizeSignaturePad",
          value: function resizeSignaturePad() {
            // this.signaturePad.set('canvasWidth', document.getElementById("sign_canvas").offsetWidth);
            this.canvasElement.width = this.platform.width() - 100 + '';
            this.canvasElement.height = this.platform.height() - 200 + ''; // this.signaturePad.clear();

            this.loadImage();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            setTimeout(function () {
              _this2.loadMusic();
            }, 500); // this.nativeAudio.loop('homePageBackground');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var wrapper = document.getElementById("signature-pad");
            this.canvasElement = wrapper.querySelector("canvas");
            this.canvasElement.width = this.platform.width() - 100 + '';
            this.canvasElement.height = this.platform.height() - 200 + '';
            this.signaturePad.set('minWidth', this.lineWidth); // set szimek/signature_pad options at runtime

            this.signaturePad.clear();
            this.loadImage();
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            // will be notified of szimek/signature_pad's onEnd event
            console.log(this.signaturePad.toDataURL());
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            // will be notified of szimek/signature_pad's onBegin event
            console.log('begin drawing');
          }
        }, {
          key: "next",
          value: function next() {
            this.number < 52 ? this.number += 1 : this.number = 52; // this.slides.slideNext();

            this.loadImage();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.number > 27 ? this.number -= 1 : this.number = 27; // this.slides.slidePrev();

            this.loadImage();
          }
        }, {
          key: "changeSize",
          value: function changeSize(size) {
            this.lineWidth = size;
            this.signaturePad.set('minWidth', size);
          }
        }, {
          key: "loadImage",
          value: function loadImage() {
            var _this3 = this;

            var background = new Image();
            background.src = '../../assets/English-letters-liyamu/My%20Post(' + this.number + ').png'; // background.src = src;

            var ctx = this.canvasElement.getContext('2d');

            background.onload = function () {
              ctx.drawImage(background, 0, 0, _this3.canvasElement.width, _this3.canvasElement.height);
            };
          }
        }, {
          key: "playMusic",
          value: function playMusic() {
            this.play_music = true;
            this.nativeAudio.stop('uniqueId4');
          }
        }, {
          key: "stopMusic",
          value: function stopMusic() {
            this.play_music = false;
            this.nativeAudio.play("uniqueId4");
          }
        }, {
          key: "refresh",
          value: function refresh() {
            this.signaturePad.clear();
            this.loadImage();
          }
        }, {
          key: "loadMusic",
          value: function loadMusic() {
            this.nativeAudio.play('uniqueId4');
            this.nativeAudio.loop('uniqueId4');
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.nativeAudio.stop('uniqueId4');
          }
        }]);

        return EnglishAkuruLiyamuPage;
      }();

      EnglishAkuruLiyamuPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeAudio"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      EnglishAkuruLiyamuPage.propDecorators = {
        signaturePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePad"]]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mySlider', {
            "static": true
          }]
        }],
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['myCanvas1']
        }]
      };
      EnglishAkuruLiyamuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-english-akuru-liyamu',
        template: _raw_loader_english_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_english_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EnglishAkuruLiyamuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=english-akuru-liyamu-english-akuru-liyamu-module-es5.js.map