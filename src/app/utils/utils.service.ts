import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Label } from '@config/Label';
import { ErrorModalComponent } from '@components/error-modal/error-modal.component';
import { SuccessModalComponent } from '@components/success-modal/success-modal.component';
// import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  label = Label;

  constructor(
    private dialog: DialogService,
    // private confirmationService: ConfirmationService,
    // private messageService: MessageService
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

  showSuccessDialog(message: string) {
    const ref = this.dialog.open(SuccessModalComponent, {
      header: this.label.NOTIFICATION.SYSTEM_NOTIF,
      styleClass: 'default-modal success-modal',
      data: {
        message
      },
      closable: true
    });
    ref.onClose.subscribe((data: any) => {
      if (data) { }
    });
  }

  // showConfrimDialog(event: any) {
  //   this.confirmationService.confirm({
  //     target: event.target as EventTarget,
  //     message: 'Are you sure that you want to proceed?',
  //     header: 'Confirmation',
  //     closable: true,
  //     closeOnEscape: true,
  //     icon: 'pi pi-exclamation-triangle',
  //     rejectButtonProps: {
  //       label: 'Cancel',
  //       severity: 'secondary',
  //       outlined: true,
  //     },
  //     acceptButtonProps: {
  //       label: 'Save',
  //     },
  //     accept: () => {
  //       this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
  //     },
  //     reject: () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Rejected',
  //         detail: 'You have rejected',
  //         life: 3000,
  //       });
  //     },
  //   })
  // }


}
