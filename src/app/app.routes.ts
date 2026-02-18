import { AllordersComponent } from './features/allorders/allorders.component';

import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
  },

  // Auth Routes - Lazy Loaded
  {
    path: 'auth',
    loadComponent: () => import('./core/layouts/auth-layout/auth-layout.component')
      .then(m => m.AuthLayoutComponent),
    children: [
      {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('./core/auth/register/register.component')
          .then(m => m.RegisterComponent),
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./core/auth/login/login.component')
          .then(m => m.LoginComponent),
      }
    ]
  },

  // Main Routes - Lazy Loaded
  {
    path: 'main',
    loadComponent: () => import('./core/layouts/main-layout/main-layout.component')
      .then(m => m.MainLayoutComponent),
    canActivateChild: [authGuard],
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./features/home/home.component')
          .then(m => m.HomeComponent),
      },
      {
        path: 'products',
        title: 'Products',
        loadComponent: () => import('./features/products/products.component')
          .then(m => m.ProductsComponent),
      },
      {
        path: 'categories',
        title: 'Categories',
        loadComponent: () => import('./features/categories/categories.component')
          .then(m => m.CategoriesComponent),
      },
      {
        path: 'brands',
        title: 'Brands',
        loadComponent: () => import('./features/brands/brands.component')
          .then(m => m.BrandsComponent),
      },
      {
        path: 'cart',
        title: 'Cart',
        loadComponent: () => import('./features/card/card.component')
          .then(m => m.CardComponent),
      },
      {
        path: 'checkout/:id',
        title: 'Checkout',
        loadComponent: () => import('./features/checkout/checkout.component')
          .then(m => m.CheckoutComponent),
      },
        {
        path: 'allorders',
        title: 'Allorders',
       component:AllordersComponent
      },
      {
        path: 'details/:id',
        title: 'Product Details',
        loadComponent: () => import('./features/detalis/detalis.component')
          .then(m => m.DetalisComponent),
      }
    ]
  },

  // 404 Not Found - Lazy Loaded
  {
    path: '**',
    title: 'Error',
    loadComponent: () => import('./features/notfound/notfound.component')
      .then(m => m.NotfoundComponent),
  }
];