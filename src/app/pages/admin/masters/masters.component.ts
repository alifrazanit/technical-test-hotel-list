import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-masters',
  imports: [
    RouterOutlet,
    ConfirmDialog,
    ToastModule
  ],
  providers:[
    ConfirmationService, MessageService
  ],
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.css'
})
export class MastersComponent {

}
