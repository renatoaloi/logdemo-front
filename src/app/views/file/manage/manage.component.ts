import { ApiService } from "../api.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: "./manage.component.html",
  styleUrls: ["./manage.component.css"],
})
export class ManageComponent implements OnInit {
  public files;
  public file;

  @ViewChild('modalViewLabel') public modalViewLabel: ModalDirective;

  constructor(private api: ApiService) {}

  onView(id) {
    this.modalViewLabel.show();
    console.log(id);
    this.api.get(id).subscribe(
      (success) => { console.log("ok", success); this.file = success; },
      (error) => { console.log("error", error); },
      () => {
        console.log("done");
      }
    );
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.api.getList().subscribe(
      (data) => {
        this.files = data;
      },
      (err) => console.error(err),
      () => {
        console.log("DONE!", this.files);
      }
    );
  }
}
