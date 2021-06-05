import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, Platform} from "@ionic/angular";
import {NativeAudio} from "@ionic-native/native-audio/ngx";

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.page.html',
  styleUrls: ['./white-board.page.scss'],
})
export class WhiteBoardPage implements OnInit {
  @ViewChild('mySlider')  slides: IonSlides;

  number = 2;
  show_animation = false;
  play_music = false;
  button_disabled = false;

  constructor(private plt: Platform, private nativeAudio: NativeAudio) {
    // plt.ready().then(() => {
    //   this.nativeAudio.preloadComplex('english-2', 'assets/mp3/english-akuru/2.mp3', 1, 1, 0).then(function(success) {
    //   }, function(err) {
    //   });
    //
    // });
  }

  ngOnInit() {

  }

  next(){
    // this.show_animation = true;
    // this.button_disabled = true;
    this.number +=1;
    // this.slides.lockSwipes(false)
    // let self = this;
    this.slides.slideNext()
    // self.slides.lockSwipes(true)
    // setTimeout(() => {
    //
    //   self.show_animation = false;
    //   self.button_disabled = false;
    // }, 2000);



  }

  prev(){
    this.number -= 1;
    // this.slides.lockSwipes(false)
    this.slides.slidePrev()
    // this.slides.lockSwipes(true)
  }

  ionViewDidEnter() {
    // this.slides.lockSwipes(true);
    setTimeout(() => {
      this.playBackgroundSound();
    }, 500);
    // this.slides.onlyExternal = true;
    // Set the Canvas Element and its size
    // this.canvasElement = this.canvas.nativeElement;
    // this.canvasElement.width = this.plt.width() + '';
    // this.canvasElement.height = 500;
  }


  playMusic() {
    // this.play_music = true;
    // this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0);
    // // this.nativeAudio.stop('uniqueId2');
    // // this.nativeAudio.stop('english-2');
    // this.nativeAudio.setVolumeForComplexAsset('english', 0);
  }

  stopMusic() {
    // this.play_music = false;
    // this.nativeAudio.play("uniqueId2");
    // this.nativeAudio.play("english-2");
  }

  refresh() {
    // this.nativeAudio.play("english-2");
  }
playBackgroundSound() {
  // this.nativeAudio.play('english-2');
}

  ionViewWillLeave() {
    // this.nativeAudio.stop('uniqueId2');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
}
