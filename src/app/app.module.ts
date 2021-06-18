import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TodosComponent} from './todo/todos/todos.component';
import {TodoComponent} from './todo/todo/todo.component';
import {MemesComponent} from './memes/memes/memes.component';
import {ClassToggleComponent} from './ui/class-toggle/class-toggle.component';
import {OneComponent} from './dependency-injection/one/one.component';
import {EvenComponent} from './dependency-injection/even/even.component';
import {LayoutComponent} from './dependency-injection/layout/layout.component';
import {GenericsComponent} from "./dependency-injection/generics/generics.component";
import {EventsComponent} from './events/events/events.component';
import {PaginationComponent} from './shared/pagination/pagination.component';
import {EventComponent} from './events/event/event.component';
import {IconsModule} from "./icons/icons.module";
import {BadgeComponent} from './shared/badge/badge.component';
import {HeadComponent} from './shared/head/head.component';
import {ButtonComponent} from './shared/button/button.component';
import {LoginComponent} from './events/login/login.component';
import {InputComponent} from './shared/input/input.component';
import {ContainerComponent} from './shared/container/container.component';
import {FieldComponent} from './shared/field/field.component';
import {TitleComponent} from './shared/title/title.component';
import {DemoComponent} from './display-contents/demo/demo.component';
import {WithContentsComponent} from './display-contents/with-contents/with-contents.component';
import {WithoutContentsComponent} from './display-contents/without-contents/without-contents.component';
import { ClassSwitchDirective } from './class-switch.directive';
import { ClassSwitchComponent } from './ui/class-switch/class-switch.component';
import { RegisterComponent } from './events/register/register.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import {TextareaComponent} from "./shared/textarea/textarea.component";

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
    LayoutComponent,
    EventsComponent,
    PaginationComponent,
    EventComponent,
    BadgeComponent,
    HeadComponent,
    ButtonComponent,
    LoginComponent,
    InputComponent,
    ContainerComponent,
    FieldComponent,
    FieldComponent,
    TitleComponent,
    DemoComponent,
    WithContentsComponent,
    WithoutContentsComponent,
    ClassSwitchDirective,
    ClassSwitchComponent,
    RegisterComponent,
    CreateEventComponent,
    TextareaComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
