import { Component, OnInit } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  favoritesPageArray;
  list = document.querySelector('#favorite');
  constructor(private apiService: EdamamApiService) { }
  

  ngOnInit() {
    this.favoritesPageArray = this.apiService.favoritesArray
  }

}


