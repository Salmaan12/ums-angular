import { Injectable } from '@angular/core';
import { ApiLinks } from '../data/apiLinks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _apilink: ApiLinks, private http: HttpClient) { }
  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    return headers;
  }
  getAllUsers() {
    let headers = this.getHeaders();
    return this.http.get(this._apilink.userList, { headers });
  }

}
