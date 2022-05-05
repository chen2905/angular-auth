import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private _eventService:EventService) { }
  events :any =[]
  ngOnInit(): void {

    this._eventService.getEvents()
    .subscribe(
      res=>{
        this.events=res
      },
      err=>{
        console.log('error:'+err)
      }
    )
  }

}
