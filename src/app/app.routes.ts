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

  // ⭐ CHAT PAGE (Varun's Work)
  {
    path: 'messages',
    loadComponent: () =>
      import('./pages/messages/messages.component')
        .then((m) => m.MessagesComponent),
    title: 'Messages | RentFits',
  },

  // 🌟 USER DASHBOARD
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard-layout/dashboard-layout.component')
        .then((m) => m.DashboardLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then((m) => m.DashboardComponent),
        title: 'Dashboard | RentFits',
      },
      {
        path: 'listings',
        loadComponent: () =>
          import('./pages/my-listings/my-listings.component')
            .then((m) => m.MyListingsComponent),
        title: 'My Listings | RentFits',
      },
      {
        path: 'listings/new',
        loadComponent: () =>
          import('./pages/add-new-listing/add-new-listing.component')
            .then((m) => m.AddNewListingComponent),
        title: 'Add New Listing | RentFits',
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/placeholder-page/placeholder-page.component')
            .then((m) => m.PlaceholderPageComponent),
        data: { title: 'My Orders' },
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./pages/placeholder-page/placeholder-page.component')
            .then((m) => m.PlaceholderPageComponent),
        data: { title: 'Wishlist' },
      },
      {
        path: 'earnings',
        loadComponent: () =>
          import('./pages/placeholder-page/placeholder-page.component')
            .then((m) => m.PlaceholderPageComponent),
        data: { title: 'Earnings' },
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/placeholder-page/placeholder-page.component')
            .then((m) => m.PlaceholderPageComponent),
        data: { title: 'Profile Settings' },
      },
    ],
  },

  { 
    path: '**', 
    redirectTo: '' 
  },
];