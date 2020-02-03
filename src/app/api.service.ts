import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userCreds } from '../titi'; 

@Injectable({
    providedIn: 'root'
})

export class ApiService { //API Call
  favArr = [];    
    constructor(private http: HttpClient) {}
    getData(userSearch) {
      let apiUrl = 
      `https://api.edamam.com/search?q=&app_id=${userCreds.userID}&q=${userSearch.textSearch}`;
      return this.http.get(this.apiUrl);
    }
}
