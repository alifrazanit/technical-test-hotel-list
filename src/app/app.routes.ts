import { Routes } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
    },
    { 
        path: '**', 
        loadChildren: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
