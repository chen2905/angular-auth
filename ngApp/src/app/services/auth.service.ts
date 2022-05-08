import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient,private _router:Router) {}
  registerUrl = 'http://localhost:3000/api/register';
  registerUser(user: any) {
    return this._http.post<any>(this.registerUrl, user);
  }

  loginUrl = 'http://localhost:3000/api/login';
  loginUser(user: any) {
    return this._http.post<any>(this.loginUrl, user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  loggout(){
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
