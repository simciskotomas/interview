import { Component, OnInit } from '@angular/core';
import { EventDto } from '../../core/models/event';
import { EventService } from '../../core/services/api/event.service';
import { MatDialog } from '@angular/material/dialog';
import { EventFormComponent } from '../../core/components/event-form/event-form.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public pastEvents: EventDto[] = [];
  public upcomingEvents: EventDto[] = [];

  constructor(private eventService: EventService, public dialog: MatDialog) {}


  async ngOnInit() {
    this.pastEvents = await this.eventService.getPastEvents().toPromise();
    this.upcomingEvents = await this.eventService.getUpcomingEvents().toPromise();
  }

  public addNewEvent() {
    this.dialog.open(EventFormComponent, {
      minWidth: 250,
      minHeight: 250
    });
  }
}
