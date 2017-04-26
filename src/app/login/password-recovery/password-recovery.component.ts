import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cfp-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  public passwordRecoveryForm: FormGroup;
  public formSubmitted: boolean;
  constructor() {
    this.passwordRecoveryForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  passwordRecover() {
    this.formSubmitted = true;
    console.log(this.passwordRecoveryForm.valid);
  }

}
