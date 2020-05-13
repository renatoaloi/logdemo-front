import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, retry, take } from "rxjs/operators";
import * as uuid from 'uuid';

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get("/api/file/list");
  }

  get(id: BigInteger) {
    return this.http.get("/api/file/get/" + id.toString());
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append("mfile", file, file.name);
    return this.http.post("/api/file/upload", formData).pipe(take(1));
  }
}
