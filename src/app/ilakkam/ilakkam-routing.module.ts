import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlakkamPage } from './ilakkam.page';

const routes: Routes = [
  {
    path: '',
    component: IlakkamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlakkamPageRoutingModule {}
