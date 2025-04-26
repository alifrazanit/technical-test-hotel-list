import { Routes } from '@angular/router';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { HotelRoutes } from '@pages/hotel-web/hotel-web.routes';


export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/hotel-web/hotel-web.routes').then(c => c.HotelRoutes) },
    { path: '**', component: NotFoundComponent }
];
