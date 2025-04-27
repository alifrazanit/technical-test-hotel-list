import { Routes } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { HomeComponent } from '@pages/home/home.component';


export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.adminRoutes)
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
