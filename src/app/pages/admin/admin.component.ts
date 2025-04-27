import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/admin/header/header.component';
import { AvatarModule } from 'primeng/avatar';
import { DrawerModule } from 'primeng/drawer';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AvatarModule,
    DrawerModule,
    ButtonModule,
    PanelMenuModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  visible: boolean = false;
  items: MenuItem[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        routerLink: '/dashboard'
      },
      {
        label: 'Master',
        items: [
          {
            label: 'Hotel',
            routerLink: '/masters/hotel'
          },
        ]
      }
    ]
  }

  onOpenMenu(e: any) {
    this.visible = true;
  }

  onCloseMenu(e: any): void {
    this.drawerRef.close(e);
  }

}
