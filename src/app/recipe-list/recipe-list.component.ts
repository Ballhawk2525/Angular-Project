import { Component, OnInit } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  constructor(private apiService: EdamamApiService) { }
  data = this.apiService.getData().subscribe((data) => this.data = { ...data });

  ngOnInit() {}

  // favorite() {
  //   let fire:any = document.getElementsByClassName("fas");
  //   if ("fas" === "fas") {
  //     fire.style.color = "red";
  //     return;
  //   } else {
  //     // fire.style.color = "orange";
  //     null;
  //   }  
  //   }

  activeClass = "hide-details";
  toggleClass(activeClass) {
    if (this.activeClass === "hide-details") {
      this.activeClass = "show-details";
    } else {
      this.activeClass = "hide-details";
    }}}
