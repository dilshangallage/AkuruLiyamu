import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinhalaAkuruLiyamuPageRoutingModule } from './sinhala-akuru-liyamu-routing.module';

import { SinhalaAkuruLiyamuPage } from './sinhala-akuru-liyamu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinhalaAkuruLiyamuPageRoutingModule
  ],
  declarations: [SinhalaAkuruLiyamuPage]
})
export class SinhalaAkuruLiyamuPageModule {}
