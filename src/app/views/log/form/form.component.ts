import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertsComponent } from "../../notifications/alerts/alerts.component";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
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

  submitMethod(form) {
    console.log(form);
    this.api.add(form.value).subscribe(
      (success) => {
        console.log(success);
        this.showMessage("success", "Log entry created successfully!", 10000, true);
      },
      (error) => {
        this.showMessage(
          "danger",
          "Error creating log entry! " + error.message,
          30000,
          true
        );
        console.log(error);
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
