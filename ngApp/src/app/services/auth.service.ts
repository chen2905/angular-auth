import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  registerUrl = 'http://localhost:3000/api/register';
  registerUser(user: any) {
    return this._http.post<any>(this.registerUrl, user);
  }

  loginUrl = 'http://localhost:3000/api/login';
  loginUser(user: any) {
    return this._http.post<any>(this.loginUrl, user);
  }
}
