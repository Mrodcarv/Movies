import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Movie } from '../movies/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  movies: Movie[] = []

  constructor(private cartService:CartService){
    
  }

  ngOnInit(){
    this.cartService.cartAdded$.subscribe((movies: Movie[]) => {
    this.movies = movies;console.log(this.movies)})
    
    
  }

  onRemove(i){
    this.cartService.deleteItem(i)
  }


}
