import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl = 'http://localhost:3000/api/events';
  specialEventUrl ='http://localhost:3000/api/special';
  constructor(private _http:HttpClient) { }

  getEvents(){
    return this._http.get<any>(this.eventUrl)
  }
  getSpeicalEvents(){
    return this._http.get<any>(this.specialEventUrl)
  }
}
