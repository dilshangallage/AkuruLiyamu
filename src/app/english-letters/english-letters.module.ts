import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishLettersPageRoutingModule } from './english-letters-routing.module';

import { EnglishLettersPage } from './english-letters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishLettersPageRoutingModule
  ],
  declarations: [EnglishLettersPage]
})
export class EnglishLettersPageModule {}
