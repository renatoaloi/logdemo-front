import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  private files;

  constructor(private api: ApiService) {}


  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.api.getList().subscribe(
      data => {
        this.files = data;
      },
      err => console.error(err),
      () => {
        console.log("DONE!", this.files);
      }
    );
  }
}
