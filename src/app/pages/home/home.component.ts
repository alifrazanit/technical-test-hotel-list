import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { NavbarMainComponent } from '@components/navbar-main/navbar-main.component';
import { NavbarTopComponent } from '@components/navbar-top/navbar-top.component';
import { SearchBoxComponent } from '@components/search-box/search-box.component';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { Subject, takeUntil } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RecommendationsComponent } from '@components/recommendations/recommendations.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarTopComponent,
    NavbarMainComponent,
    SearchBoxComponent,
    FooterComponent,
    CardModule,
    ButtonModule,
    RecommendationsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();


  constructor(
    private router: Router,
    private hotelService: HotelService
  ) { }

  ngOnInit(): void {
    this.fetchAllData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFindHotel(event: any) {
   
  }



  fetchAllData(){
    const params = {
      offset: 0, 
      limit: 10,
      orderByField: "name",
      orderFieldDirection: 'ASC'

    }
    this.hotelService.getHotels(params).valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((resutls) => {
      if(resutls){
        const data:any = resutls.data;
        const getHotels = data.getHotels;
        console.log('getHotels', getHotels)
      }
    })
  }


  onLogin(e: any){
    this.router.navigate(['admin','dashboard'])
  }
}
