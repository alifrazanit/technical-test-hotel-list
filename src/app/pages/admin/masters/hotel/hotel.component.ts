import { Component, OnInit, OnDestroy } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { Subject, takeUntil } from 'rxjs';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { UtilsService } from '@utils/utils.service';
import { DialogModule, Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { FormComponent } from './shared/form/form.component';
@Component({
  selector: 'app-hotel',
  imports: [
    FieldsetModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    SelectModule,
    RadioButtonModule,
    DialogModule,
  ],
  providers: [
    UtilsService,
    Dialog,
    DialogService
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  form: FormGroup = new FormGroup({});
  dataTable: any[] = [];
  orderByField: any[] = [
    { id: 1, code: 'id', label: 'ID' },
    { id: 2, code: 'name', label: 'Name' },
  ];
  orderBy: any[] = [
    { id: 1, code: 'asc', label: 'ASC' },
    { id: 2, code: 'desc', label: 'DESC' },
  ];

  constructor(
    private hotelService: HotelService,
    private utils: UtilsService,
    private dialog: DialogService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.fetchAll();
  }

  ngOnDestroy(): void {

  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      location: new FormControl(''),
      orderByField: new FormControl('', [Validators.required]),
      orderBy: new FormControl('', [Validators.required]),
    });
  }

  fetchAll() {
    const params = {
      orderByField: 'id',
      orderFieldDirection: 'ASC'
    }
    this.hotelService.fetchAllHotel(params).valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((resutls) => {
      if (resutls) {
        const data: any = resutls.data;
        const getHotels = data.getHotels;
        this.dataTable = getHotels
      }
    })
  }

  onFind() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return this.utils.showErrorDialog('Input Mandatory Fields Please')
    } else {
      const formData = this.form.value;
      const params = {
        offset: 0,
        limit: 10,
        orderByField: formData.orderByField.code,
        orderFieldDirection: String(formData.orderBy.code).toUpperCase(),
        name: formData.name,
        location: formData.location
      }
      this.hotelService.getHotels(params).valueChanges.pipe(
        takeUntil(this.destroy$)
      ).subscribe((resutls) => {
        if (resutls) {
          const data: any = resutls.data;
          const getHotels = data.getHotels;
          this.dataTable = getHotels
        }
      })
    }
  }

  onDetail(row: any) {
    console.log('row', row)
  }

  onCreate() {
    const ref = this.dialog.open(FormComponent, {
      header: 'Form Hotel',
      data: {},
      closable: true
    });
    ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log('DATA', data);
       }
    });
  }
}
