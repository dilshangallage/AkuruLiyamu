(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sinhala-akuru-liyamu-sinhala-akuru-liyamu-module"],{

/***/ "5r9F":
/*!*********************************************************************!*\
  !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("canvas-draw {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\ncanvas-draw #top-toolbar {\n  position: absolute;\n  top: 0;\n}\ncanvas-draw #bottom-toolbar {\n  position: absolute;\n  bottom: 0;\n}\n.color-block {\n  height: 40px;\n}\n.toolbar-background {\n  background-color: red !important;\n}\n.new-background-color {\n  --background: #0d5171;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpbmhhbGEtYWt1cnUtbGl5YW11LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7QUFDRjtBQUVBO0VBQ0UsZ0NBQUE7QUFDRjtBQUNBO0VBQ0UscUJBQUE7QUFFRiIsImZpbGUiOiJzaW5oYWxhLWFrdXJ1LWxpeWFtdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMtZHJhdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAjdG9wLXRvb2xiYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICAjYm90dG9tLXRvb2xiYXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuXG4uY29sb3ItYmxvY2sge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQhaW1wb3J0YW50O1xufVxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAtLWJhY2tncm91bmQ6ICMwZDUxNzE7XG59XG4iXX0= */");

/***/ }),

/***/ "QeNb":
/*!*****************************************************************************!*\
  !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SinhalaAkuruLiyamuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPageRoutingModule", function() { return SinhalaAkuruLiyamuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sinhala-akuru-liyamu.page */ "rZr3");




const routes = [
    {
        path: '',
        component: _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_3__["SinhalaAkuruLiyamuPage"]
    }
];
let SinhalaAkuruLiyamuPageRoutingModule = class SinhalaAkuruLiyamuPageRoutingModule {
};
SinhalaAkuruLiyamuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SinhalaAkuruLiyamuPageRoutingModule);



/***/ }),

/***/ "rZr3":
/*!*******************************************************************!*\
  !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.ts ***!
  \*******************************************************************/
/*! exports provided: SinhalaAkuruLiyamuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPage", function() { return SinhalaAkuruLiyamuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sinhala_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sinhala-akuru-liyamu.page.html */ "w+Pe");
/* harmony import */ var _sinhala_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sinhala-akuru-liyamu.page.scss */ "5r9F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");






let SinhalaAkuruLiyamuPage = class SinhalaAkuruLiyamuPage {
    constructor(platform, nativeAudio, alertCtrl) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.alertCtrl = alertCtrl;
        this.currentColour = '#1abc9c';
        this.brushSize = 10;
        this.selectedColor = '#9e2956';
        this.colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];
        this.drawing = false;
        this.lineWidth = 5;
        this.number = -1;
        this.play_music = false;
        this.presentAlert('OK');
        platform.ready().then(() => {
            this.nativeAudio.preloadComplex('uniqueId2', 'assets/mp3/sinhala-akuru/sinhala-hodiya.mp3', 1, 1, 0).then(function (success) {
                this.presentAlert('Success');
            }, function (err) {
                this.presentAlert('Error');
            });
        });
        // this.nativeAudio.preloadComplex('trackID', 'mp3/sinhala-akuru/sinhala-hodiya.mp3', 1, 1, 0).then(function() {
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
        this.availableColours = [
            '#1abc9c',
            '#3498db',
            '#9b59b6',
            '#e67e22',
            '#e74c3c'
        ];
    }
    ngOnInit() {
        this.presentAlert('YOOOOOOOOOOOOOOOOOOOO');
    }
    ngAfterViewInit() {
        // this.canvasElement = this.canvas.nativeElement;
        //
        // this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
        // this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.platform.width() + '';
        this.canvasElement.height = this.platform.height() + '';
        this.loadImage();
    }
    next() {
        (this.number < 26) ? this.number += 1 : this.number = 26;
        // this.slides.slideNext();
        this.loadImage();
    }
    prev() {
        (this.number > 0) ? this.number -= 1 : this.number = -1;
        // this.slides.slidePrev();
        this.loadImage();
    }
    refresh() {
        this.loadImage();
    }
    changeColour(colour) {
        this.currentColour = colour;
    }
    changeSize(size) {
        this.lineWidth = size;
    }
    handleStart(ev) {
        this.lastX = ev.touches[0].pageX;
        this.lastY = ev.touches[0].pageY;
    }
    handleMove(ev) {
        let ctx = this.canvasElement.getContext('2d');
        let currentX = ev.touches[0].pageX;
        let currentY = ev.touches[0].pageY;
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.strokeStyle = this.selectedColor;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    }
    handleEnd(ev) {
        console.log(ev);
    }
    clearCanvas() {
        let ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    loadImage() {
        var background = new Image();
        background.src = '../../assets/Sinhala-akuru-liyamu/My%20Post(' + this.number + ').png';
        // background.src = src;
        let ctx = this.canvasElement.getContext('2d');
        background.onload = () => {
            ctx.drawImage(background, 0, 0, this.canvasElement.width, this.canvasElement.height);
        };
    }
    selectColor(color) {
        this.selectedColor = color;
    }
    playMusic() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.play_music = true;
            console.log('&&&&&&&&');
            this.nativeAudio.play('uniqueId1');
            this.nativeAudio.stop('uniqueId2');
            this.presentAlert(this.nativeAudio);
        });
    }
    stopMusic() {
        this.play_music = false;
        this.nativeAudio.stop('uniqueId1');
        this.nativeAudio.play('uniqueId2');
        this.presentAlert(this.nativeAudio);
    }
    presentAlert(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'basic-alert',
                header: 'Alert Header',
                subHeader: 'Alert Subtitle',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
SinhalaAkuruLiyamuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeAudio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SinhalaAkuruLiyamuPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mySlider', { static: true },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['myCanvas1',] }]
};
SinhalaAkuruLiyamuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sinhala-akuru-liyamu',
        template: _raw_loader_sinhala_akuru_liyamu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sinhala_akuru_liyamu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SinhalaAkuruLiyamuPage);



