import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventDto } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getUpcomingEvents() {
    return this.http.get<EventDto[]>(`${this.url}upcomingEvents`);
  }

  getPastEvents() {
    return this.http.get<EventDto[]>(`${this.url}pastEvents`);
  }

}
