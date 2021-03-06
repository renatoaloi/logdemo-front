import { NotificationsModule } from './../notifications/notifications.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManageComponent } from './manage/manage.component';

// File Routing
import { FileRoutingModule } from './file-routing.module';
import { UploadComponent } from './upload/upload.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    FormsModule,
    HttpClientModule,
    NotificationsModule,
    ModalModule.forRoot()
  ]
})
export class FileModule { }
