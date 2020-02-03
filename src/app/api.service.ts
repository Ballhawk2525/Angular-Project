import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userCreds } from '../titi'; 

@Injectable({
    providedIn: 'root'
})

export class ApiService { //API Call
    apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${userCreds.userID}&app_key=${userCreds.userKey}&from=0&to=3&calories=591-722&health=alcohol-free`;
    
    constructor(private http: HttpClient) {}

    getData() {
      return this.http.get(this.apiUrl);
    }
}

  
