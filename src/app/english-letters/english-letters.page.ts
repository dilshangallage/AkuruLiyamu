import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";

@Component({
  selector: 'app-english-letters',
  templateUrl: './english-letters.page.html',
  styleUrls: ['./english-letters.page.scss'],
})
export class EnglishLettersPage implements OnInit {
  @ViewChild('mySlider', {static: true})  slides: IonSlides;
  play_music = false;
  number = 0;

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {
    // this.slides.lockSwipes(true)
  }

  next(){
    this.number +=1;
    // this.slides.lockSwipes(false)
    this.slides.slideNext()
    // this.slides.lockSwipes(true)
  }

  prev(){
    this.number -=1;
    // this.slides.lockSwipes(false)
    this.slides.slidePrev()
    // this.slides.lockSwipes(true)
  }


  playMusic() {
    this.play_music = true;
    // this.nativeAudio.stop('uniqueId2');
  }

  stopMusic() {
    // this.play_music = false;
    // this.nativeAudio.play("uniqueId2");
  }

  refresh() {
    // this.nativeAudio.play("uniqueId2");
  }

  ionViewWillLeave() {
    // this.nativeAudio.stop('uniqueId2');
  }

}
