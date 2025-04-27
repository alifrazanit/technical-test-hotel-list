import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Label } from '@config/Label';
import { ErrorModalComponent } from '@components/error-modal/error-modal.component';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  label = Label;

  constructor(
    private dialog: DialogService
  ) { }

  showErrorDialog(message: string) {
    const ref = this.dialog.open(ErrorModalComponent, {
      header: this.label.NOTIFICATION.SYSTEM_NOTIF,
      styleClass: 'default-modal error-modal',
      data: {
        message
      },
      closable: true
    });
    ref.onClose.subscribe((data: any) => {
      if (data) { }
    });
  }
}
