import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userCreds } from './titi';

@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {

  constructor(private http: HttpClient) { }
  getData(userSearch) {
    console.log(userSearch);
    let apiUrl = `https://api.edamam.com/search?app_id=${userCreds.userID}&app_key=${userCreds.userKey}&q=${userSearch.textSearch}`;


    return this.http.get(apiUrl);


  }

}
