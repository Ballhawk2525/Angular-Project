import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {

  apiUrl = "https://api.edamam.com/search?q=chicken&app_id=46e0f808&app_key=b5d958b3e676ffad7efba7bceedbd63b&from=0&to=3&calories=591-722&health=alcohol-free";
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.apiUrl);
  }
}
