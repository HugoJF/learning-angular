import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from "./todo/todos/todos.component";
import {MemesComponent} from "./memes/memes/memes.component";
import {AppComponent} from "./app.component";
import {ClassToggleComponent} from "./ui/class-toggle/class-toggle.component";
import {GenericsComponent} from "./dependency-injection/generics/generics.component";
import {EventsComponent} from "./events/events/events.component";

const routes: Routes = [
  {
    path: '', component: AppComponent,
  }, {
    path: 'memes', component: MemesComponent,
  }, {
    path: 'todos', component: TodosComponent,
  }, {
    path: 'ui/class-toggle', component: ClassToggleComponent,
  }, {
    path: 'di/generics', component: GenericsComponent,
  }, {
    path: 'events', component: EventsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
