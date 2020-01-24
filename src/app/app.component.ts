import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private apiService: ApiService) {}
  title = 'Recipes Routing';
  data = this.apiService.getData().subscribe((data) => this.data = { ...data });
}
