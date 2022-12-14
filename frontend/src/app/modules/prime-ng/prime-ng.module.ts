import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ButtonModule, FieldsetModule, InputMaskModule, MessagesModule,
    CheckboxModule, TableModule, DialogModule, InputTextModule,
    InputTextareaModule, DropdownModule, ConfirmDialogModule, CalendarModule, TabViewModule,
    ToggleButtonModule
  ],
  exports: [
    CommonModule, ButtonModule, FieldsetModule, InputMaskModule, MessagesModule,
    CheckboxModule, TableModule, DialogModule, InputTextModule,
    InputTextareaModule, DropdownModule, ConfirmDialogModule, CalendarModule, TabViewModule,
    ToggleButtonModule
  ]
})
export class PrimeNGModule { }
