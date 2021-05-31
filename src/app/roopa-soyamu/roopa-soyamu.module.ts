import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoopaSoyamuPageRoutingModule } from './roopa-soyamu-routing.module';

import { RoopaSoyamuPage } from './roopa-soyamu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoopaSoyamuPageRoutingModule
  ],
  declarations: [RoopaSoyamuPage]
})
export class RoopaSoyamuPageModule {}
