import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('onboarding/Module').then((m) => m.RemoteModule),
  },
  {
    path: 'otp',
    loadChildren: () => import('otp/Module').then((m) => m.RemoteModule),
  },
  {
    path: 'loans',
    loadChildren: () => import('loans/Module').then((m) => m.RemoteModule),
  },
  {
    path: 'biometric',
    loadChildren: () => import('identity/Module').then((m) => m.RemoteModule),
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' },
];
