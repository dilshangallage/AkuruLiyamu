import {Component, OnInit, ViewChild} from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import {IonSlides, Platform} from "@ionic/angular";
import {Media, MediaObject} from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-kids-games',
  templateUrl: './kids-games.page.html',
  styleUrls: ['./kids-games.page.scss'],
})
export class KidsGamesPage implements OnInit {

    number0ne = 0;
    numbertwo = 0;
    answer = 0;
    operand = '+';

  bgcolor: string = 'white';

    recording: boolean = false;
    filePath: string;
    fileName: string;
    audio: MediaObject;
    audioList: any[] = [];

  constructor(private speechRecognition: SpeechRecognition,
              private media: Media,
              private file: File,
              public platform: Platform) { }

  ngOnInit() {
    // this.speechRecognition.hasPermission()
    //     .then((hasPermission: boolean) => {
    //
    //       if (!hasPermission) {
    //         this.speechRecognition.requestPermission()
    //             .then(
    //                 () => console.log('Granted'),
    //                 () => console.log('Denied')
    //             )
    //       }
    //
    //     });
  }

  // start() {
  //
  //   this.speechRecognition.startListening()
  //       .subscribe(
  //           (matches: Array<string>) => {
  //             this.bgcolor = matches[0];
  //           },
  //           (onerror) => console.log('error:', onerror)
  //       )
  //
  // }
  //
  //   getAudioList() {
  //       if(localStorage.getItem("audiolist")) {
  //           this.audioList = JSON.parse(localStorage.getItem("audiolist"));
  //           console.log(this.audioList);
  //       }
  //   }
  //
  //   startRecord() {
  //       if (this.platform.is('ios')) {
  //           this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
  //           this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
  //           this.audio = this.media.create(this.filePath);
  //       } else if (this.platform.is('android')) {
  //           this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
  //           this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
  //           this.audio = this.media.create(this.filePath);
  //       }
  //       this.audio.startRecord();
  //       this.recording = true;
  //   }
  //
  //   stopRecord() {
  //       this.audio.stopRecord();
  //       let data = { filename: this.fileName };
  //       this.audioList.push(data);
  //       localStorage.setItem("audiolist", JSON.stringify(this.audioList));
  //       this.recording = false;
  //       this.getAudioList();
  //   }
  //
  //   playAudio(file,idx) {
  //       if (this.platform.is('ios')) {
  //           this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
  //           this.audio = this.media.create(this.filePath);
  //       } else if (this.platform.is('android')) {
  //           this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //           this.audio = this.media.create(this.filePath);
  //       }
  //       this.audio.play();
  //       this.audio.setVolume(0.8);
  //   }

}
