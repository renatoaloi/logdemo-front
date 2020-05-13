import { NotificationsModule } from './../notifications/notifications.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManageComponent } from './manage/manage.component';
import { ModalModule } from "ngx-bootstrap/modal";

// File Routing
import { FileRoutingModule } from './file-routing.module';
import { UploadComponent } from './upload/upload.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NotificationsModule,
    ModalModule
  ]
})
export class FileModule { }
