import { Component, OnInit } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-top',
  imports: [
    MenubarModule,
    CommonModule,
    SelectModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './navbar-top.component.html',
  styleUrl: './navbar-top.component.css'
})
export class NavbarTopComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  listLang: any[] = [
    {
      id: 1,
      name: 'Indonesia',
      langId: 'ID',
      image: '/images/id.png'
    },
    {
      id: 2,
      name: 'English',
      langId: 'EN',
      image: '/images/uk.png'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = new FormGroup({
      language: new FormControl(this.listLang[0]),
    });
  }
}
