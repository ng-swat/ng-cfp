import {LoginInterface} from '../login/login.interface';
import {RegisterInterface} from '../login/register.interface';
import {PasswordRecoveryInterface} from '../login/password-recovery.interface';

export class AuthService {
  static login(loginForm: LoginInterface): void {
    console.log('AuthService - login data: ', loginForm);
  }

  static register(registerForm: RegisterInterface): void {
    console.log('AuthService - register data: ', registerForm);
  };

  static passwordRecover(passwordRecoveryForm: PasswordRecoveryInterface): void {
    console.log('AuthService - passwordRecovery data: ', passwordRecoveryForm);
  };
}
