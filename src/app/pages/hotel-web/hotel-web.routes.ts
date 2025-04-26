import { Routes } from '@angular/router';
import { HotelWebComponent } from './hotel-web.component';

export const HotelRoutes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./hotel-web.component').then(c => c.HotelWebComponent) 
    },
];
