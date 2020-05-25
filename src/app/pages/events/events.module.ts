import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { CommonAppModule } from '../../common/common.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from '../../core/core.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatTabsModule,
    MatListModule,
    CommonAppModule,
    CoreModule
  ]
})
export class EventsModule { }
