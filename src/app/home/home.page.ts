import {Component, ViewChild} from '@angular/core';
import {NavController, ToastController} from "@ionic/angular";
import {AnimationBuilder, AnimationService} from "css-animator";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;

  constructor(public navCtrl: NavController, animationService: AnimationService) {
    this.animator = animationService.builder();
  }

  animateElem() {
    this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

  gotoWhiteBoardPage() {
    this.navCtrl
  }



}
