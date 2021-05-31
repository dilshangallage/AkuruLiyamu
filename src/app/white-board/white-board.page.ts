import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, Platform} from "@ionic/angular";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.page.html',
  styleUrls: ['./white-board.page.scss'],
})
export class WhiteBoardPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  number = 2;
  show_animation = false;




  // @ViewChild('imageCanvas', { static: false }) canvas: any;
  // canvasElement: any;
  // saveX: number;
  //
  // saveY: number;
  // selectedColor = '#9e2956';
  //
  // colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
  //
  // drawing = false;
  // lineWidth = 5;
  constructor(private plt: Platform) { }

  ngOnInit() {

  }

  next(){
    this.show_animation = true;
    this.number +=1;
    this.slides.lockSwipes(false)
    let self = this;
    setTimeout(() => {
      self.show_animation = false;
      self.slides.slideNext()
      self.slides.lockSwipes(true)
    }, 3000);



  }

  prev(){
    this.number -= 1;
    this.slides.lockSwipes(false)
    this.slides.slidePrev()
    this.slides.lockSwipes(true)
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true)
    // this.slides.onlyExternal = true;
    // Set the Canvas Element and its size
    // this.canvasElement = this.canvas.nativeElement;
    // this.canvasElement.width = this.plt.width() + '';
    // this.canvasElement.height = 500;
  }

  // selectColor(color) {
  //   this.selectedColor = color;
  // }
  //
  // startDrawing(ev) {
  //   this.drawing = true;
  //   var canvasPosition = this.canvasElement.getBoundingClientRect();
  //
  //   this.saveX = ev.clientX - canvasPosition.x;
  //   this.saveY = ev.clientY - canvasPosition.y;
  // }
  //
  // endDrawing() {
  //   this.drawing = false;
  // }
  // moved(ev) {
  //   if (!this.drawing) return;
  //
  //   var canvasPosition = this.canvasElement.getBoundingClientRect();
  //   let ctx = this.canvasElement.getContext('2d');
  //
  //   let currentX = ev.clientX - canvasPosition.x;
  //   let currentY = ev.clientY - canvasPosition.y;
  //
  //   ctx.lineJoin = 'round';
  //   ctx.strokeStyle = this.selectedColor;
  //   ctx.lineWidth = this.lineWidth;
  //
  //   ctx.beginPath();
  //   ctx.moveTo(this.saveX, this.saveY);
  //   ctx.lineTo(currentX, currentY);
  //   ctx.closePath();
  //
  //   ctx.stroke();
  //
  //   this.saveX = currentX;
  //   this.saveY = currentY;
  // }

}
