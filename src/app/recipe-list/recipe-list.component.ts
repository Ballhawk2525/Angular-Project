import { Component } from '@angular/core';
import { EdamamApiService } from '../edamam-api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  constructor(private apiService: EdamamApiService) { }
  data = this.apiService.getData().subscribe((data) => this.data = { ...data });

  activeClass = 'hide-details'
  toggleClass() {
    if(this.activeClass==="hide-details"){
        this.activeClass='show-details';
    }else{
        this.activeClass='hide-details';
    }
  }
}
