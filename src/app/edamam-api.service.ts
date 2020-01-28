import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {

  apiUrl = 'https://developer.edamam.com/';
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
}
