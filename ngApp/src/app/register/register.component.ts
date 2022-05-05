import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService,private _router:Router) { }
  registerUserData ={
    email:'',
    password:''
  }

  registerUser(){

    //console.log(this.registerUserData)

    this._authService.registerUser(this.registerUserData)
      .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        console.log(res)
        this._router.navigate(['/special'])
      },
      err=>{console.log(err)}

    )
  }
  ngOnInit(): void {
  }

}
