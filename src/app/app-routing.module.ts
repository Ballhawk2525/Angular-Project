import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'Home', component: RecipeListComponent }, 
  {path: 'Favorites', component: FavoritesPageComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
