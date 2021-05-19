import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhiteBoardPage } from './white-board.page';

const routes: Routes = [
  {
    path: '',
    component: WhiteBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhiteBoardPageRoutingModule {}
