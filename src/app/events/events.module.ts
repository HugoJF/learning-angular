import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateEventComponent} from "./create-event/create-event.component";
import {EventComponent} from "./event/event.component";
import {EventsComponent} from "./events/events.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {BackendService} from "./shared/backend.service";
import {AppRoutingModule} from "../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import {IconsModule} from "../icons/icons.module";


@NgModule({
  declarations: [
    CreateEventComponent,
    EventComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    CreateEventComponent,
    EventComponent,
    EventsComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    BackendService
  ],
  imports: [
    CommonModule,
    SharedModule,
    IconsModule,
    AppRoutingModule
  ]
})
export class EventsModule {
}
