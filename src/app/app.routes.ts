import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'cvweb',
        title: 'CVweb-CinTutuDev',
        loadComponent: () =>
          import(
            './dashboard/pages/cvweb-cintutudev/cvweb-cintutudev.component'
          ),
      },
      {
        path: 'recursos',
        title: 'Recursos',
        loadComponent: () =>
          import('./dashboard/pages/recursos/recursos.component'),
      },
      {
        path: 'proyectos',
        title: 'Proyectos del curso',
        loadComponent: () =>
          import('./dashboard/pages/repositorios/repositorios.component'),
      },

      {
        path: '',
        redirectTo: 'proyectos',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
