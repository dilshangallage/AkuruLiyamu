import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhiteBoardPageRoutingModule } from './white-board-routing.module';

import { WhiteBoardPage } from './white-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhiteBoardPageRoutingModule
  ],
  declarations: [WhiteBoardPage]
})
export class WhiteBoardPageModule {}
