import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonSlides, Platform} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";
import {SignaturePad} from "angular2-signaturepad";

@Component({
  selector: 'app-sinhala-akuru-liyamu',
  templateUrl: './sinhala-akuru-liyamu.page.html',
  styleUrls: ['./sinhala-akuru-liyamu.page.scss'],
})
export class SinhalaAkuruLiyamuPage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor

    'minWidth': 5,
    'color': 'red',
    'canvasWidth': 600,
    'canvasHeight': 600
  };


  @ViewChild('mySlider', {static: true})  slides: IonSlides;

  @ViewChild('myCanvas1') canvas: any;

  canvasElement: any;

  currentColour: string = '#1abc9c';
  availableColours: any;

  brushSize: number = 10;
  saveY: number;
  selectedColor = '#9e2956';

  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];

  drawing = false;
  lineWidth = 5;
  number = -1;

  play_music = false;

  constructor(private platform: Platform, private nativeAudio: NativeAudio, private alertCtrl: AlertController) {
    // this.presentAlert('OK');
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId3', 'assets/mp3/background-music/song6.mp3', 1, 1, 0).then(function(success) {
        // this.presentAlert('Success');
      }, function(err) {
        // this.presentAlert('Error');
      });

    });

    this.availableColours = [
      '#1abc9c',
      '#3498db',
      '#9b59b6',
      '#e67e22',
      '#e74c3c'
    ];
  }

  ngOnInit() {

  }

  changePenSize() {
    this.signaturePad.set('minWidth', this.lineWidth);
  }

  selectColor(color) {
    this.signaturePad.set('penColor', color);
  }

  resizeSignaturePad() {
    // this.signaturePad.set('canvasWidth', document.getElementById("sign_canvas").offsetWidth);
    this.canvasElement.width = this.platform.width() -100 + '';
    this.canvasElement.height = this.platform.height() -200 + '';
    // this.signaturePad.clear();
    this.loadImage();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loadMusic();
    }, 500);
    // this.nativeAudio.loop('homePageBackground');
  }

  ngAfterViewInit(){

    var wrapper = document.getElementById("signature-pad");
    this.canvasElement = wrapper.querySelector("canvas");

    this.canvasElement.width = this.platform.width() -100 + '';
    this.canvasElement.height = this.platform.height() -200 + '';
    this.signaturePad.set('minWidth', this.lineWidth); // set szimek/signature_pad options at runtime
    this.signaturePad.clear();
    this.loadImage();
  }
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }


  next(){
    ( this.number < 26)? this.number += 1: this.number = 26;
    // this.slides.slideNext();
    this.loadImage();
  }

  prev(){
    (this.number > 0) ? this.number -= 1 : this.number = -1;
    // this.slides.slidePrev();
    this.loadImage();

  }

  changeSize(size){
    this.lineWidth = size;
    this.signaturePad.set('minWidth', size);
  }

  loadImage() {
    var background = new Image();
    background.src = '../../assets/Sinhala-akuru-liyamu/My%20Post('+this.number+').png';
    // background.src = src;
    let ctx = this.canvasElement.getContext('2d');

    background.onload = () => {
      ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height);
    }
  }

  playMusic() {
    this.play_music = true;
    this.nativeAudio.stop('uniqueId3');
  }

  stopMusic() {
    this.play_music = false;
    this.nativeAudio.play("uniqueId3");
  }

  refresh() {
    this.signaturePad.clear();
    this.loadImage();
  }

  loadMusic() {
    this.nativeAudio.play('uniqueId3');
    this.nativeAudio.loop('uniqueId3');
  }

  ionViewWillLeave() {
    this.nativeAudio.stop('uniqueId3');
  }

}
