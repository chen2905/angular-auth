import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }
  loginUserData ={
    email:'',
    password:''
  }

  ngOnInit(): void {
  }
  loginUser(){
   // console.log(this.loginUserData)
  this._authService.loginUser(this.loginUserData)
  .subscribe(
    res=>{

      console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/special'])

    },
    err=>{console.log(err)}
  )
  }
}
