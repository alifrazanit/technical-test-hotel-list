import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-error-modal',
  imports: [
    ButtonModule,
    CardModule
  ],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {
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
