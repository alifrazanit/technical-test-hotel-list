import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  login() {
    this.onLogin.emit(true);
  }

  signIn() {
    this.onLogin.emit(true);
  }
}
