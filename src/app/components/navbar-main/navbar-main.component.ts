import { Component, OnInit } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar-main',
  imports: [
    MenubarModule,
    ButtonModule,
  ],
  templateUrl: './navbar-main.component.html',
  styleUrl: './navbar-main.component.css'
})
export class NavbarMainComponent implements OnInit {

  constructor(){}

  ngOnInit() { }
}
