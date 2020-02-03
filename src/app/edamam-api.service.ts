import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userCreds } from './titi';

@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {
  favoritesArray = [];

  constructor(private http: HttpClient) { }
  getData(userSearch) {
    let apiUrl = `https://api.edamam.com/search?&app_id=${userCreds.userID}&app_key=${userCreds.userKey}&from=0&to=3&calories=591-722&health=alcohol-free`;
    if (userSearch.userSearch) { //userSearch. userSearch is the text input
      apiUrl += `q=${userSearch.userSearch}`
    } 
    
    return this.http.get(apiUrl);

    
  }
}
