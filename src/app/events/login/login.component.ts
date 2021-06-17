import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  host: {class: 'contents'}
})
export class LoginComponent implements OnInit {
  loading = false;

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.password.errors);
  }
}
