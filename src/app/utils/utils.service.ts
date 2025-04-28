import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Label } from '@config/Label';
import { ConfirmationService, MessageService } from 'primeng/api';


export enum severityEnum {
  success = 'success',
  info = 'info',
  warn = 'warn',
  danger = 'error',
  secondary = 'secondary',
  contrast = 'contrast',
}

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

  showMessage(severity: severityEnum, message: any) {
    this.messageService.add({ severity: severity, summary: 'Confirmed', detail: message, life: 3000 });
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
          resolve(true)
        },
        reject: () => {
          resolve(false)
        },
      })
    })

  }


}
