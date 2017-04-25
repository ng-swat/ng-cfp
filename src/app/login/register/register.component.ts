import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'cfp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public formSubmitted: boolean;
  public authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      password2: new FormControl(null, [Validators.required]),
    }, this.passwordMatchValidator);
  }

  ngOnInit() {
  }

  register() {
    this.formSubmitted = true;
    console.log('registerForm validation: ', this.registerForm.valid);

    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value);
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    if (formGroup.get('password').value !== formGroup.get('password2').value) {
      formGroup.get('password2').setErrors({error: 'Passwords Not Equals'});
      return {error: 'Passwords Not Equals'};
    } else {
      return null;
    }
  }
}

