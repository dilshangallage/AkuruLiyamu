import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roopa-soyamu',
  templateUrl: './roopa-soyamu.page.html',
  styleUrls: ['./roopa-soyamu.page.scss'],
})
export class RoopaSoyamuPage implements OnInit {
  answerList = [];
  imgUrl = '../../assets/games/My Post(6).png';
  exercise = 0;

  constructor() {
    this.answerList = ['2', '5', '1', '8', '6'];
  }

  ngOnInit() {
  }

}
