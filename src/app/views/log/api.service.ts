import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get<any>('/api/list');
  }

  getPage(page, size): Observable<any> {
    return this.http.get<any>('/api/page/' + page + '/' + size);
  }

  get(id: BigInteger) {
    return this.http.get('/api/get/' + id.toString());
  }

  add(form) {
    return this.http.post('/api/add', form);
  }
}
