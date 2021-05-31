import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsGamesPageRoutingModule } from './kids-games-routing.module';

import { KidsGamesPage } from './kids-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsGamesPageRoutingModule
  ],
  declarations: [KidsGamesPage]
})
export class KidsGamesPageModule {}
