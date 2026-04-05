import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cognit-edu', pathMatch: 'full' },
  {
    path: 'cognit-edu',
    loadChildren: () => import('./layout/protected/protected.routes'),
  },
];
