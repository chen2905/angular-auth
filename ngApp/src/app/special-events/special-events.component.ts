import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _eventServices:EventService, private _router:Router) { }
  specialEvents:any=[]
  ngOnInit(): void {
    this._eventServices.getSpeicalEvents()
    .subscribe(
      res=>{
        this.specialEvents=res
      },
      err=>{

        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            console.log(err.status)
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }

}
