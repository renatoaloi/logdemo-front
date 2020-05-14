import { FormsModule } from '@angular/forms';
import { LogRoutingModule } from './log-routing.module';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    FormComponent,
    ManageComponent
  ],
  imports: [
    LogRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ]
})
export class LogModule { }
