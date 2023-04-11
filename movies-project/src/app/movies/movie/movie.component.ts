import { Component, OnInit } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { DataStorageService } from 'src/shared/data-storage.service';
import { Movie } from '../movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movie: Movie[]=[]

constructor(private dsService: DataStorageService, private moviesService: MoviesService,
    private cartService: CartService){
}

ngOnInit(){
  this.dsService.getMovieList().subscribe()
  this.moviesService.movieChanged.subscribe(
    (movies:Movie[]) => {this.movie = movies} )

    

}

onAdd(movie: Movie){
  this.cartService.addNewItem(movie)
  console.log('add');

}



}
