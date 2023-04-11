import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { MovieslistComponent } from './movieslist/movieslist/movieslist.component';
import { MovieComponent } from './movie/movie.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddMoviesComponent,
    MovieslistComponent,
    MovieComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MovielistModule { }
