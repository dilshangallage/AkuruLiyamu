import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-eraser',
  templateUrl: './eraser.component.html',
  styleUrls: ['./eraser.component.scss'],
})
export class EraserComponent implements OnInit {
  @Input("lineWidth") lineWidth: number;

  // lineWidth = 5;
  constructor(private modalCtrl: ModalController) {

  }

  ionViewDidLeave() {
    console.log('EEEEEEEEEEEEEE')
    // this.closeModel();
  }

  ngOnInit() {}

  changePenSize() {
    // this.signaturePad.set('minWidth', this.lineWidth);
  }

  async closeModel() {
    // const close: string = "Modal Removed";
    await this.modalCtrl.dismiss(this.lineWidth);
  }

}
