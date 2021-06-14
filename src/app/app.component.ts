import {Component, OnInit} from '@angular/core';
import {BackendService, Meme} from "./backend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'ng-playground';
  memes: Meme[] = [];

  constructor(private backend: BackendService) {
    //
  }

  ngOnInit(): void {
    this.backend.memes().subscribe(value => (
      this.memes = value.data.memes
    ))
  }

}
