import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonSlides, Platform} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";
import {SignaturePad} from "angular2-signaturepad";

@Component({
  selector: 'app-english-akuru-liyamu',
  templateUrl: './english-akuru-liyamu.page.html',
  styleUrls: ['./english-akuru-liyamu.page.scss'],
})
export class EnglishAkuruLiyamuPage implements OnInit {
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
  lastX: number;
  lastY: number;

  currentColour: string = '#1abc9c';
  availableColours: any;

  brushSize: number = 10;
  saveY: number;
  selectedColor = '#9e2956';

  colors = [ '#ffffff', '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' , '#000000'];

  drawing = false;
  lineWidth = 5;
  number = 27;

  play_music = false;

  constructor(private platform: Platform, private nativeAudio: NativeAudio, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId4', 'assets/mp3/background-music/song5.mp3', 1, 1, 0).then(function(success) {
      }, function(err) {
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
    ( this.number < 52)? this.number += 1: this.number = 52;
    // this.slides.slideNext();
    this.loadImage();
  }

  prev(){
    (this.number > 27) ? this.number -= 1 : this.number = 27;
    // this.slides.slidePrev();
    this.loadImage();

  }

  changeSize(size){
    this.lineWidth = size;
    this.signaturePad.set('minWidth', size);
  }

  loadImage() {
    var background = new Image();
    background.src = '../../assets/English-letters-liyamu/My%20Post('+this.number+').png';
    // background.src = src;
    let ctx = this.canvasElement.getContext('2d');

    background.onload = () => {
      ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height);
    }
  }


  playMusic() {
    this.play_music = true;
    this.nativeAudio.stop('uniqueId4');
  }

  stopMusic() {
    this.play_music = false;
    this.nativeAudio.play("uniqueId4");
  }

  refresh() {
    this.signaturePad.clear();
    this.loadImage();
  }

  loadMusic() {
    this.nativeAudio.play('uniqueId4');
    this.nativeAudio.loop('uniqueId4');
  }

  ionViewWillLeave() {
    this.nativeAudio.stop('uniqueId4');
  }

}
