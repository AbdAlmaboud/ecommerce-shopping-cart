import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../common/LoginUser';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,private router:Router) { }

  signIn(userData:LoginUser){
    return this.httpClient.post<LoginRes>("http://localhost:8080/rest/auth/login",{'email':userData.email,'password':userData.password}).subscribe(
      (data) =>{
      sessionStorage.setItem('token',data.token);
      this.router.navigate(['category']);

    })
  }

  signUp(username:string, password:string, email:string, card :string){
    return this.httpClient.post<string>("http://localhost:8080/rest/auth/register", {
      username,
      password,
      email,
      card
    }).subscribe((data) =>{
      console.log(data);
    })
  }
  logout(){
    sessionStorage.clear();
  }
}


class LoginRes{
  email:string;
  token:string;

  constructor(token:string,email:string){
    this.email=email;
    this.token=token;
  }
}