import { Component } from '@angular/core';
import { NavbarMainComponent } from '@components/navbar-main/navbar-main.component';
import { NavbarTopComponent } from '@components/navbar-top/navbar-top.component';

@Component({
  selector: 'app-hotel-web',
  imports: [
    NavbarTopComponent,
    NavbarMainComponent
  ],
  templateUrl: './hotel-web.component.html',
  styleUrl: './hotel-web.component.css'
})
export class HotelWebComponent {

}
