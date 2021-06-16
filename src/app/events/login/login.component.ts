import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  errors?: { [id: string]: Error };
  loading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSubmit() {

  }
}
