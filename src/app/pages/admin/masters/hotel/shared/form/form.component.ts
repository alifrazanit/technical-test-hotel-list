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
  form!: FormGroup;

  action: string = '';
  constructor(
    private utils: UtilsService,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    let data = this.config.data;
    this.action = data.action;
    this.initForm();

    if (data.action === action.update) {
      this.setForm(data)
    }

  }

  initForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      location: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  setForm(data: any) {
    this.form.setValue({
      id: data.id,
      name: data.name,
      location: data.location,
      description: data.description,
    })
  }

  onSave() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.utils.showErrorDialog('Input Mandatory Fields Please',)
    } else {
      const formData = this.form.value;
      this.ref.close({
        action: this.action,
        data: {
          ...formData
        }
      });
    }
  }
}
