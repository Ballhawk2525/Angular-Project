import { Component, OnInit, Input } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';



@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})

export class RecipeListComponent implements OnInit {
  constructor(private apiService: EdamamApiService) {}
  data = this.apiService
    .getData("")
    .subscribe(data => (this.data = { ...data }));
  userSearch = null;

  // @Input() recipes: Favorited;

  // onSearch() {
  //   this.data = this.apiService.getData(this.userSearch).subscribe(data => {
  //     this.data = { ...data };
  //     console.log(data);
  //   });
  // }
  // constructor(private apiService: EdamamApiService) { }
  // data = this.apiService.getData('').subscribe((data) => this.data = { ...data });


  maxCal = null;
  vegan = null;
  dairyFree = null;
  textSearch = null;


  userSearch = {
    calories: this.maxCal,
    vegan: this.vegan,
    dairyFree: this.dairyFree,
    textSearch: this.textSearch
  }
  ngOnInit() {
  }

  onSearch() {
    let searchCriteria = this.textSearch;
    if (this.vegan === true) {
      searchCriteria += '&healt=vegan';
    }
    if (this.dairyFree === true) {
      searchCriteria += '&healt=dairy-free';
    }
    if (this.maxCal != null) {
      searchCriteria += '&calories=' + this.maxCal;
    }
    console.log(searchCriteria)
    this.apiService.userSearch(searchCriteria).subscribe((data) => {
      this.recipes = data.hits
    });
  }



  ngOnInit() {}

  favorite(recipe) {
    console.log(recipe);
    let fire: any = document.querySelector("#favButton");
    fire.classList.toggle("fav");
  }

  add(recipe) {
    this.apiService.favArr.push(recipe);
  }

  // delete(recipe) {
  //   this.recipes.remove(recipe);
  // }

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
