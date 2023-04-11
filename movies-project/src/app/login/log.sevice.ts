import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { User } from "./user.model";


interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}


@Injectable({providedIn: 'root'})

export class LogService{

user = new BehaviorSubject<User>(null)

constructor(private http:HttpClient){}

signup(email:string, password:string){
    return this.http.post<AuthResponseData>(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBeQ7KSukK6r-Jcgc_o07vpe9Gleyy2p78',
    {
    email: email,
    password: password,
    returnSecureToken: true
})
}

logIn(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeQ7KSukK6r-Jcgc_o07vpe9Gleyy2p78',{
    email:email,
    password: password,
    returnSecureToken: true
}
    )

}
}