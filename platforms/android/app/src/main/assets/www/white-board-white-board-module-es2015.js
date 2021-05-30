(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["white-board-white-board-module"],{

/***/ "845F":
/*!***************************************************!*\
  !*** ./src/app/white-board/white-board.module.ts ***!
  \***************************************************/
/*! exports provided: WhiteBoardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPageModule", function() { return WhiteBoardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _white_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-board-routing.module */ "YeJB");
/* harmony import */ var _white_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./white-board.page */ "xCC9");







let WhiteBoardPageModule = class WhiteBoardPageModule {
};
WhiteBoardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _white_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["WhiteBoardPageRoutingModule"]
        ],
        declarations: [_white_board_page__WEBPACK_IMPORTED_MODULE_6__["WhiteBoardPage"]]
    })
], WhiteBoardPageModule);



/***/ }),

/***/ "JE9E":
/*!***************************************************!*\
  !*** ./src/app/white-board/white-board.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas {\n  border: 1px solid #bbb2b2;\n}\n\n.color-block {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3doaXRlLWJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoid2hpdGUtYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NywgMTc4LCAxNzgpO1xufVxuXG4uY29sb3ItYmxvY2sge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "Wu3u":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/white-board/white-board.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>white-board</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col *ngFor=\"let color of colors\" [style.background]=\"color\" class=\"color-block\" tappable\n             (click)=\"selectColor(color)\"></ion-col>\n  </ion-row>\n  <ion-radio-group [(ngModel)]=\"selectedColor\">\n    <ion-row>\n      <ion-col *ngFor=\"let color of colors\" class=\"ion-text-center\">\n        <ion-radio [value]=\"color\"></ion-radio>\n      </ion-col>\n    </ion-row>\n  </ion-radio-group>\n\n  <ion-range min=\"2\" max=\"20\" color=\"primary\" [(ngModel)]=\"lineWidth\">\n    <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>\n    <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n  </ion-range>\n\n  <canvas #imageCanvas (mousedown)=\"startDrawing($event)\" (touchstart)=\"startDrawing($event)\"\n          (touchmove)=\"moved($event)\" (mousemove)=\"moved($event)\" (mouseup)=\"endDrawing()\" (touchend)=\"endDrawing()\"></canvas>\n\n</ion-content>\n");

/***/ }),

/***/ "YeJB":
/*!***********************************************************!*\
  !*** ./src/app/white-board/white-board-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WhiteBoardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPageRoutingModule", function() { return WhiteBoardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _white_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./white-board.page */ "xCC9");




const routes = [
    {
        path: '',
        component: _white_board_page__WEBPACK_IMPORTED_MODULE_3__["WhiteBoardPage"]
    }
];
let WhiteBoardPageRoutingModule = class WhiteBoardPageRoutingModule {
};
WhiteBoardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WhiteBoardPageRoutingModule);



/***/ }),

/***/ "xCC9":
/*!*************************************************!*\
  !*** ./src/app/white-board/white-board.page.ts ***!
  \*************************************************/
/*! exports provided: WhiteBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardPage", function() { return WhiteBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_white_board_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./white-board.page.html */ "Wu3u");
/* harmony import */ var _white_board_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./white-board.page.scss */ "JE9E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let WhiteBoardPage = class WhiteBoardPage {
    constructor(plt) {
        this.plt = plt;
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.drawing = false;
        this.lineWidth = 5;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // Set the Canvas Element and its size
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.plt.width() + '';
        this.canvasElement.height = 200;
    }
    selectColor(color) {
        this.selectedColor = color;
    }
    startDrawing(ev) {
        this.drawing = true;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        this.saveX = ev.changedTouches[0].pageX - canvasPosition.x;
        this.saveY = ev.changedTouches[0].pageY - canvasPosition.y;
    }
    endDrawing() {
        this.drawing = false;
    }
    moved(ev) {
        if (!this.drawing)
            return;
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        let ctx = this.canvasElement.getContext('2d');
        let currentX = ev.changedTouches[0].pageX - canvasPosition.x;
        let currentY = ev.changedTouches[0].pageY - canvasPosition.y;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.selectedColor;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.saveX, this.saveY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.stroke();
        this.saveX = currentX;
        this.saveY = currentY;
    }
};
WhiteBoardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
WhiteBoardPage.propDecorators = {
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['imageCanvas', { static: false },] }]
};
WhiteBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-white-board',
        template: _raw_loader_white_board_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_white_board_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WhiteBoardPage);



/***/ })

}]);
//# sourceMappingURL=white-board-white-board-module-es2015.js.map