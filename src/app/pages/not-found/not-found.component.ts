import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(
    private router: Router
  ){}

  goBack(){
    this.router.navigate(['masters', 'hotel'])
  }
}
