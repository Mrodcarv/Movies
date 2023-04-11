import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieslistComponent } from './movies/movieslist/movieslist/movieslist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MovieslistComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
