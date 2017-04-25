import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'cfp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public control: FormGroup;
  public Email : string;

  constructor() {
    this.Email = 'Yziv95@gmail.com';
    this.control = new FormGroup({
      GeneralInfo: new FormGroup({
        Image: new FormControl(null),
        Name: new FormControl(null,Validators.required),
        Surname: new FormControl(null,Validators.required),
        AllowImageUsage: new FormControl('true',Validators.required),
        Biography: new FormControl(null,Validators.required)
      }),
      EmploymentInfo: new FormGroup({
        // Companies: new FormControl({Company: null, Role: null})
        Company : new FormControl('500Tech',Validators.required),
        Role : new FormControl('Developer',Validators.required)

      }),
      Social: new FormGroup({
        Nationality: new FormControl('Israeli',Validators.required),
        CityCountry: new FormControl('Ashdod - Israel',Validators.required),
        Phone: new FormControl('0506944081',Validators.required),
        Website: new FormControl('www.harbo.com'),
        Twitter: new FormControl('I don"t have twitter'),
        Facebook: new FormControl('https://www.facebook.com/yoni.ziv.3'),
        Linkedin: new FormControl('https://www.linkedin.com/in/yonatan-ziv-b7138b112/'),
        Git: new FormControl('https://github.com/YoniZiv')
      }),

      Languages: new FormGroup({
        Primary: new FormControl('Hebrew',Validators.required),
        Secondary: new FormControl('English'),
        Third: new FormControl('Lithuanian'),
        Fourth: new FormControl('Russian')
      }),

      CommunityInfo: new FormGroup({
        IsCommunityMemeber : new FormControl('true'),
        Community : new FormControl('AngularAPP')
      }),

      Agreement : new FormGroup({
        Agrees : new FormControl('true',Validators.required)
      })
    });
  }

  SaveProfile(){
    console.log("Clicked Submit");
    console.log(this.control.valid);
  }

  ngOnInit() {
  }

  get GeneralInfo(){
    return this.control.get('GeneralInfo');
  }
  get EmploymentInfo(){
    return this.control.get('EmploymentInfo');
  }
  get Social(){
    return this.control.get('Social');
  }
  get Languages(){
    return this.control.get('Languages');
  }
  get CommunityInfo(){
    return this.control.get('CommunityInfo');
  }
  get Agreement(){
    return this.control.get('Agreement');
  }
}
