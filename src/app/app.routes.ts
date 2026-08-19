import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then((m) => m.HomeComponent),
    title: 'RentFits',
  },

  {
    path: 'catalogue',
    loadComponent: () =>
      import('./pages/catalogue/catalogue.component')
        .then((m) => m.CatalogueComponent),
    title: 'RentFits Catalogue',
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail/product-detail.component')
        .then((m) => m.ProductDetailComponent),
    title: 'Product Details | RentFits',
  },

  // ⭐ YOUR CHAT PAGE
  {
    path: 'messages',
    loadComponent: () =>
      import('./pages/messages/messages.component')
        .then((m) => m.MessagesComponent),
    title: 'Messages | RentFits',
  },

  { 
    path: '**', 
    redirectTo: '' 
  },

];