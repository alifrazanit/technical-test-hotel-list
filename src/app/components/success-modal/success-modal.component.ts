import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-success-modal',
  imports: [
    ButtonModule,
    CardModule
  ],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.css'
})
export class SuccessModalComponent {
  message: string = '';
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    let data = this.config.data;
    this.message = data.message;
  }

  closeDialog() {
    this.ref.close(null);
  }
}
