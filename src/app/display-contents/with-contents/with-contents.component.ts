import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-contents',
  templateUrl: './with-contents.component.html',
  host: {class: 'contents'}
})
export class WithContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
