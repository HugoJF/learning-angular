import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {class: 'contents'}
})
export class AppComponent implements OnInit {
  title = 'ng-playground';
  links = [
    {link: '/', active: false, title: 'Home'},
    {link: '/memes', active: true, title: 'Memes'},
    {link: '/todos', active: true, title: 'Todos'},
    {link: '/ui/class-toggle', active: true, title: 'Class Toggle'},
    {link: '/di/generics', active: true, title: 'Tokens'},
    {link: '/events', active: true, title: 'Events'}
  ];

  constructor() {
    //
  }

  ngOnInit(): void {
  }

}
