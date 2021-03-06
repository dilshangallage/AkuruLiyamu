import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsGamesPage } from './kids-games.page';

const routes: Routes = [
  {
    path: '',
    component: KidsGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsGamesPageRoutingModule {}
