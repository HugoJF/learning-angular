import {Component, OnInit} from '@angular/core';
import {BackendService, Meme} from "../../backend.service";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html'
})
export class MemesComponent implements OnInit {

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
