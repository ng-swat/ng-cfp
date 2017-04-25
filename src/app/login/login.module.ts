import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, RouterOutlet} from '@angular/router';
import {loginRoutes} from './login.router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    RouterModule.forRoot(loginRoutes)
  ],
  exports: [LoginComponent, RegisterComponent, PasswordRecoveryComponent, RouterModule],
  declarations: [LoginComponent, RegisterComponent, PasswordRecoveryComponent]
})
export class LoginModule { }
