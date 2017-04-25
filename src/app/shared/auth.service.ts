import {LoginInterface} from '../login/login.interface';
import {RegisterInterface} from '../login/register.interface';
import {PasswordRecoveryInterface} from '../login/password-recovery.interface';

export class AuthService {
  login(loginForm: LoginInterface): void {
    console.log('AuthService - login data: ', loginForm);
  }

  register(registerForm: RegisterInterface): void {
    console.log('AuthService - register data: ', registerForm);
  };

  passwordRecover(passwordRecoveryForm: PasswordRecoveryInterface): void {
    console.log('AuthService - passwordRecovery data: ', passwordRecoveryForm);
  };
}
