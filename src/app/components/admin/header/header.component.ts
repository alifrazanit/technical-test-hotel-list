import { Component, Output, EventEmitter } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    MenubarModule,
    AvatarModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() onOpenMenu: EventEmitter<any> = new EventEmitter<any>();

  openMenu(e: any) {
    this.onOpenMenu.emit(true);
  }
}
