import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private _eventServices:EventService) { }
  specialEvents:any=[]
  ngOnInit(): void {
    this._eventServices.getSpeicalEvents()
    .subscribe(
      res=>{
        this.specialEvents=res
      },
      err=>{
        console.log("special events error:"+ err)
      }
    )
  }

}
