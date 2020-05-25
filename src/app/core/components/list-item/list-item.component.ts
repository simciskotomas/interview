import { Component, Input, OnInit } from '@angular/core';
import { EventDto } from '../../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDetailDialogComponent } from '../event-detail-dialog/event-detail-dialog.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  public event: EventDto;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openEventDetail(event: EventDto) {
    this.dialog.open(EventDetailDialogComponent, {
      data: {
        ...event
      },
      minWidth: 250,
      minHeight: 250,
      maxWidth: 500
    });
  }
}
