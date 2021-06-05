import {Component, OnInit, ViewChild} from '@angular/core';
import {SignaturePad} from "angular2-signaturepad";
import {AlertController, IonSlides, ModalController, Platform} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";
import {EraserComponent} from "../eraser/eraser.component";

@Component({
  selector: 'app-roopa-soyamu',
  templateUrl: './roopa-soyamu.page.html',
  styleUrls: ['./roopa-soyamu.page.scss'],
})
export class RoopaSoyamuPage implements OnInit {
  redoList = [];

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

  colors = [ '#000000', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];

  drawing = false;
  lineWidth = 5;
  color = 'black';
  number = 53;
  disabled_pencil = false;

  play_music = false;

  constructor(private platform: Platform, private nativeAudio: NativeAudio, private alertCtrl: AlertController, private modalController: ModalController) {
    // this.presentAlert('OK');
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId2', 'assets/mp3/background-music/song2.mp3', 1, 1, 0).then(function(success) {
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
    this.signaturePad.set('penColor', this.color);
  }

  selectColor(color) {
    this.color = color;
    this.signaturePad.set('penColor', color);
  }

  resizeSignaturePad() {
    // this.signaturePad.set('canvasWidth', document.getElementById("sign_canvas").offsetWidth);
    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = this.platform.height() -250 + '';
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

    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = this.platform.height() -250 + '';
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
    ( this.number < 63)? this.number += 1: this.number = 63;
    // this.slides.slideNext();
    this.loadImage();
  }

  prev(){
    (this.number > 53) ? this.number -= 1 : this.number = 53;
    // this.slides.slidePrev();
    this.loadImage();

  }

  changeSize(size){
    this.lineWidth = size;
    // this.signaturePad.set('minWidth', size);
  }

  loadImage() {
    // var background = new Image();
    // background.src = '../../assets/Ilakkam-liyamu/My%20Post('+this.number+').png';
    // // background.src = src
    // let ctx = this.canvasElement.getContext('2d');
    //
    // background.onload = () => {
    //   ctx.drawImage(background,0,0, this.canvasElement.width, this.canvasElement.height);
    // }
    // let ctx = this.canvasElement.getContext('2d');
    // ctx.fillStyle = "wheat";
    // ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }


  playMusic() {
    this.play_music = true;
    this.nativeAudio.stop('uniqueId2');
  }

  stopMusic() {
    this.play_music = false;
    this.nativeAudio.play("uniqueId2");
  }

  refresh() {
    this.redoList = [];
    this.signaturePad.clear();
    this.loadImage();
  }

  loadMusic() {
    this.nativeAudio.play('uniqueId2');
    this.nativeAudio.loop('uniqueId2');
  }

  ionViewWillLeave() {
    this.nativeAudio.stop('uniqueId2');
  }

  UndoPad() {
    const data = this.signaturePad.toData();
    if (data && data.length > 0) {
      this.redoList.push(data[data.length - 1])
      // this.redoList.push({d: data[data.length - 1], s: this.lineWidth})
      console.log(data)
      data.pop();
      this.signaturePad.fromData(data);
    }
  }

  redoPad() {
    if (this.redoList.length > 0) {
      const data = this.signaturePad.toData();
      data.push(this.redoList.pop())
      this.signaturePad.fromData(data);
    }
  }

  async eraseDrwing() {

    let addPOst = await this.modalController.create({
      component: EraserComponent,
      componentProps: {
        'lineWidth': 5
      },
      cssClass: 'reg-modal',
      backdropDismiss: false
    });

    this.disabled_pencil = true;
    addPOst.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        // this.lineWidth = modelData.data;
        this.signaturePad.set('minWidth', modelData.data);
        this.signaturePad.set('penColor', 'white');
      } else {
        this.disabled_pencil = false;
      }
    });

    return await addPOst.present();

  }

  drawingPencil() {
    this.signaturePad.set('penColor', this.color);
    this.disabled_pencil = false;
  }

}
