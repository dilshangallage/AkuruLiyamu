(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kids-games-kids-games-module"], {
    /***/
    "//iL":
    /*!*********************************************************!*\
      !*** ./src/app/kids-games/kids-games-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: KidsGamesPageRoutingModule */

    /***/
    function iL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KidsGamesPageRoutingModule", function () {
        return KidsGamesPageRoutingModule;
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


      var _kids_games_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./kids-games.page */
      "KwZy");

      var routes = [{
        path: '',
        component: _kids_games_page__WEBPACK_IMPORTED_MODULE_3__["KidsGamesPage"]
      }];

      var KidsGamesPageRoutingModule = function KidsGamesPageRoutingModule() {
        _classCallCheck(this, KidsGamesPageRoutingModule);
      };

      KidsGamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], KidsGamesPageRoutingModule);
      /***/
    },

    /***/
    "6Akk":
    /*!*************************************************!*\
      !*** ./src/app/kids-games/kids-games.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function Akk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Fira+Sans:400,500italic);\n@-webkit-keyframes eyes {\n  47.0588235294%, 51.7647058824%, 100% {\n    top: -50px;\n  }\n  56.4705882353% {\n    top: -45px;\n  }\n  95.2941176471% {\n    top: -20px;\n  }\n  77.6470588235%, 94.1176470588% {\n    top: -15px;\n  }\n  82.3529411765% {\n    top: -25px;\n  }\n}\n@keyframes eyes {\n  47.0588235294%, 51.7647058824%, 100% {\n    top: -50px;\n  }\n  56.4705882353% {\n    top: -45px;\n  }\n  95.2941176471% {\n    top: -20px;\n  }\n  77.6470588235%, 94.1176470588% {\n    top: -15px;\n  }\n  82.3529411765% {\n    top: -25px;\n  }\n}\n@-webkit-keyframes wings {\n  47.0588235294%, 94.1176470588%, 100% {\n    top: 70px;\n  }\n  95.2941176471% {\n    top: 60px;\n  }\n}\n@keyframes wings {\n  47.0588235294%, 94.1176470588%, 100% {\n    top: 70px;\n  }\n  95.2941176471% {\n    top: 60px;\n  }\n}\n@-webkit-keyframes feet {\n  47.0588235294%, 94.1176470588%, 100% {\n    top: -2px;\n  }\n  95.2941176471% {\n    top: 0px;\n  }\n}\n@keyframes feet {\n  47.0588235294%, 94.1176470588%, 100% {\n    top: -2px;\n  }\n  95.2941176471% {\n    top: 0px;\n  }\n}\n@-webkit-keyframes cloud {\n  0% {\n    left: -140px;\n  }\n  100% {\n    left: 280px;\n  }\n}\n@keyframes cloud {\n  0% {\n    left: -140px;\n  }\n  100% {\n    left: 280px;\n  }\n}\nhtml {\n  height: 100%;\n  background-color: #222024;\n  background: radial-gradient(circle at center, #47414c 0%, #222024 100%);\n  background-repeat: no-repeat;\n}\nbody {\n  text-align: center;\n  font: normal 100% \"Fira Sans\", sans-serif;\n}\nh2 {\n  font-size: 4vw;\n}\nh2 span {\n  font-size: 60%;\n}\na {\n  color: #aaa;\n}\n.globe {\n  margin: 1em 0 0 0;\n  position: relative;\n  display: inline-block;\n  text-align: left;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 20px solid #f7dbcf;\n  box-sizing: border-box;\n  background: linear-gradient(to bottom, #86aecc 0%, #d4e4ef 100%);\n  overflow: hidden;\n  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3);\n}\n.globe:before, .globe:after {\n  position: absolute;\n  content: \"\";\n  box-sizing: border-box;\n  border-radius: 50%;\n  z-index: 10;\n}\n.globe:before {\n  height: 94%;\n  width: 94%;\n  top: 3%;\n  right: 3%;\n  border: 10px solid transparent;\n  border-right-color: rgba(255, 255, 255, 0.3);\n  border-right-width: 10px;\n  border-right-style: solid;\n}\n.globe:after {\n  top: 50px;\n  right: 65px;\n  width: 10px;\n  height: 10px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.globe .bird {\n  position: absolute;\n  z-index: 1;\n  left: 96px;\n  top: 100px;\n}\n.globe .bird .body {\n  position: absolute;\n  width: 175px;\n  height: 186px;\n  border-radius: 50%;\n  background-clip: padding-box;\n  background-color: #11e7d7;\n  box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.3);\n}\n.globe .bird .body:before, .globe .bird .body:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n  width: 26px;\n  height: 93px;\n  border-radius: 50%;\n  background-color: #11e7d7;\n  box-shadow: inset 0 0 13px rgba(0, 0, 0, 0.3);\n  top: 70px;\n  -webkit-animation: wings 8.5s linear infinite;\n          animation: wings 8.5s linear infinite;\n}\n.globe .bird .body:before {\n  left: 0;\n}\n.globe .bird .body:after {\n  right: 0;\n}\n.globe .bird .body .eye {\n  position: absolute;\n  z-index: 1;\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  top: 28px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: 1px solid #01c7be;\n  box-shadow: inset 0 0 0 1px #01c7be;\n}\n.globe .bird .body .eye:before, .globe .bird .body .eye:after {\n  position: absolute;\n  content: \"\";\n}\n.globe .bird .body .eye:before {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background-color: #000;\n  top: 30px;\n}\n.globe .bird .body .eye:after {\n  width: 200px;\n  height: 200px;\n  background: radial-gradient(ellipse at center, rgba(109, 0, 25, 0) 0%, rgba(130, 1, 31, 0) 35%, #01c7be 36%, #31bfae 100%);\n  -webkit-animation: eyes 8.5s linear infinite;\n          animation: eyes 8.5s linear infinite;\n}\n.globe .bird .body .eye.left {\n  left: 15px;\n}\n.globe .bird .body .eye.left:before {\n  left: 20px;\n}\n.globe .bird .body .eye.left:after {\n  left: -60px;\n  top: -45px;\n}\n.globe .bird .body .eye.right {\n  right: 15px;\n}\n.globe .bird .body .eye.right:before {\n  right: 20px;\n}\n.globe .bird .body .eye.right:after {\n  right: -60px;\n  top: -45px;\n}\n.globe .bird .body .beak {\n  position: absolute;\n  z-index: 1;\n  width: 41px;\n  height: 55px;\n  top: 70px;\n  left: 67px;\n  border-radius: 50%;\n  background-color: #31bfae;\n}\n.globe .bird .body .beak:before {\n  position: absolute;\n  content: \"\";\n  width: inherit;\n  height: inherit;\n  top: 2px;\n  border-radius: 50%;\n  background: #eb9f2d;\n}\n.globe .bird .body .beak:after {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n  width: 37px;\n  height: inherit;\n  top: 12px;\n  left: 2px;\n  border-radius: 50%;\n  background: #31bfae;\n}\n.globe .bird .body .beak div {\n  position: absolute;\n  width: 43px;\n  height: 43px;\n  top: -1px;\n  left: -1px;\n  border-radius: 50% 60% 50% 40%;\n  background-clip: padding-box;\n  background-color: #f7d35d;\n  transform: rotate(-45deg);\n}\n.globe .bird .body .beak div:before {\n  position: absolute;\n  content: \"\";\n  transform: rotate(45deg);\n  width: 17px;\n  height: 8px;\n  top: 10px;\n  left: 20px;\n  border-radius: 50%;\n  background-color: #fff;\n}\n.globe .bird .body .feet {\n  position: absolute;\n  bottom: 15px;\n  width: 100%;\n}\n.globe .bird .body .feet:before, .globe .bird .body .feet:after {\n  position: absolute;\n  content: \"\";\n  width: 27px;\n  height: 21px;\n  border-radius: 50%;\n  background-color: #f8c14d;\n  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.2);\n  -webkit-animation: feet 8.5s linear infinite;\n          animation: feet 8.5s linear infinite;\n}\n.globe .bird .body .feet:before {\n  left: 40px;\n}\n.globe .bird .body .feet:after {\n  right: 40px;\n}\n.globe .wire {\n  position: absolute;\n  z-index: -1;\n  width: 500px;\n  height: 400px;\n  left: -173px;\n  top: -215px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-bottom-color: black;\n}\n.globe .hills {\n  position: absolute;\n  width: 60px;\n  height: 60px;\n  border-radius: 30%;\n  top: 230px;\n  left: 60px;\n  transform: rotate(45deg);\n  background: radial-gradient(ellipse at top left, #aad95d 0%, #bbc369 100%);\n  box-shadow: inset 5px 0 12px rgba(0, 0, 0, 0.2);\n}\n.globe .hills:before, .globe .hills:after {\n  position: absolute;\n  content: \"\";\n  width: 178px;\n  height: 90px;\n  border-radius: 50%;\n  background: inherit;\n  box-shadow: inherit;\n}\n.globe .hills:before {\n  left: -90px;\n  top: 30px;\n  z-index: -1;\n  transform: rotate(-20deg);\n}\n.globe .hills:after {\n  left: 0px;\n  top: -55px;\n  transform: rotate(120deg);\n}\n.globe .cloud {\n  position: absolute;\n  width: 70px;\n  height: 24px;\n  background: linear-gradient(to bottom, #f2f9fe 5%, #d6f0fd 100%);\n  border-radius: 20px;\n  top: -20px;\n  z-index: -1;\n  -webkit-animation: cloud 17s linear infinite;\n          animation: cloud 17s linear infinite;\n}\n.globe .cloud.small {\n  top: -50px;\n  transform: scale(0.6);\n  -webkit-animation-delay: -2.8333333333s;\n          animation-delay: -2.8333333333s;\n  -webkit-animation-duration: 25.5s;\n          animation-duration: 25.5s;\n}\n.globe .cloud:before, .globe .cloud:after {\n  position: absolute;\n  content: \"\";\n  background: inherit;\n  z-index: -1;\n}\n.globe .cloud:before {\n  width: 36px;\n  height: 36px;\n  top: -18px;\n  right: 10px;\n  border-radius: 40px;\n}\n.globe .cloud:after {\n  width: 20px;\n  height: 20px;\n  top: -10px;\n  left: 10px;\n  border-radius: 20px;\n}\n.button-solid {\n  border-radius: 1rem;\n  height: 20rem;\n  width: 96%;\n  font-weight: bold;\n  color: white;\n  background-color: red;\n}\n.button-solid img {\n  border-radius: 1.2rem;\n}\n.new-background-color {\n  --background: #0d5171;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2tpZHMtZ2FtZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlRUSw0RUFBQTtBQWxEUjtFQUNFO0lBR0UsVUFBQTtFQS9NRjtFQWlOQTtJQUNFLFVBQUE7RUEvTUY7RUFpTkE7SUFDRSxVQUFBO0VBL01GO0VBaU5BO0lBRUUsVUFBQTtFQWhORjtFQWtOQTtJQUNFLFVBQUE7RUFoTkY7QUFDRjtBQThMQTtFQUNFO0lBR0UsVUFBQTtFQS9NRjtFQWlOQTtJQUNFLFVBQUE7RUEvTUY7RUFpTkE7SUFDRSxVQUFBO0VBL01GO0VBaU5BO0lBRUUsVUFBQTtFQWhORjtFQWtOQTtJQUNFLFVBQUE7RUFoTkY7QUFDRjtBQWtOQTtFQUNFO0lBR0UsU0FBQTtFQWxORjtFQW9OQTtJQUNFLFNBQUE7RUFsTkY7QUFDRjtBQTBNQTtFQUNFO0lBR0UsU0FBQTtFQWxORjtFQW9OQTtJQUNFLFNBQUE7RUFsTkY7QUFDRjtBQXFOQTtFQUNFO0lBR0UsU0FBQTtFQXJORjtFQXVOQTtJQUNFLFFBQUE7RUFyTkY7QUFDRjtBQTZNQTtFQUNFO0lBR0UsU0FBQTtFQXJORjtFQXVOQTtJQUNFLFFBQUE7RUFyTkY7QUFDRjtBQXVOQTtFQUNFO0lBQ0UsWUFBQTtFQXJORjtFQXVOQTtJQUNFLFdBQUE7RUFyTkY7QUFDRjtBQStNQTtFQUNFO0lBQ0UsWUFBQTtFQXJORjtFQXVOQTtJQUNFLFdBQUE7RUFyTkY7QUFDRjtBQTBOQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVFQUFBO0VBQ0EsNEJBQUE7QUF4TkY7QUEwTkE7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0FBdk5GO0FBeU5BO0VBQ0UsY0FBQTtBQXRORjtBQXVORTtFQUNFLGNBQUE7QUFyTko7QUF3TkE7RUFDRSxXQUFBO0FBck5GO0FBME5BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJB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QUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBNU5KO0FBOE5FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLDBFQUFBO0VBQ0EsK0NBQUE7QUE1Tko7QUE2Tkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTNOTjtBQTZOSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBM05OO0FBNk5JO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQTNOTjtBQStORTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnRUFBQTtFQUdBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0FBL05KO0FBZ09JO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUE5Tk47QUFnT0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUE5Tk47QUFnT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE5Tk47QUFnT0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUE5Tk47QUFtT0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFoT0Y7QUFtT0E7RUFDRSxxQkFBQTtBQWhPRjtBQWtPQTtFQUNFLHFCQUFBO0FBL05GIiwiZmlsZSI6ImtpZHMtZ2FtZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8uY291bnRpbmctbnVtYmVyb25lIHtcbi8vICBmb250LXNpemU6IDEwcmVtO1xuLy8gIGNvbG9yOiAjM2M5OTljZDQ7XG4vL31cbi8vXG4vLy5jb3VudGluZy1udW1iZXJ0d28ge1xuLy8gIGZvbnQtc2l6ZTogMTByZW07XG4vLyAgY29sb3I6ICMzYzk5OWNkNDtcbi8vfVxuLy9cbi8vLmNvdW50aW5nLW51bWJlcmFuc3dlciB7XG4vLyAgZm9udC1zaXplOiAxMHJlbTtcbi8vICBjb2xvcjogIzNjOTk5Y2Q0O1xuLy99XG4vLy5jb3VudGluZy1udW1iZXJlcXVhbCB7XG4vLyAgZm9udC1zaXplOiAxMHJlbTtcbi8vICBjb2xvcjogIzNjOTk5Y2Q0O1xuLy99XG4vLy5jb3VudGluZy1udW1iZXJvcGVyYW5kIHtcbi8vICBmb250LXNpemU6IDEwcmVtO1xuLy8gIGNvbG9yOiAjM2M5OTljZDQ7XG4vL31cbi8vLy9cbi8vLy8uY291bnRpbmcge1xuLy8vLyAgY29sb3I6ICNmNGQwM2Y7XG4vLy8vICBmb250LXNpemU6IDA7XG4vLy8vICBsaW5lLWhlaWdodDogMS41O1xuLy8vL31cbi8vLy9cbi8vLy8uY291bnRpbmcgaW9uLXJvdyBpb24tY29sIHtcbi8vLy8gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vLy8gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbi8vLy99XG4vLy8vXG4vLy8vQGtleWZyYW1lcyBtb3ZlIHtcbi8vLy8gIDAlIHtcbi8vLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwJSwgMCk7XG4vLy8vICB9XG4vLy8vICA1MCUge1xuLy8vLyAgICB0ZXh0LXNoYWRvdzogMCAyNXB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbi8vLy8gIH1cbi8vLy8gIDEwMCUge1xuLy8vLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDApO1xuLy8vLyAgfVxuLy8vL31cbi8vLy9cbi8vLy8uY291bnRpbmcgaW9uLXJvdyBpb24tY29sOm50aC1jaGlsZCgzKSB7XG4vLy8vICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4vLy8vfVxuLy8vL1xuLy8vLy5jb3VudGluZyBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDQpIHtcbi8vLy8gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbi8vLy99XG4vLy8vXG4vLy8vLmNvdW50aW5nIGlvbi1yb3cgaW9uLWNvbDpudGgtY2hpbGQoNSkge1xuLy8vLyAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuLy8vL31cbi8vLy9cbi8vLy8uY291bnRpbmcgaW9uLXJvdyBpb24tY29sOm50aC1jaGlsZCg2KSB7XG4vLy8vICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XG4vLy8vfVxuLy8vL1xuLy8vLy5jb3VudGluZyBpb24tcm93IGlvbi1jb2w6bnRoLWNoaWxkKDcpIHtcbi8vLy8gIGFuaW1hdGlvbi1kZWxheTogMi41cztcbi8vLy99XG4vLy8vXG4vLy8vLmNvdW50aW5nIGlvbi1yb3cgaW9uLWNvbDpudGgtY2hpbGQoOCkge1xuLy8vLyAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbi8vLy99XG4vL1xuLy9cbi8vLmNvbnRhaW5lcntcbi8vICB3aWR0aDogNDAwcHg7XG4vLyAgaGVpZ2h0OiAyMjBweDtcbi8vICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vL31cbi8vXG4vL2lvbi1yb3cge1xuLy8gIGZvbnQtc2l6ZTogNzVweDtcbi8vICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy9cbi8vXG4vLyAgaW9uLWNvbHtcbi8vICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDgwJSk7XG4vLyAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCA4MCUpO1xuLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbi8vICAgIG9wYWNpdHk6IDA7XG4vLyAgICBhbmltYXRpb24tbmFtZTogdGl0bGVBbmltYXRpb247XG4vLyAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7XG4vLyAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuLy8gIH1cbi8vfVxuLy9pb24tcm93IGlvbi1jb2x7XG4vLyAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuLy8gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4vL1xuLy8gICY6Zmlyc3QtY2hpbGR7XG4vLyAgICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XG4vL1xuLy8gIH1cbi8vXG4vLyAgJjpsYXN0LWNoaWxke1xuLy8gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuLy8gIH1cbi8vfVxuLy9cbi8vLy9oMntcbi8vLy8gIHRvcDogMDtcbi8vLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vLy9cbi8vLy8gIHNwYW57XG4vLy8vICAgIGFuaW1hdGlvbi1kZWxheTogNC4xcztcbi8vLy8gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbi8vLy9cbi8vLy8gICAgJjpmaXJzdC1jaGlsZHtcbi8vLy8gICAgICBhbmltYXRpb24tZGVsYXk6IDQuMnM7XG4vLy8vXG4vLy8vICAgIH1cbi8vLy9cbi8vLy8gICAgJjpsYXN0LWNoaWxke1xuLy8vLyAgICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4vLy8vICAgIH1cbi8vLy8gIH1cbi8vLy99XG4vL1xuLy8udXNlY2hyb21le1xuLy8gIGZvbnQtc2l6ZTogMTBweDtcbi8vICBjb2xvcjogI2ZmZjtcbi8vICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBhcmlhbDtcbi8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgYm90dG9tOiAyMHB4O1xuLy8gIHdpZHRoOiAxMDAlO1xuLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICBsZWZ0OiAwO1xuLy99XG4vL1xuLy9Aa2V5ZnJhbWVzIHRpdGxlQW5pbWF0aW9uIHtcbi8vICAwJSB7XG4vLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xuLy8gICAgb3BhY2l0eTogMDtcbi8vICAgIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgODAlKTtcbi8vICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDgwJSk7XG4vLyAgfVxuLy8gIDIwJSB7XG4vLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4vLyAgICBvcGFjaXR5OiAxO1xuLy8gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxNSUpO1xuLy8gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUsIDAgMTUlKTtcbi8vICB9XG4vLyAgODAlIHtcbi8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbi8vICAgIG9wYWNpdHk6IDE7XG4vLyAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDE1JSk7XG4vLyAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSwgMCAxNSUpO1xuLy8gIH1cbi8vICAxMDAlIHtcbi8vICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbi8vICAgIG9wYWNpdHk6IDA7XG4vLyAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgLTAlLCAwIDEwMCUsIDAgMTAwJSk7XG4vLyAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAxMDAlIC0wJSwgMCAxMDAlLCAwIDEwMCUpO1xuLy9cbi8vICB9XG4vL31cblxuJGJpcmRDb2xvcjogIzExZTdkNztcbiRiaXJkQ29sb3IyOiAjMzFiZmFlO1xuJGJpcmRDb2xvcjM6ICMwMWM3YmU7XG4kZmVldENvbG9yOiAjZjhjMTRkO1xuJGJlYWtDb2xvcjogI2Y3ZDM1ZDtcbiRiZWFrQ29sb3IyOiAjZWI5ZjJkO1xuXG4kYmlyZENvbG9yMzogIzAxYzdiZTtcblxuLy8gU3Rvcnlib2FyZCBUaW1lbGluZVxuJHRpbWVsaW5lOiAoXG4gICAgICAgICdiZWdpbicgICAgICAgICA6IDBzLFxuICAgICAgICAnZXllLXAwLTEnICAgICAgOiAwLjRzLFxuICAgICAgICAnZXllLXAxLTEnICAgICAgOiAwLjRzLFxuICAgICAgICAnZXllLXA0LTEnICAgICAgOiAxLjhzLFxuICAgICAgICAnZXllLXAzLTEnICAgICAgOiAwLjRzLFxuICAgICAgICAnZXllLXA0LTInICAgICAgOiAxcyxcbiAgICAgICAgJ2V5ZS1wMi0xJyAgICAgIDogMC4xcyxcbiAgICAgICAgJ2VuZCcgICAgICAgICAgIDogMC40c1xuKTtcblxuXG4vLyAkdG90YWx0aW1lOiAgICAgICAgICAgIFRvdGFsIG9mIGFsbCB0aW1lY29kZXMgaW4gJHRpbWVsaW5lXG4vLyAkdGltZWxpbmVBY2N1bXVsYXRlZDogIEFjY3VtdWxhdGVkIHRpbWVsaW5lIG1hcCBiYXNlZCBvbiAkdGltZWxpbmVcbiR0b3RhbHRpbWU6IDRzO1xuJHRpbWVsaW5lQWNjdW11bGF0ZWQ6ICgpO1xuQGVhY2ggJGtleSwgJHRpbWUgaW4gJHRpbWVsaW5lIHtcbiAgJHRvdGFsdGltZTogJHRvdGFsdGltZSArICR0aW1lO1xuICAkdGltZWxpbmVBY2N1bXVsYXRlZDogbWFwLW1lcmdlKCR0aW1lbGluZUFjY3VtdWxhdGVkLCAoJGtleSA6ICR0b3RhbHRpbWUpICk7XG59XG5cbi8vIFRpbWVjb2RlIHRvIFBlcmNlbnQgZnVuY3Rpb25cbi8vIFBhcmFtczpcbi8vICAka2V5OiAgICAga2V5L3Bvc2l0aW9uIGluIHRpbWVsaW5lXG4vLyAgJG9mZnNldDogIG9wdGlvbmFsIG9mZnNldCB0byBhZGQgdG8gdGltZSBmcm9tIHRpbWVsaW5lICh1c2UgbmVnYXRpdmUgbnVtYmVyIHRvIHN1YnRyYWN0KVxuLy8gUmV0dXJuOiAgICBQZXJjZW50YWdlIHZhbHVlIG9mIGtleXBvc2l0aW9uIGluIHRpbWVsaW5lLlxuQGZ1bmN0aW9uIHRwKCRrZXksICRvZmZzZXQ6IDBzKSB7XG4gIEByZXR1cm4gKG1hcC1nZXQoJHRpbWVsaW5lQWNjdW11bGF0ZWQsICRrZXkpICsgJG9mZnNldCkgLyAkdG90YWx0aW1lICogMTAwJTtcbn1cblxuXG5Aa2V5ZnJhbWVzIGV5ZXMge1xuICAje3RwKCdiZWdpbicpfSxcbiAgI3t0cCgnZXllLXAwLTEnKX0sXG4gICN7dHAoJ2VuZCcpfSB7XG4gICAgdG9wOiAtNTBweDtcbiAgfVxuICAje3RwKCdleWUtcDEtMScpfSB7XG4gICAgdG9wOiAtNDVweDtcbiAgfVxuICAje3RwKCdleWUtcDItMScpfSB7XG4gICAgdG9wOiAtMjBweDtcbiAgfVxuICAje3RwKCdleWUtcDQtMScpfSxcbiAgI3t0cCgnZXllLXA0LTInKX0ge1xuICAgIHRvcDogLTE1cHg7XG4gIH1cbiAgI3t0cCgnZXllLXAzLTEnKX0ge1xuICAgIHRvcDogLTI1cHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgd2luZ3Mge1xuICAje3RwKCdiZWdpbicpfSxcbiAgI3t0cCgnZXllLXA0LTInKX0sXG4gICN7dHAoJ2VuZCcpfSB7XG4gICAgdG9wOiA3MHB4O1xuICB9XG4gICN7dHAoJ2V5ZS1wMi0xJyl9IHtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmZWV0IHtcbiAgI3t0cCgnYmVnaW4nKX0sXG4gICN7dHAoJ2V5ZS1wNC0yJyl9LFxuICAje3RwKCdlbmQnKX0ge1xuICAgIHRvcDogLTJweDtcbiAgfVxuICAje3RwKCdleWUtcDItMScpfSB7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2xvdWQge1xuICAwJSB7XG4gICAgbGVmdDogLTE0MHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IDI4MHB4O1xuICB9XG59XG5cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMGl0YWxpYyk7XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsMzIsMzYsMSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDcxLDY1LDc2LDEpIDAlLHJnYmEoMzQsMzIsMzYsMSkgMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250OiBub3JtYWwgMTAwJSAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiA0dnc7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogNjAlO1xuICB9XG59XG5hIHtcbiAgY29sb3I6ICNhYWE7XG59XG5cblxuXG4uZ2xvYmUge1xuICBtYXJnaW46IDFlbSAwIDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNmN2RiY2Y7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMTM0LDE3NCwyMDQsMSkgMCUscmdiYSgyMTIsMjI4LDIzOSwxKSAxMDAlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDgwcHggcmdiYSgwLDAsMCwuNSksXG4gIDAgMCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xuICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGhlaWdodDogOTQlO1xuICAgIHdpZHRoOiA5NCU7XG4gICAgdG9wOjMlO1xuICAgIHJpZ2h0OiAzJTtcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcblxuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICByaWdodDogNjVweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMyk7XG4gIH1cbiAgLmJpcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDk2cHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICAuYm9keSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTc1cHg7XG4gICAgICBoZWlnaHQ6IDE4NnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiaXJkQ29sb3I7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgODBweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgIGhlaWdodDogOTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmlyZENvbG9yO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTNweCByZ2JhKDAsMCwwLC4zKTtcbiAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICBhbmltYXRpb246IHdpbmdzICR0b3RhbHRpbWUgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgLmV5ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgdG9wOjI4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJpcmRDb2xvcjM7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAkYmlyZENvbG9yMztcbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlcixcbiAgICAgICAgICAgICAgICAgIHJnYmEoMTA5LDAsMjUsMCkgMCUsXG4gICAgICAgICAgICAgICAgICByZ2JhKDEzMCwxLDMxLDApIDM1JSxcbiAgICAgICAgICAgICAgICAgICRiaXJkQ29sb3IzIDM2JSxcbiAgICAgICAgICAgICAgICAgICRiaXJkQ29sb3IyIDEwMCUpO1xuICAgICAgICAgIGFuaW1hdGlvbjogZXllcyAkdG90YWx0aW1lIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAmLmxlZnQge1xuICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiAtNjBweDtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtNjBweDtcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYmVhayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgd2lkdGg6IDQxcHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgdG9wOiA3MHB4O1xuICAgICAgICBsZWZ0OiA2N3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiaXJkQ29sb3IyO1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmVha0NvbG9yMjtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB3aWR0aDogMzdweDtcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGJpcmRDb2xvcjI7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDQzcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA2MCUgNTAlICA0MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmVha0NvbG9yO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5mZWV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDI3cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmVldENvbG9yO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMnB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgIGFuaW1hdGlvbjogZmVldCAkdG90YWx0aW1lIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAud2lyZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGxlZnQ6IC0xNzNweDtcbiAgICB0b3A6IC0yMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIH1cbiAgLmhpbGxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICB0b3A6IDIzMHB4O1xuICAgIGxlZnQ6IDYwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IHRvcCBsZWZ0LCByZ2JhKDE3MCwyMTcsOTMsMSkgMCUscmdiYSgxODcsMTk1LDEwNSwxKSAxMDAlKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCA1cHggMCAxMnB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTc4cHg7XG4gICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgYm94LXNoYWRvdzogaW5oZXJpdDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogLTkwcHg7XG4gICAgICB0b3A6IDMwcHg7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgdG9wOiAtNTVweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgfVxuICB9XG5cbiAgLmNsb3VkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sXG4gICAgICAgICAgICByZ2JhKDI0MiwyNDksMjU0LDEpIDUlLFxuICAgICAgICAgICAgcmdiYSgyMTQsMjQwLDI1MywxKSAxMDAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRvcDotMjBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBhbmltYXRpb246IGNsb3VkICR0b3RhbHRpbWUqMiBsaW5lYXIgaW5maW5pdGU7XG4gICAgJi5zbWFsbCB7XG4gICAgICB0b3A6LTUwcHg7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC42KTtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLSR0b3RhbHRpbWUvMztcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHRvdGFsdGltZSozO1xuICAgIH1cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIHRvcDogLTE4cHg7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IC0xMHB4O1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24tc29saWR7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGhlaWdodDogMjByZW07XG4gIHdpZHRoOiA5NiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJ1dHRvbi1zb2xpZCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XG59XG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gIC0tYmFja2dyb3VuZDogIzBkNTE3MTtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "DtG1":
    /*!*************************************************!*\
      !*** ./src/app/kids-games/kids-games.module.ts ***!
      \*************************************************/

    /*! exports provided: KidsGamesPageModule */

    /***/
    function DtG1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KidsGamesPageModule", function () {
        return KidsGamesPageModule;
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


      var _kids_games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kids-games-routing.module */
      "//iL");
      /* harmony import */


      var _kids_games_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./kids-games.page */
      "KwZy");

      var KidsGamesPageModule = function KidsGamesPageModule() {
        _classCallCheck(this, KidsGamesPageModule);
      };

      KidsGamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kids_games_routing_module__WEBPACK_IMPORTED_MODULE_5__["KidsGamesPageRoutingModule"]],
        declarations: [_kids_games_page__WEBPACK_IMPORTED_MODULE_6__["KidsGamesPage"]]
      })], KidsGamesPageModule);
      /***/
    },

    /***/
    "JoYn":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kids-games/kids-games.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function JoYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">පොඩ්ඩොන්ගෙ හපන්කම් බලමු </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [style.background-color]=\"bgcolor\">\n  <div style=\"background-color: #2f2d2d;\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" routerLink=\"/sinhala-akuru-liyamu\" class=\"button-solid\" style=\"background-color: #174c4f\">\n          <span> සිංහල</span><br/>\n        <span>හෝඩිය</span>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" routerLink=\"/english-akuru-liyamu\" class=\"button-solid\" style=\"background-color: #EA1889\">\n          English Alphabet\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" routerLink=\"/ilakkam-liyamu\" class=\"button-solid\" style=\"background-color: #FFC65C\">\n          ඉලක්කම් හුරුව\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" routerLink=\"/roopa-soyamu\" class=\"button-solid\" style=\"background-color: #00AFD1\">\n          රූප සොයමු\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n<!--  <button ion-button (click)=\"start()\">Say a color</button>-->\n\n<!--  <ion-card>-->\n<!--    <ion-card-content>-->\n<!--      <ion-card-title>-->\n<!--        <button ion-button primary (click)=\"stopRecord()\" *ngIf=\"recording\"><ion-icon name=\"mic-off\"></ion-icon>&nbsp;&nbsp;Stop Record</button>-->\n<!--        <button ion-button primary (click)=\"startRecord()\" *ngIf=\"!recording\"><ion-icon name=\"mic\"></ion-icon>&nbsp;&nbsp;Start Record</button>-->\n<!--      </ion-card-title>-->\n<!--    </ion-card-content>-->\n<!--  </ion-card>-->\n<!--  <ion-list>-->\n<!--    <ion-item *ngFor=\"let audio of audioList; index as i;\">-->\n<!--      <p>{{audio.filename}}</p>-->\n<!--      <button ion-button clear item-end large (click)=\"playAudio(audio.filename, i)\"><ion-icon name=\"play\"></ion-icon></button>-->\n<!--    </ion-item>-->\n<!--  </ion-list>-->\n\n<!--  <div class=\"container\">-->\n<!--    <ion-row class=\"title\">-->\n<!--      <ion-col size=\"1\" ></ion-col>-->\n<!--      <ion-col size=\"2\" class=\"counting-numberone\">{{number0ne}}</ion-col>-->\n<!--      <ion-col size=\"2\" class=\"counting-numberoperand\">{{operand}}</ion-col>-->\n<!--      <ion-col size=\"2\" class=\"counting-numbertwo\">{{numbertwo}}</ion-col>-->\n<!--      <ion-col size=\"2\" class=\"counting-numberequal\"><span>=</span></ion-col>-->\n<!--      <ion-col size=\"2\" class=\"counting-numberanswer\"><span>?</span></ion-col>-->\n<!--      <ion-col size=\"1\"></ion-col>-->\n<!--    </ion-row>-->\n<!--  </div>-->\n<!--  <div>-->\n<!--    <ion-row>-->\n<!--      <ion-col ></ion-col>-->\n<!--    </ion-row>-->\n<!--  </div>-->\n\n<!--  <section class=\"container\">-->\n<!--    <h1 class=\"title\">-->\n<!--      <span>Hi, nice</span>-->\n<!--      <span>to see</span>-->\n<!--      <span>you here</span>-->\n<!--    </h1>-->\n\n<!--    <h2 class=\"title\">-->\n<!--      <span>This is</span>-->\n<!--      <span>a long</span>-->\n<!--      <span>sub title</span>-->\n\n\n<!--    </h2>-->\n<!--  </section>-->\n\n<!--  <div class=\"globe\">-->\n<!--    <div class=\"bird\">-->\n<!--      <div class=\"body\">-->\n<!--        <div class=\"eye left\"></div>-->\n<!--        <div class=\"eye right\"></div>-->\n<!--        <div class=\"beak\"><div></div></div>-->\n<!--        <div class=\"feet\"></div>-->\n<!--        <div class=\"wire\"></div>-->\n<!--      </div>-->\n<!--      <div class=\"hills\"></div>-->\n<!--      <div class=\"cloud\"></div>-->\n<!--      <div class=\"cloud small\"></div>-->\n<!--    </div>-->\n<!--  </div>-->\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\"></ion-footer>\n\n";
      /***/
    },

    /***/
    "KwZy":
    /*!***********************************************!*\
      !*** ./src/app/kids-games/kids-games.page.ts ***!
      \***********************************************/

    /*! exports provided: KidsGamesPage */

    /***/
    function KwZy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KidsGamesPage", function () {
        return KidsGamesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_kids_games_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./kids-games.page.html */
      "JoYn");
      /* harmony import */


      var _kids_games_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./kids-games.page.scss */
      "6Akk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/speech-recognition/ngx */
      "VGJl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var KidsGamesPage = /*#__PURE__*/function () {
        function KidsGamesPage(speechRecognition, media, file, platform) {
          _classCallCheck(this, KidsGamesPage);

          this.speechRecognition = speechRecognition;
          this.media = media;
          this.file = file;
          this.platform = platform;
          this.number0ne = 0;
          this.numbertwo = 0;
          this.answer = 0;
          this.operand = '+';
          this.bgcolor = 'white';
          this.recording = false;
          this.audioList = [];
        }

        _createClass(KidsGamesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.speechRecognition.hasPermission()
            //     .then((hasPermission: boolean) => {
            //
            //       if (!hasPermission) {
            //         this.speechRecognition.requestPermission()
            //             .then(
            //                 () => console.log('Granted'),
            //                 () => console.log('Denied')
            //             )
            //       }
            //
            //     });
          }
        }]);

        return KidsGamesPage;
      }();

      KidsGamesPage.ctorParameters = function () {
        return [{
          type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      KidsGamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-kids-games',
        template: _raw_loader_kids_games_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kids_games_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], KidsGamesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=kids-games-kids-games-module-es5.js.map