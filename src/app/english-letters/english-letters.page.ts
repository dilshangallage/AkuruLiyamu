import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";

@Component({
  selector: 'app-english-letters',
  templateUrl: './english-letters.page.html',
  styleUrls: ['./english-letters.page.scss'],
})
export class EnglishLettersPage implements OnInit {
  @ViewChild('mySlider', {static: true})  slides: IonSlides;

  // next(){
  //   this.slides.slideNext();
  // }
  //
  // prev(){
  //   this.slides.slidePrev();
  // }

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
