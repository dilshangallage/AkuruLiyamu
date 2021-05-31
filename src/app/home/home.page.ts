import {Component, ViewChild} from '@angular/core';
import {NavController, Platform, ToastController} from "@ionic/angular";
import {AnimationBuilder, AnimationService} from "css-animator";
import {TextToSpeech} from "@ionic-native/text-to-speech/ngx";
import {NativeAudio} from "@ionic-native/native-audio/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  constructor(public navCtrl: NavController, animationService: AnimationService, private tts: TextToSpeech,  private nativeAudio: NativeAudio, private platform: Platform) {
    this.animator = animationService.builder();
    platform.ready().then(() => {
      this.nativeAudio.preloadComplex('homePageBackground', 'assets/mp3/sinhala-akuru/home-background.mp3', 1, 1, 0).then(function(success) {
      }, function(err) {
      });

    });
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.playBackgroundSound();
    }, 500);
    // this.nativeAudio.loop('homePageBackground');
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

  gotoWhiteBoardPage() {
    this.navCtrl
  }

  speech() {
    this.tts.speak('Api sellaam karaamu')
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
  }

  playBackgroundSound() {
    this.nativeAudio.play('homePageBackground');
  }

  ionViewWillLeave() {
    this.nativeAudio.stop('homePageBackground');
  }



}
