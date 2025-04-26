import { Component } from '@angular/core';
import { CardComponent } from '@components/card/card.component';
import { NavbarMainComponent } from '@components/navbar-main/navbar-main.component';
import { NavbarTopComponent } from '@components/navbar-top/navbar-top.component';
import { SearchBoxComponent } from '@components/search-box/search-box.component';

@Component({
  selector: 'app-hotel-web',
  imports: [
    NavbarTopComponent,
    NavbarMainComponent,
    SearchBoxComponent,
    CardComponent
  ],
  templateUrl: './hotel-web.component.html',
  styleUrl: './hotel-web.component.css'
})
export class HotelWebComponent {

}
