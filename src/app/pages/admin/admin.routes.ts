import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MastersComponent } from './masters/masters.component';
import { HotelComponent } from '@pages/admin/masters/hotel/hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const adminRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./admin.component').then(m => m.AdminComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'masters',
                loadComponent: () => import('./masters/masters.component').then(m => m.MastersComponent),
                children: [
                    {
                        path: 'hotel',
                        loadComponent: () => import('./masters/hotel/hotel.component').then(m => m.HotelComponent),
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    },
];
