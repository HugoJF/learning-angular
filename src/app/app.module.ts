import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TodosComponent} from './todo/todos/todos.component';
import {TodoComponent} from './todo/todo/todo.component';
import {MemesComponent} from './memes/memes/memes.component';
import {ClassToggleComponent} from './ui/class-toggle/class-toggle.component';
import {OneComponent} from './dependency-injection/one/one.component';
import {EvenComponent} from './dependency-injection/even/even.component';
import {LayoutComponent} from './dependency-injection/layout/layout.component';
import {GenericsComponent} from "./dependency-injection/generics/generics.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    MemesComponent,
    ClassToggleComponent,
    GenericsComponent,
    OneComponent,
    EvenComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
