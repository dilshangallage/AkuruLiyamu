(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sinhala-akuru-liyamu-sinhala-akuru-liyamu-module"], {
    /***/
    "5r9F":
    /*!*********************************************************************!*\
      !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function r9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "canvas-draw {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\ncanvas-draw #top-toolbar {\n  position: absolute;\n  top: 0;\n}\ncanvas-draw #bottom-toolbar {\n  position: absolute;\n  bottom: 0;\n}\n.color-block {\n  height: 40px;\n  padding: 2px;\n}\n.toolbar-background {\n  background-color: red !important;\n}\n.new-background-color {\n  --background: #0d5171;\n}\n.pencile-top {\n  border-left: 3rem solid;\n  border-top: 1rem solid transparent;\n  border-bottom: 1rem solid transparent;\n  padding: 0px;\n}\n.pencile-point {\n  width: 0px;\n  height: 0px;\n  border-left: 1rem solid black;\n  border-top: 0.5rem solid transparent;\n  border-bottom: 0.5rem solid transparent;\n}\n.signature-pad-classs {\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url('My Post(53).png');\n}\n.wrapper {\n  position: relative;\n  width: 600px;\n  height: 200px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.signature-pad canvas {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n#container {\n  padding: 20px;\n  background-color: #fff2cc;\n}\n#outer_space {\n  margin-left: 450px;\n  margin-top: 100px;\n  width: 51px;\n  height: 120px;\n}\n#line {\n  margin-top: 40px;\n  width: 475px;\n  border: 1px solid black;\n}\n#pencil {\n  width: 100%;\n  height: 100%;\n}\n#top {\n  width: 1rem;\n  height: 100%;\n  background-color: black;\n}\n#top_border {\n  width: 1rem;\n  height: 100%;\n  background-color: white;\n}\n#bottom {\n  width: 0px;\n  height: 11px;\n  border-left: 30px solid #ffc266;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n}\n#nib {\n  width: 0px;\n  height: 0px;\n  border-left: 11px solid black;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n#design {\n  margin-left: 90px;\n  width: 10px;\n  height: 100%;\n  background-color: #ffc266;\n}\n#small_design {\n  float: bottom;\n  width: 0px;\n  height: 0px;\n  border-left: 9px solid gray;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n}\n.ion-button-class {\n  background-color: #5db37e;\n  color: white;\n  border-radius: 0.5rem;\n}\n.ion-button-class-functional {\n  background-color: #0fc8e0;\n  color: white;\n  border-radius: 0.5rem;\n  font-size: 1.3rem;\n}\n.ion-button-class-functional-mute {\n  background-color: #e00f53;\n  color: white;\n  border-radius: 0.5rem;\n  font-size: 1.3rem;\n}\n.ion-range-bar {\n  border-radius: 1rem;\n  background-color: #4caf50b5;\n  color: #eff3f5;\n  top: 0.2rem;\n  --bar-background: #e0e9ea;\n  left: 0.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpbmhhbGEtYWt1cnUtbGl5YW11LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7QUFDQTtFQUNFLHFCQUFBO0FBRUY7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUFFRjtBQUVBO0VBQ0UsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUtBO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0FBSEY7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7QUFGRjtBQUtBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFGRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQUZGO0FBTUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUhGO0FBT0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoic2luaGFsYS1ha3VydS1saXlhbXUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzLWRyYXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgI3RvcC10b29sYmFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gIH1cbiAgI2JvdHRvbS10b29sYmFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gIH1cbn1cblxuLmNvbG9yLWJsb2NrIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQhaW1wb3J0YW50O1xufVxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICMwZDUxNzE7XG59XG5cbi5wZW5jaWxlLXRvcCB7XG4gIGJvcmRlci1sZWZ0OiAzcmVtIHNvbGlkO1xuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wZW5jaWxlLXBvaW50IHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcblxufVxuXG4uc2lnbmF0dXJlLXBhZC1jbGFzc3Mge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSWxha2thbS1saXlhbXUvTXkgUG9zdCg1MykucG5nJyk7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zaWduYXR1cmUtcGFkIGNhbnZhc3tcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cblxuI2NvbnRhaW5lclxue1xuICBwYWRkaW5nOjIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjJjYztcbn1cbiNvdXRlcl9zcGFjZSB7XG4gIG1hcmdpbi1sZWZ0OiA0NTBweDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4jbGluZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiA0NzVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNwZW5jaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jdG9wIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiN0b3BfYm9yZGVyIHtcbiAgd2lkdGg6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbiNib3R0b20ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNmZmMyNjY7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbiNuaWIge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDExcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4jZGVzaWduIHtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMyNjY7XG59XG5cbiNzbWFsbF9kZXNpZ24ge1xuICBmbG9hdDogYm90dG9tO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDlweCBzb2xpZCBncmF5O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuXG4uaW9uLWJ1dHRvbi1jbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZGIzN2U7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAvL3dpZHRoOiA2cmVtO1xufVxuXG4uaW9uLWJ1dHRvbi1jbGFzcy1mdW5jdGlvbmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmYzhlMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLmlvbi1idXR0b24tY2xhc3MtZnVuY3Rpb25hbC1tdXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwMGY1MztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uaW9uLXJhbmdlLWJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTBiNTtcbiAgY29sb3I6ICNlZmYzZjU7XG4gIHRvcDogMC4ycmVtO1xuICAtLWJhci1iYWNrZ3JvdW5kOiAjZTBlOWVhO1xuICBsZWZ0OiAwLjFyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "QeNb":
    /*!*****************************************************************************!*\
      !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SinhalaAkuruLiyamuPageRoutingModule */

    /***/
    function QeNb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPageRoutingModule", function () {
        return SinhalaAkuruLiyamuPageRoutingModule;
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


      var _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sinhala-akuru-liyamu.page */
      "rZr3");

      var routes = [{
        path: '',
        component: _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__["SinhalaAkuruLiyamuPage"]
      }];

      var SinhalaAkuruLiyamuPageRoutingModule = function SinhalaAkuruLiyamuPageRoutingModule() {
        _classCallCheck(this, SinhalaAkuruLiyamuPageRoutingModule);
      };

      SinhalaAkuruLiyamuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SinhalaAkuruLiyamuPageRoutingModule);
      /***/
    },

    /***/
    "rZr3":
    /*!*******************************************************************!*\
      !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.ts ***!
      \*******************************************************************/

    /*! exports provided: SinhalaAkuruLiyamuPage */

    /***/
    function rZr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPage", function () {
        return SinhalaAkuruLiyamuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sinhala_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sinhala-akuru-liyamu.page.html */
      "w+Pe");
      /* harmony import */


      var _sinhala_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sinhala-akuru-liyamu.page.scss */
      "5r9F");
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

      var SinhalaAkuruLiyamuPage = /*#__PURE__*/function () {
        function SinhalaAkuruLiyamuPage(platform, nativeAudio, alertCtrl) {
          var _this = this;

          _classCallCheck(this, SinhalaAkuruLiyamuPage);

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
          this.number = -1;
          this.play_music = false; // this.presentAlert('OK');

          platform.ready().then(function () {
            _this.nativeAudio.preloadComplex('uniqueId3', 'assets/mp3/background-music/song6.mp3', 1, 1, 0).then(function (success) {// this.presentAlert('Success');
            }, function (err) {// this.presentAlert('Error');
            });
          });
          this.availableColours = ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
        }

        _createClass(SinhalaAkuruLiyamuPage, [{
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
            this.number < 26 ? this.number += 1 : this.number = 26; // this.slides.slideNext();

            this.loadImage();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.number > 0 ? this.number -= 1 : this.number = -1; // this.slides.slidePrev();

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
            background.src = '../../assets/Sinhala-akuru-liyamu/My%20Post(' + this.number + ').png'; // background.src = src;

            var ctx = this.canvasElement.getContext('2d');

            background.onload = function () {
              ctx.drawImage(background, 0, 0, _this3.canvasElement.width, _this3.canvasElement.height);
            };
          }
        }, {
          key: "playMusic",
          value: function playMusic() {
            this.play_music = true;
            this.nativeAudio.stop('uniqueId3');
          }
        }, {
          key: "stopMusic",
          value: function stopMusic() {
            this.play_music = false;
            this.nativeAudio.play("uniqueId3");
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
            this.nativeAudio.play('uniqueId3');
            this.nativeAudio.loop('uniqueId3');
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.nativeAudio.stop('uniqueId3');
          }
        }]);

        return SinhalaAkuruLiyamuPage;
      }();

      SinhalaAkuruLiyamuPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeAudio"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      SinhalaAkuruLiyamuPage.propDecorators = {
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
      SinhalaAkuruLiyamuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sinhala-akuru-liyamu',
        template: _raw_loader_sinhala_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sinhala_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SinhalaAkuruLiyamuPage);
      /***/
    },

    /***/
    "w+Pe":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">සිංහල  හෝඩිය </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-row>\n      <ion-range snaps=\"true\" ticks=\"false\" color=\"danger\" class=\"ion-range-bar\"  min=\"2\" max=\"20\" [(ngModel)]=\"lineWidth\" (ionChange)=\"changePenSize()\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n      </ion-range>\n    </ion-row>\n  </div>\n  <div style=\"height: 80%\">\n    <ion-row>\n      <ion-col size=\"2\" style=\"margin-top: 0.3rem;\">\n        <ion-row *ngFor=\"let color of colors\" class=\"color-block\" tappable\n                 (click)=\"selectColor(color)\">\n          <div style=\"width: 100%; display: inline-flex;\">\n            <div id=\"pencil\" [style.background-color]=\"color\" >\n              <div id=\"top\" style=\"width: 5%\"></div>\n              <div id=\"top_border\"></div>\n\n            </div>\n            <div  class=\"pencile-top\" [style.border-left-color]=\"color\" style=\"height: 100%\"></div>\n          </div>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"10\" class=\"\">\n        <signature-pad id=\"signature-pad\" class=\"signature-pad-class\" [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"\n                       (window:resize)=\"resizeSignaturePad()\"></signature-pad>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col size=\"3\">\n      <ion-button type=\"submit\" float-left ion-button  fill=\"clear\" class=\"btnPrev ion-button-class\" (click)=\"prev()\" [disabled]=\"number== -1\">Prev</ion-button>\n    </ion-col>\n    <ion-col size=\"3\">\n      <ion-button type=\"submit\" float-left ion-button   fill=\"clear\" class=\"btnPrev ion-button-class-functional\" (click)=\"playMusic()\" *ngIf=\"!play_music\">\n        <ion-icon name=\"megaphone\"></ion-icon>\n      </ion-button>\n      <ion-button type=\"submit\" float-left ion-button   fill=\"clear\" class=\"btnPrev ion-button-class-functional-mute\" (click)=\"stopMusic()\" *ngIf=\"play_music\">\n        <ion-icon name=\"volume-off\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\" size=\"3\">\n      <ion-button type=\"submit\" float-right ion-button  fill=\"clear\" class=\"btnNext ion-button-class-functional\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\" size=\"3\">\n      <ion-button type=\"submit\" float-right ion-button  fill=\"clear\" class=\"btnNext ion-button-class\" (click)=\"next()\" [disabled]=\"number==26\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n";
      /***/
    },

    /***/
    "x+i4":
    /*!*********************************************************************!*\
      !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SinhalaAkuruLiyamuPageModule */

    /***/
    function xI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPageModule", function () {
        return SinhalaAkuruLiyamuPageModule;
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


      var _sinhala_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sinhala-akuru-liyamu-routing.module */
      "QeNb");
      /* harmony import */


      var _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sinhala-akuru-liyamu.page */
      "rZr3");
      /* harmony import */


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular2-signaturepad */
      "HnZm");

      var SinhalaAkuruLiyamuPageModule = function SinhalaAkuruLiyamuPageModule() {
        _classCallCheck(this, SinhalaAkuruLiyamuPageModule);
      };

      SinhalaAkuruLiyamuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sinhala_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinhalaAkuruLiyamuPageRoutingModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePadModule"]],
        declarations: [_sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__["SinhalaAkuruLiyamuPage"]]
      })], SinhalaAkuruLiyamuPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sinhala-akuru-liyamu-sinhala-akuru-liyamu-module-es5.js.map