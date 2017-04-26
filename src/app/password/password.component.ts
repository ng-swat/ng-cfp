import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Password} from '../shared/password';

@Component({
  selector: 'cfp-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public pwdForm: FormGroup;
  public password:Password;

  constructor(builder: FormBuilder, password:Password) {
    this.password= password;
    this.pwdForm = builder.group({
      newpwd: [null, [
        Validators.required,
        Validators.minLength(8)
      ]],
      repeatednewpwd: [null, [
        Validators.required,
        Validators.minLength(8)
      ]]
    });
  }

  get newpwd(): FormControl {
    return <FormControl> this.pwdForm.get('newpwd');
  }

  get repeatednewpwd(): FormControl {
    return <FormControl> this.pwdForm.get('repeatednewpwd');
  }

  private checkError(password) {
    if(password.control.errors !== null) {
      console.group(`${password.label} errors`);
      console.log(password.control.errors);
      console.groupEnd();
    }
  }

  private validateIdenticalPwd(newpwd, repeatednewpwd) {
    if(newpwd.errors === null &&
      repeatednewpwd.errors === null &&
      newpwd.value !== repeatednewpwd.value) {
      repeatednewpwd.setErrors({nonIdenticalPwd:true});
      //setTimeout(() => this.repeatednewpwd.setErrors(null), 5000);
    }
    else if(repeatednewpwd.hasError(`nonIdenticalPwd`)) {
      repeatednewpwd.setErrors(null);
    }
  }

  public save() {
    this.checkError({control:this.newpwd, label:'New Password'});
    this.checkError({control:this.repeatednewpwd, label:'Repeat New Password'});
    this.validateIdenticalPwd(this.newpwd,this.repeatednewpwd);
    if(this.pwdForm.valid) {
      console.log(this.pwdForm.value);
      this.password.update(this.newpwd.value);
    }
  }

  ngOnInit() {
  }

}
