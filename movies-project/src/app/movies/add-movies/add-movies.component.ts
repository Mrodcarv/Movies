import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MoviesService } from '../movie/movies.service';
import { Movie } from '../movie.model';
import { DataStorageService } from 'src/shared/data-storage.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  addForm: FormGroup;
  public years: number[] = []
  enableForm = false;
  

constructor(private dataStorageService: DataStorageService, private moviesService: MoviesService){

  const year = new Date().getFullYear()
    for (let index = year; index >= 1900; index--) {
      this.years = [...this.years, index]
      
    }
}


  ngOnInit(){
    this.addForm = new FormGroup({
      title: new FormControl('',Validators.required),
      year: new FormControl(null, Validators.required),
      genre: new FormControl('', Validators.required),
      imagePath: new FormControl('',Validators.required),
      desc: new FormControl('',Validators.required)

    })

    this.addForm.reset();
  }

  onAddMovie(){
    this.moviesService.addMovie(this.addForm.value)
    console.log(this.addForm.value)
    this.dataStorageService.storeMovies()
    }

  showForm(){
    this.enableForm = !this.enableForm

  }

}

