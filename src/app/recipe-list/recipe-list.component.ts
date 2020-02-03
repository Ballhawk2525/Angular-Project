import { Component, OnInit } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';



@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes;
  constructor(private apiService: EdamamApiService) { }

  ngOnInit() {
  }

  onSearch(x) {
    console.log(x)
    this.apiService.userSearch(x).subscribe((data) => {
      this.recipes = data.hits;
    });
  }



  favorite() {
    let fire: any = document.querySelector("#favButton");
    fire.classList.toggle("fav");
  }
  activeClass = "hide-details";
  toggleClass() {
    if (this.activeClass === "hide-details") {
      this.activeClass = "show-details";
    } else {
      this.activeClass = "hide-details";
    }
  }
}

export function addFavorite() {
  let favoriteLabel = document.querySelector('#recipe-label');
  let favoriteDetails = document.querySelector('#recipe-details');

  console.log(favoriteLabel, favoriteDetails);
}
