import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { userCreds } from './titi';

@Injectable({
  providedIn: 'root'
})
export class EdamamApiService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  getData() {
    return this.http.get(this.apiUrl);
=======
  getData(userSearch) {
    let apiUrl = `https://api.edamam.com/search?q=${userSearch}&app_id=${userCreds.userID}&app_key=${userCreds.userKey}&from=0&to=3&calories=591-722&health=alcohol-free`;
    return this.http.get(apiUrl);
>>>>>>> 489d1337583093045870dc085e64a3922d356641
  }
}
