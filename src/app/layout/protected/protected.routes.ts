import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./protected.component').then((m) => m.ProtectedComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.component').then(
            (m) => m.HomeComponent,
          ),
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

export default routes;
