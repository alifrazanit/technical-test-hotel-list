import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '@utils/utils.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { action } from '@config/enum/Action.enum';
import { TextareaModule } from 'primeng/textarea';
@Component({
  selector: 'app-form',
  imports: [
    PanelModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TextareaModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private utils: UtilsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    let data = this.config.data;
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return this.utils.showErrorDialog('Input Mandatory Fields Please')
    } else {
      const formData = this.form.value;
      this.ref.close({
        action: action.create,
        data: {
          ...formData
        }
      });
    }
  }
}
