import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishAkuruLiyamuPageRoutingModule } from './english-akuru-liyamu-routing.module';

import { EnglishAkuruLiyamuPage } from './english-akuru-liyamu.page';
import {SignaturePadModule} from "angular2-signaturepad";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishAkuruLiyamuPageRoutingModule,
    SignaturePadModule
  ],
  declarations: [EnglishAkuruLiyamuPage]
})
export class EnglishAkuruLiyamuPageModule {}
