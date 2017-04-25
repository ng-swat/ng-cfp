import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginInterface} from '../login.interface';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'cfp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public formSubmitted: boolean;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      rememberMe: new FormControl()
    });
    this.formSubmitted = false;
  }

  ngOnInit() {
  }

  login() {
    this.formSubmitted = true;
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }

  resetClicked() {
    this.formSubmitted = false;
  }
}

