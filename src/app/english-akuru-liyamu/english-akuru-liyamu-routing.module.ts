import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishAkuruLiyamuPage } from './english-akuru-liyamu.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishAkuruLiyamuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishAkuruLiyamuPageRoutingModule {}
