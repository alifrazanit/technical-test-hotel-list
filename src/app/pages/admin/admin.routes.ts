import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MastersComponent } from './masters/masters.component';
import { HotelComponent } from '@pages/admin/masters/hotel/hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'masters',
                component: MastersComponent,
                children: [
                    {
                        path: 'hotel',
                        component: HotelComponent
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
