import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService:AuthService) { }
  registerUserData ={
    email:'',
    password:''
  }

  registerUser(){

    //console.log(this.registerUserData)

    this._authService.registerUser(this.registerUserData)
      .subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}

    )
  }
  ngOnInit(): void {
  }

}
