import { Component, OnInit } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';


@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private apiService: EdamamApiService) { }
  userSearch = null;
  minCal = null;
  maxCal = null;
  vegan= null;
  dairyFree = null;

  textSearch = {
    minimumCalories: this.minCal,
    maximumCalories: this.maxCal,
    vegan: this.vegan,
    dairyFree: this.dairyFree, 
    searchCrit: this.userSearch
  }
  onSearch() {
  this.apiService.getData(this.userSearch).subscribe((data) => { 
      console.log(data);
    });

  }
  

  ngOnInit() {
  }

}
