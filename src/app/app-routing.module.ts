import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';


const routes: Routes = [
  { path: 'home', component: RecipeListComponent },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: '**', component: SearchCriteriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
