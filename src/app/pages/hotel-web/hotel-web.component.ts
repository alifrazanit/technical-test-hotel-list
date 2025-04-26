import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '@components/footer/footer.component';
import { NavbarMainComponent } from '@components/navbar-main/navbar-main.component';
import { NavbarTopComponent } from '@components/navbar-top/navbar-top.component';
import { RecommendationsComponent } from '@components/recommendations/recommendations.component';
import { SearchBoxComponent } from '@components/search-box/search-box.component';

@Component({
  selector: 'app-hotel-web',
  imports: [
    NavbarTopComponent,
    NavbarMainComponent,
    SearchBoxComponent,
    RecommendationsComponent,
    FooterComponent
  ],
  templateUrl: './hotel-web.component.html',
  styleUrl: './hotel-web.component.css',

})
export class HotelWebComponent implements OnInit {
  ngOnInit(): void {}
}
