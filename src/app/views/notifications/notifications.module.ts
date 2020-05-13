import { AlertsComponent } from './alerts/alerts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CommonModule
  ],
  exports: [
    AlertsComponent
  ],
  entryComponents: [
    AlertsComponent
  ]
})
export class NotificationsModule { }
