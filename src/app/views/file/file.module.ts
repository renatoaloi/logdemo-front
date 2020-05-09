import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ManageComponent } from './manage.component';


// File Routing
import { FileRoutingModule } from './file-routing.module';

@NgModule({
  declarations: [
    ManageComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class FileModule { }
