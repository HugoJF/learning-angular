import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {TodosComponent} from "./todo/todos/todos.component";

const routes: Routes = [
  {
    path: 'memes', component: AppComponent,
  }, {
    path: 'todos', component: TodosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
