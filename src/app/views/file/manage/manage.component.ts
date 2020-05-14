import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  public files;
  public file;
  public page = 0;
  public size = 0;
  public pageSize = 10;

  @ViewChild('modalViewLabel') public modalViewLabel: ModalDirective;

  constructor(private api: ApiService) {}

  onView(id) {
    this.modalViewLabel.show();
    console.log(id);
    this.api.get(id).subscribe(
      (success) => { console.log('ok', success); this.file = success; },
      (error) => { console.log('error', error); },
      () => {
        console.log('done');
      }
    );
  }

  ngOnInit(): void {
    this.getList(this.page, this.pageSize);
  }

  getList(page, pageSize) {
    this.api.getPage(page, pageSize).subscribe(
      (data) => {
        this.files = data;
        this.size = data.length;
      },
      (err) => console.error(err),
      () => {
        console.log('DONE!', this.files);
      }
    );
  }

  onNext() {
    if (this.page <= this.size / this.pageSize) {
      this.getList(++this.page, this.pageSize);
    }
  }

  onPrev() {
    if (this.page > 0) {
      this.getList(--this.page, this.pageSize);
    }
  }

}
