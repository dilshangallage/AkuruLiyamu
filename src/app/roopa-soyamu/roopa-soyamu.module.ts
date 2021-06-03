import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoopaSoyamuPageRoutingModule } from './roopa-soyamu-routing.module';

import { RoopaSoyamuPage } from './roopa-soyamu.page';
import {SignaturePadModule} from "angular2-signaturepad";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoopaSoyamuPageRoutingModule,
    SignaturePadModule
  ],
  declarations: [RoopaSoyamuPage]
})
export class RoopaSoyamuPageModule {}
