import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvenComponent} from "./even/even.component";
import {OneComponent} from "./one/one.component";
import {GenericsComponent} from "./generics/generics.component";
import {LayoutComponent} from "./layout/layout.component";
import {EvenCounterService} from "./shared/even-counter.service";
import {OneCounterService} from "./shared/one-counter.service";

@NgModule({
  declarations: [
    EvenComponent,
    OneComponent,
    GenericsComponent,
    LayoutComponent,
  ],
  exports: [
    GenericsComponent,
  ],
  providers: [
    EvenCounterService,
    OneCounterService,
  ],
  imports: [
    CommonModule
  ]
})
export class DependencyInjectionModule {
}
