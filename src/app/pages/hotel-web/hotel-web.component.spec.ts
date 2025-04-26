import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelWebComponent } from './hotel-web.component';

describe('HotelWebComponent', () => {
  let component: HotelWebComponent;
  let fixture: ComponentFixture<HotelWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
