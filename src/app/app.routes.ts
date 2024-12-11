import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'init',
    title: 'Inicio',
    loadComponent: () => import('./pages/init/init.component'),
    data: {
      title: 'Inicio',
      icon: 'home',
    },
  },
  {
    path: 'components',
    title: 'Componentes',
    loadComponent: () => import('./pages/component/component.component'),
    data: {
      title: 'Componentes',
      icon: 'code',
    },
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'init',
  },
];
