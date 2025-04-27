import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardModule } from 'primeng/card';

import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { UtilsService } from '@utils/utils.service';
import { DialogModule, Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-search-box',
  imports: [
    CardModule,
    SelectModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
  ],
  providers: [
    UtilsService,
    Dialog,
    DialogService
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {
  @Output() onFindHotel: EventEmitter<any> = new EventEmitter<any>();


  form: FormGroup = new FormGroup({});
  destination: any[] = [
    { id: 1, name: 'Hotel Cipanas', location: 'Cipanas' },
    { id: 2, name: 'Hotel Koneng', location: 'Cipanas' },
    { id: 3, name: 'Hotel Bunga', location: 'Cipanas' },
    { id: 4, name: 'Hotel X', location: 'Bogor' },
    { id: 5, name: 'Hotel Y', location: 'Bogor' },
  ]

  constructor(
    private utils:UtilsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      destination: new FormControl('', [Validators.required]),
    });
  }

  onFind() {
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return this.utils.showErrorDialog('Input Your Destination Please')
    } else {
      this.onFindHotel.emit(this.form.value)
    }
  }
}
