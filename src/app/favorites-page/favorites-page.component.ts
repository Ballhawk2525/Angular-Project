import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { EdamamApiService } from '../edamam-api.service';


@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  favoriteArray;

  constructor(private apiService: EdamamApiService) {}

  ngOnInit() {
    this.favoriteArray = this.apiService.favArr;
  }

  delete(item) {
    this.favoriteArray.splice(item, 1);
  }

  
}
