import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClassSwitch]'
})
export class ClassSwitchDirective {
  _addedClasses?: string;
  _switch = '';
  _cases: { [id: string]: string } = {};

  @Input()
  set appClassSwitch(value: any) {
    this._switch = value.toString();
    this.refresh();
  }

  @Input()
  set appClassCases(value: { [id: string]: string }) {
    this._cases = value;
    this.refresh();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  refresh() {
    const selectedClasses = this._cases[this._switch];

    if (selectedClasses) {
      // this.renderer.addClass(this.el.nativeElement, selectedClasses);
      this.addClasses(selectedClasses);
    }

    if (typeof this._addedClasses === 'string') {
      // this.renderer.removeClass(this.el.nativeElement, this._addedClasses);
      this.removeClasses(this._addedClasses);
    }
    this._addedClasses = selectedClasses;
  }

  addClasses(classes: string) {
    const list = classes.split(' ');

    for (const c of list) {
      this.renderer.addClass(this.el.nativeElement, c);
    }
  }

  removeClasses(classes: string) {
    const list = classes.split(' ');

    for (const c of list) {
      this.renderer.removeClass(this.el.nativeElement, c);
    }
  }
}
