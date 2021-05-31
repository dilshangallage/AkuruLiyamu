import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-ilakkam',
  templateUrl: './ilakkam.page.html',
  styleUrls: ['./ilakkam.page.scss'],
})
export class IlakkamPage implements OnInit {
  @ViewChild('mySlider', {static: true})  slides: IonSlides;


  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true)
  }

  next(){
    this.slides.lockSwipes(false)
    this.slides.slideNext()
    this.slides.lockSwipes(true)
  }

  prev(){
    this.slides.lockSwipes(false)
    this.slides.slidePrev()
    this.slides.lockSwipes(true)
  }

}
