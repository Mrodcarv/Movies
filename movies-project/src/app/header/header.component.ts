import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../login/log.sevice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLogged = false;
  private userSub: Subscription;

constructor(private logService:LogService){}

ngOnInit(){
  this.userSub = this.logService.user.subscribe(user =>{
  this.isLogged = !user ? false : true; 
  });
}

ngOnDestroy(){
  this.userSub.unsubscribe();
}
}
