import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'receitas',
    loadComponent: () => import('./receitas/receitas.component').then(m => m.ReceitasComponent)
  },
  { 
    path: 'receitas/bolo-de-chocolate',
    loadComponent: () => import('./bolo-de-chocolates/bolo-de-chocolates.component').then(m => m.BoloDeChocolatesComponent)
  },
  { 
    path: 'receitas/pave-de-morango',
    loadComponent: () => import('./pave-de-morango/pave-de-morango.component').then(m => m.PaveDeMorangoComponent)
  },
];