import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { EventDetailDialogComponent } from './components/event-detail-dialog/event-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { EventFormComponent } from './components/event-form/event-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ListItemComponent,
    EventDetailDialogComponent,
    EventFormComponent
  ],
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    ListItemComponent,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [EventDetailDialogComponent, EventFormComponent]
})
export class CoreModule {
}
