import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'cfp-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public pwdForm: FormGroup;

  constructor(builder: FormBuilder) {
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

    /*this.pwdForm = new FormGroup({
     newpwd: new FormControl(),
     repeatednewpwd: new FormControl(),
     });*/
  }

  get newpwd(): FormControl {
    return <FormControl> this.pwdForm.get('newpwd');
  }

  get repeatednewpwd(): FormControl {
    return <FormControl> this.pwdForm.get('repeatednewpwd');
  }


  public login() {
    if(this.newpwd.errors !== null) {
      console.group('newpwd errors');
      console.log(this.newpwd.errors);
      console.groupEnd();
    }
    if(this.repeatednewpwd.errors !== null) {
      console.group('repeatednewpwd errors');
      console.log(this.repeatednewpwd.errors);
      console.groupEnd();
    }
    if(this.newpwd.errors === null &&
      this.repeatednewpwd.errors === null &&
      this.newpwd.value !== this.repeatednewpwd.value) {
      this.repeatednewpwd.setErrors({nonIdenticalPwd:true});
      //setTimeout(() => this.repeatednewpwd.setErrors(null), 5000);
    }
    else if(this.repeatednewpwd.hasError(`nonIdenticalPwd`)) {
      this.repeatednewpwd.setErrors(null);
    }
    if(this.pwdForm.valid) {
      console.log(this.pwdForm.value);
    }
  }

  ngOnInit() {
  }

}
