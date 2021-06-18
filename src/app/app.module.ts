import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DemoComponent} from './display-contents/demo/demo.component';
import {WithContentsComponent} from './display-contents/with-contents/with-contents.component';
import {WithoutContentsComponent} from './display-contents/without-contents/without-contents.component';
import {SharedModule} from "./shared/shared.module";
import {IconsModule} from "./icons/icons.module";
import {TodoModule} from "./todo/todo.module";
import {UiModule} from "./ui/ui.module";
import {DependencyInjectionModule} from "./dependency-injection/dependency-injection.module";
import {EventsModule} from "./events/events.module";
import {DisplayContentsModule} from "./display-contents/display-contents.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    TodoModule,
    UiModule,
    DependencyInjectionModule,
    EventsModule,
    DisplayContentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
