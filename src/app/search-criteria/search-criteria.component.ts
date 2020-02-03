import { Component, OnInit } from "@angular/core";
import { EdamamApiService } from "../edamam-api.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  recipes;

  constructor(private apiService: EdamamApiService) { }

  ngOnInit() {
    this.apiService.loadData().subscribe((data) => {
      this.recipes = data
    });
  }

  onSearch(x) {
    console.log("helloooooooooooooo");
    this.apiService.userSearch(x).subscribe(data => {
      this.recipes = data;
    });
  }
}
