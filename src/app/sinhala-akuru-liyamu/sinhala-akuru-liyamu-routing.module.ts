import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinhalaAkuruLiyamuPage } from './sinhala-akuru-liyamu.page';

const routes: Routes = [
  {
    path: '',
    component: SinhalaAkuruLiyamuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinhalaAkuruLiyamuPageRoutingModule {}
