import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  public eventForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventFormComponent>
  ) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      date: new FormControl(''),
      street: new FormControl(''),
      municipality: new FormControl(''),
      zip: new FormControl(''),
      country: new FormControl('')
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public saveEvent() {
    console.log('close clicked');
  }

}
