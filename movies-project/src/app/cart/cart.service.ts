import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Movie } from '../movies/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Movie[]>([]);
  cartAdded$ = this.cart.asObservable()
  movies: Movie[] = []


  constructor() { }

  addNewItem(movie:Movie){

    this.movies = [...this.movies, movie]
    this.cart.next(this.movies.slice())
  }

  deleteItem(index: number){
    this.movies.splice(index, 1)
    this.cart.next(this.movies.slice())
  }
}