/***/ }),

/***/ "w+Pe":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" class=\"ion-color-primary \">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title  style=\"color: white\">සිංහල  හෝඩිය </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!--<div>-->\n<!--  <ion-slides>-->\n<!--    <ion-slide #mySlider>-->\n<!--      <canvas #myCanvas1 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>-->\n<!--    </ion-slide>-->\n<!--    <ion-slide>-->\n<!--      <canvas #myCanvas2 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>-->\n<!--    </ion-slide>-->\n<!--  </ion-slides>-->\n<!--</div>-->\n\n  <div>\n    <ion-row>\n      <ion-range min=\"2\" max=\"20\" color=\"primary\" [(ngModel)]=\"lineWidth\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"brush\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"brush\"></ion-icon>\n      </ion-range>\n    </ion-row>\n  </div>\n  <div style=\"height: 80%\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-row *ngFor=\"let color of colors\" [style.background]=\"color\" class=\"color-block\" tappable\n                 (click)=\"selectColor(color)\">\n<!--          <ion-col *ngFor=\"let color of colors\" [style.background]=\"color\" class=\"color-block\" tappable-->\n<!--                   (click)=\"selectColor(color)\"></ion-col>-->\n        </ion-row>\n<!--        <ion-radio-group [(ngModel)]=\"selectedColor\">-->\n<!--          <ion-row *ngFor=\"let color of colors\" class=\"ion-text-center\">-->\n<!--&lt;!&ndash;            <ion-col *ngFor=\"let color of colors\" class=\"ion-text-center\">&ndash;&gt;-->\n<!--              <ion-radio [value]=\"color\"></ion-radio>-->\n<!--&lt;!&ndash;            </ion-col>&ndash;&gt;-->\n<!--          </ion-row>-->\n<!--        </ion-radio-group>-->\n      </ion-col>\n      <ion-col size=\"10\">\n        <canvas #myCanvas1 (touchstart)=\"handleStart($event)\" (touchmove)=\"handleMove($event)\" (touched)=\"handleEnd($event)\"></canvas>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #083e58d6\">\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev\" (click)=\"prev()\">Prev</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev\" (click)=\"playMusic()\" *ngIf=\"!play_music\">\n        <ion-icon name=\"musical-notes-outline\"></ion-icon>\n      </ion-button>\n      <ion-button type=\"submit\" float-left ion-button  color=\"primary\" class=\"btnPrev\" (click)=\"stopMusic()\" *ngIf=\"play_music\">\n        <ion-icon name=\"play-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\">\n      <ion-button type=\"submit\" float-right ion-button color=\"primary\" class=\"btnNext\" (click)=\"refresh()\">\n        <ion-icon name=\"refresh-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col style=\"text-align: end\">\n      <ion-button type=\"submit\" float-right ion-button color=\"primary\" class=\"btnNext\" (click)=\"next()\">Next</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "x+i4":
/*!*********************************************************************!*\
  !*** ./src/app/sinhala-akuru-liyamu/sinhala-akuru-liyamu.module.ts ***!
  \*********************************************************************/
/*! exports provided: SinhalaAkuruLiyamuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinhalaAkuruLiyamuPageModule", function() { return SinhalaAkuruLiyamuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sinhala_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sinhala-akuru-liyamu-routing.module */ "QeNb");
/* harmony import */ var _sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sinhala-akuru-liyamu.page */ "rZr3");







let SinhalaAkuruLiyamuPageModule = class SinhalaAkuruLiyamuPageModule {
};
SinhalaAkuruLiyamuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sinhala_akuru_liyamu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinhalaAkuruLiyamuPageRoutingModule"]
        ],
        declarations: [_sinhala_akuru_liyamu_page__WEBPACK_IMPORTED_MODULE_6__["SinhalaAkuruLiyamuPage"]]
    })
], SinhalaAkuruLiyamuPageModule);



/***/ })

}]);
//# sourceMappingURL=sinhala-akuru-liyamu-sinhala-akuru-liyamu-module-es2015.js.map