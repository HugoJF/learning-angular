import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from "./demo/demo.component";
import {WithContentsComponent} from "./with-contents/with-contents.component";
import {WithoutContentsComponent} from "./without-contents/without-contents.component";

@NgModule({
  declarations: [
    DemoComponent,
    WithContentsComponent,
    WithoutContentsComponent,
  ],
  exports: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DisplayContentsModule {
}
