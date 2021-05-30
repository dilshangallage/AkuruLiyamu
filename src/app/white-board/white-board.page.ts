import {Component, OnInit, ViewChild} from '@angular/core';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.page.html',
  styleUrls: ['./white-board.page.scss'],
})
export class WhiteBoardPage implements OnInit {

  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;
  saveX: number;

  saveY: number;
  selectedColor = '#9e2956';

  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];

  drawing = false;
  lineWidth = 5;
  constructor(private plt: Platform) { }

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
    if (!this.drawing) return;

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

}
