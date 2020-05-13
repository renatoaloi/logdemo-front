import { LogRoutingModule } from './log-routing.module';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    FormComponent,
    ManageComponent
  ],
  imports: [
    LogRoutingModule,
    CommonModule
  ]
})
export class LogModule { }
