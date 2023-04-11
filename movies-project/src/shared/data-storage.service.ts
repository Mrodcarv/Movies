import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Movie } from "src/app/movies/movie.model";
import { MoviesService } from "src/app/movies/movie/movies.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{

constructor(private http: HttpClient, private moviesService:MoviesService){}




storeMovies(){
    const movies = this.moviesService.getMovies()
    this.http.put('https://movies-a135c-default-rtdb.firebaseio.com/movies.json', movies).subscribe(response =>{
    console.log(response)
}
)
}

getMovieList(): Observable<any>{
    return this.http.get('https://movies-a135c-default-rtdb.firebaseio.com/movies.json')
    .pipe(tap((result)=>this.moviesService.movieChanged.next(result)))
   }
}
    