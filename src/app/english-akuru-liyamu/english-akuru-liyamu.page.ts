import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonSlides, Platform} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";

@Component({
  selector: 'app-english-akuru-liyamu',
  templateUrl: './english-akuru-liyamu.page.html',
  styleUrls: ['./english-akuru-liyamu.page.scss'],
})
export class EnglishAkuruLiyamuPage implements OnInit {


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

  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];

  drawing = false;
  lineWidth = 5;
  number = 27;

  play_music = false;

  constructor(private platform: Platform, private nativeAudio: NativeAudio, private alertCtrl: AlertController) {
    this.presentAlert('OK');
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('uniqueId2', 'assets/mp3/sinhala-akuru/sinhala-hodiya.mp3', 1, 1, 0).then(function(success) {
        this.presentAlert('Success');
      }, function(err) {
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

  ngAfterViewInit(){


    // this.canvasElement = this.canvas.nativeElement;
    //
    // this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    // this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = 400 + '';
    this.canvasElement.height = 600 + '';
    this.loadImage();
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

  refresh() {
    this.loadImage();
  }

  changeColour(colour){
    this.currentColour = colour;
  }

  changeSize(size){
    this.lineWidth = size;
  }

  handleStart(ev){

    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev){

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

  handleEnd(ev){

    console.log(ev);
  }

  clearCanvas(){
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
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

  selectColor(color) {
    this.selectedColor = color;
  }

  async playMusic() {

    this.play_music = true;
    console.log('&&&&&&&&')
    this.nativeAudio.play('uniqueId1');
    this.nativeAudio.stop('uniqueId2');
    this.presentAlert(this.nativeAudio);

  }

  stopMusic() {
    this.play_music = false;
    this.nativeAudio.stop('uniqueId1');
    this.nativeAudio.play('uniqueId2');
    this.presentAlert(this.nativeAudio);
  }

  async presentAlert(msg) {
    const alert = await this.alertCtrl.create({
      cssClass: 'basic-alert',
      header: 'Alert Header',
      subHeader: 'Alert Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
