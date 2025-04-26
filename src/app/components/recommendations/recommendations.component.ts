import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-recommendations',
  imports: [
    CarouselModule,
    CardComponent
  ],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {
  products = [true,true,true]
}
