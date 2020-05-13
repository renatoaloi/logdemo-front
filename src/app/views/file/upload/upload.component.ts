import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AlertsComponent } from "../../notifications/alerts/alerts.component";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent implements OnInit {
  fileToUpload: File;
  apiAlert = {
    type: "",
    message: "",
    timeout: 0,
    display: false,
    dismissible: true,
  };
  modalRef: BsModalRef;

  constructor(private api: ApiService, private modalService: BsModalService) {}

  ngOnInit(): void {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(form) {
    console.log(form);
    this.api.uploadFile(this.fileToUpload).subscribe(
      (success) => {
        console.log("success", success);
        this.showMessage(
          "success",
          "File uploaded successfully!",
          10000,
          true
        );
      },
      (error) => {
        console.log("error", error);
        this.showMessage(
          "danger",
          "Error uploading file! " + error.message,
          30000,
          true
        );
      },
      () => console.log("done")
    );
  }

  showMessage(type, message, timeout, display, dismissible = true) {
    this.modalRef = this.modalService.show(AlertsComponent);
    this.modalRef.content.message = message;
    this.modalRef.content.type = type;
    this.modalRef.content.message = message;
    this.modalRef.content.timeout = timeout;
    this.modalRef.content.display = display;
    this.modalRef.content.dismissible = dismissible;
  }
}
