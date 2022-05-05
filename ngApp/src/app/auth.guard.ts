import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authSerivce:AuthService,
              private _routher:Router){}

canActivate():boolean{
  if(this._authSerivce.loggedIn()){
    return true
  }else{
    this._routher.navigate(['/login'])
    return false
  }
}
}
