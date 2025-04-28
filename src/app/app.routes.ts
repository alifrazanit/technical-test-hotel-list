import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
    },
    { 
        path: '**', 
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
