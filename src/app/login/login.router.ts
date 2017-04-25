import {PasswordRecoveryComponent} from './password-recovery/password-recovery.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';

export const loginRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent }
];



