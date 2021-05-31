import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AnimatesDirective, AnimationService} from "css-animator";
import {TextToSpeech} from "@ionic-native/text-to-speech/ngx";
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import {NativeAudio} from "@ionic-native/native-audio/ngx";
import {SignaturePadModule} from "angular2-signaturepad";

@NgModule({
  declarations: [AppComponent, AnimatesDirective],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SignaturePadModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AnimationService,
    TextToSpeech,
    SpeechRecognition,
    NativeAudio,
    Media,
    File],
  bootstrap: [AppComponent],
})
export class AppModule {}
