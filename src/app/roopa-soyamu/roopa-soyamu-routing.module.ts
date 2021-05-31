import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoopaSoyamuPage } from './roopa-soyamu.page';

const routes: Routes = [
  {
    path: '',
    component: RoopaSoyamuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoopaSoyamuPageRoutingModule {}
