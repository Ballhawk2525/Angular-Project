import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userCreds } from './titi';



@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {
  favArr: any = [];

  constructor(private http: HttpClient) { }



  loadData() {
    let searchUrl = `https://api.edamam.com/search?q=chicken&app_id=${userCreds.userID}&app_key=${userCreds.userKey}`
    return this.http.get(searchUrl)
  }

  userSearch(searchTerm) {
    let searchUrl = `https://api.edamam.com/search?q=${searchTerm}&app_id=${userCreds.userID}&app_key=${userCreds.userKey}`
    return this.http.get(searchUrl)
  }



  // if (${dairyFree} === true) {

}





  // getData(userSearch) {
  //   console.log('hello joe')
  //   console.log(userSearch);
  //   let apiUrl = `https://api.edamam.com/search?app_id=${userCreds.userID}&app_key=${userCreds.userKey}&q=${userSearch.textSearch}`;
  //   console.log(apiUrl);
  //   console.log(this.http.get(apiUrl));


  //   return this.http.get(apiUrl);


  // }


