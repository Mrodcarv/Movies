import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LogService } from './log.sevice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  isLogin = false;


constructor(private logService:LogService){}


ngOnInit(){
  this.logForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)
  });}

onSubmit(){
  if(!this.logForm.valid){
    return
  }

  if(this.isLogin){
  const email = this.logForm.value.email
  const password = this.logForm.value.password

  this.logService.signup(email,password).subscribe( resData =>{
    console.log(resData)
  },
    error => {
    console.log(error)
    })
    if(!this.isLogin){
    this.logService.logIn(email,password).subscribe()
    }
  
    this.logForm.reset()
  }
 
}

  
onSignUp(){
  this.isLogin = true
}

onLogIn(){
  this.isLogin = false
}

}
