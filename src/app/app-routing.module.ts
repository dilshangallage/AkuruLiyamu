import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'white-board',
    loadChildren: () => import('./white-board/white-board.module').then( m => m.WhiteBoardPageModule)
  },
  {
    path: 'kids-games',
    loadChildren: () => import('./kids-games/kids-games.module').then( m => m.KidsGamesPageModule)
  },
  {
    path: 'english-letters',
    loadChildren: () => import('./english-letters/english-letters.module').then( m => m.EnglishLettersPageModule)
  },
  {
    path: 'ilakkam',
    loadChildren: () => import('./ilakkam/ilakkam.module').then( m => m.IlakkamPageModule)
  },
  {
    path: 'sinhala-akuru-liyamu',
    loadChildren: () => import('./sinhala-akuru-liyamu/sinhala-akuru-liyamu.module').then( m => m.SinhalaAkuruLiyamuPageModule)
  },
  {
    path: 'english-akuru-liyamu',
    loadChildren: () => import('./english-akuru-liyamu/english-akuru-liyamu.module').then( m => m.EnglishAkuruLiyamuPageModule)
  },
  {
    path: 'ilakkam-liyamu',
    loadChildren: () => import('./ilakkam-liyamu/ilakkam-liyamu.module').then( m => m.IlakkamLiyamuPageModule)
  },
  {
    path: 'roopa-soyamu',
    loadChildren: () => import('./roopa-soyamu/roopa-soyamu.module').then( m => m.RoopaSoyamuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
