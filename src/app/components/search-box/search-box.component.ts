import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-box',
  imports: [
    CardModule,
    SelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  destination: any[] = [
    { id: 1, name: 'Hotel Cipanas', location: 'Cipanas' },
    { id: 2, name: 'Hotel Koneng', location: 'Cipanas' },
    { id: 3, name: 'Hotel Bunga', location: 'Cipanas' },
    { id: 4, name: 'Hotel X', location: 'Bogor' },
    { id: 5, name: 'Hotel Y', location: 'Bogor' },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  initForm() {
    this.form = new FormGroup({
      destination: new FormControl(''),
    });
  }
}
