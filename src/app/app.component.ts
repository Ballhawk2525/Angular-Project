import { Component } from '@angular/core';
import { EdamamApiService } from './edamam-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private apiService: EdamamApiService) { }
  title = 'Recipes Routing';
}
