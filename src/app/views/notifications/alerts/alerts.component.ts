import { Component, OnInit, Input } from '@angular/core';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { BsModalRef } from 'ngx-bootstrap/modal';

export function getAlertConfig(): AlertConfig {
  return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
  templateUrl: 'alerts.component.html',
  styleUrls: ['alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() type = 'success';
  @Input() message: String;
  @Input() timeout = 5000;
  @Input() dismissible = true;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {

  }

  onClose() {
    this.bsModalRef.hide();
  }

}
