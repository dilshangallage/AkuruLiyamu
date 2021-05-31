import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlakkamLiyamuPageRoutingModule } from './ilakkam-liyamu-routing.module';

import { IlakkamLiyamuPage } from './ilakkam-liyamu.page';
import {SignaturePadModule} from "angular2-signaturepad";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlakkamLiyamuPageRoutingModule,
    SignaturePadModule
  ],
  declarations: [IlakkamLiyamuPage]
})
export class IlakkamLiyamuPageModule {}
