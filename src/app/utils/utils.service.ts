import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Label } from '@config/Label';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  label = Label;

  constructor(
    private dialog: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  showErrorDialog(message: string) {
    this.confirmationService.confirm({
      message: message,
      header: this.label.NOTIFICATION.SYSTEM_NOTIF,
      icon: 'pi pi-exclamation-triangle',
      rejectVisible: false,
      acceptButtonProps: {
        label: this.label.LABEL.OK,
        severity: 'secondary',
        outlined: true,
      },
    })
  }

  showSuccessDialog(message: string) {
    this.confirmationService.confirm({
      message: message,
      header: this.label.NOTIFICATION.SYSTEM_NOTIF,
      icon: 'pi pi-check-circle',
      rejectVisible: false,
      acceptButtonProps: {
        label: this.label.LABEL.OK,
        severity: 'success',
        outlined: true,
      },
    })
  }

  showConfrimDeleteDialog(event: any) {
    return new Promise((resolve) => {
      this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: this.label.MESSAGES.CONFRIM_DELETE,
        header: this.label.LABEL.DELETE_CONFRIM,
        closable: true,
        closeOnEscape: true,
        icon: 'pi pi-exclamation-triangle',
        rejectButtonProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true,
        },
        acceptButtonProps: {
          label: 'Yes',
          severity: 'danger',
          outlined: true,
        },
        accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
          resolve(true)
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'You have rejected',
            life: 3000,
          });
          resolve(false)

        },
      })
    })

  }


}
