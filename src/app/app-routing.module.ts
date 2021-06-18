import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./todo/todos/todos.component";
import {AppComponent} from "./app.component";
import {ClassToggleComponent} from "./ui/class-toggle/class-toggle.component";
import {GenericsComponent} from "./dependency-injection/generics/generics.component";
import {EventsComponent} from "./events/events/events.component";
import {LoginComponent} from "./events/login/login.component";
import {DemoComponent} from "./display-contents/demo/demo.component";
import {RegisterComponent} from "./events/register/register.component";
import {CreateEventComponent} from "./events/create-event/create-event.component";

const routes: Routes = [
  {
    path: '', component: AppComponent,
  }, {
    path: 'todos', component: TodosComponent,
  }, {
    path: 'ui/class-toggle', component: ClassToggleComponent,
  }, {
    path: 'di/generics', component: GenericsComponent,
  }, {
    path: 'events', component: EventsComponent,
  }, {
    path: 'events/login', component: LoginComponent,
  }, {
    path: 'events/create', component: CreateEventComponent,
  }, {
    path: 'events/register', component: RegisterComponent,
  }, {
    path: 'display-contents', component: DemoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
