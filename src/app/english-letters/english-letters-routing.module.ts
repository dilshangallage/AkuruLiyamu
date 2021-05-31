import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishLettersPage } from './english-letters.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishLettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishLettersPageRoutingModule {}
