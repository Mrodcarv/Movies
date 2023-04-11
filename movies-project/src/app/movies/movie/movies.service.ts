import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Movie } from "../movie.model";

@Injectable({providedIn: 'root'})
export class MoviesService{

private movie: Movie[] = []
movieChanged = new Subject


addMovie(movie: Movie){
    this.movie.push(movie)
    this.movieChanged.next(this.movie.slice())
}

getMovies(){
    return this.movie.slice();
}


}