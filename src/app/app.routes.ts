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
  {
    path: ':lang/:section',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'pt-br',
  },
];
