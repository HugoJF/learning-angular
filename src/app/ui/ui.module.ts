import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassSwitchComponent} from "./class-switch/class-switch.component";
import {ClassSwitchDirective} from "./class-switch/class-switch.directive";
import {ClassToggleComponent} from "./class-toggle/class-toggle.component";

@NgModule({
  declarations: [
    ClassSwitchComponent,
    ClassSwitchDirective,
    ClassToggleComponent,
  ],
  exports: [
    ClassSwitchComponent,
    ClassSwitchDirective,
    ClassToggleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule {
}
