import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeClass = 'hide-details'
  toggleClass() {
    if(this.activeClass==="hide-details"){
        this.activeClass='show-details';
    }else{
        this.activeClass='hide-details';
    }
  }
}
