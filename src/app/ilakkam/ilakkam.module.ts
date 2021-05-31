import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlakkamPageRoutingModule } from './ilakkam-routing.module';

import { IlakkamPage } from './ilakkam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlakkamPageRoutingModule
  ],
  declarations: [IlakkamPage]
})
export class IlakkamPageModule {}
