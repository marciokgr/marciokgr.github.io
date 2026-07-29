import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LangRedirectComponent } from './pages/lang-redirect/lang-redirect.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LangRedirectComponent,
  },
  {
    path: ':lang',
    component: HomeComponent,
  },
  // URLs antigas de seção → página do idioma (menu usa âncoras)
  {
    path: ':lang/:section',
    redirectTo: ':lang',
  },
  {
    path: '**',
    redirectTo: 'pt-br',
  },
];
