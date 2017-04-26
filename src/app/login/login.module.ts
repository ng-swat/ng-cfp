import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent, PasswordRecoveryComponent],
  declarations: [LoginComponent, RegisterComponent, PasswordRecoveryComponent]
})
export class LoginModule { }
