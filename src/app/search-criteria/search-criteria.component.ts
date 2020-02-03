import { Component, OnInit } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  recipes;

  constructor(private apiService: EdamamApiService) { }

  // maxCal = null;
  // vegan = null;
  // dairyFree = null;
  // textSearch = null;


  // userSearch = {
  //   calories: this.maxCal,
  //   vegan: this.vegan,
  //   dairyFree: this.dairyFree,
  //   textSearch: this.textSearch
  // }

  ngOnInit() {
    this.apiService.loadData().subscribe((data) => {
      this.recipes = data.hits
    });
  }


  onSearch(x) {
    console.log('helloooooooooooooo')
    this.apiService.userSearch(x).subscribe((data) => {
      this.recipes = data

    });
  }
}
