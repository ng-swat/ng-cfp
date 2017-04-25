import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {FormArray, FormControl, FormGroup , Validators} from '@angular/forms';
>>>>>>> d219d29bf66000bd99d4f6ebc0ace7ba626ba503


@Component({
  selector: 'cfp-new-paper',
  templateUrl: './new-paper.component.html',
  styleUrls: ['./new-paper.component.css']
})
<<<<<<< HEAD
export class NewPaperComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
=======


export class NewPaperComponent implements OnInit {
  public ifSubmitted: boolean;
  coSpeakersArr: Array<string> = ['benornm@gmail.com', 'yziv95@gmail.com'];
  public newPaperFormInterface: FormGroup;
  constructor() {
    this.ifSubmitted = false;
    this.newPaperFormInterface = new FormGroup({
      EventDetails: new FormGroup({
        EventToSubmit: new FormControl('' , Validators.required),
        Language: new FormControl('', Validators.required),
      }),
      SpeechDetails: new FormGroup({
        Title: new FormControl(null, Validators.required),
        Abstract: new FormControl(null , Validators.required),
        Topic: new FormControl(null , Validators.required),
      }),
      SessionDetails: new FormGroup({
        SessionType: new FormControl('', Validators.required),
        Level: new FormControl('', Validators.required),
        Length: new FormControl('', Validators.required),
        Tags: new FormControl(),
      }),
      CoSpeakers: new FormArray([new FormControl()]) ,
      Requirements: new FormGroup({
        Requirements: new FormControl(),
        Notes: new FormControl(null),
      })
    });
    console.log(this.newPaperFormInterface.value);
  }
  ngOnInit() {
  }
  get EventDetails() {
    return this.newPaperFormInterface.get('EventDetails');
  }
  get SpeechDetails() {
    return this.newPaperFormInterface.get('SpeechDetails');
  }
  get SessionDetails() {
    return this.newPaperFormInterface.get('SessionDetails');
  }
  get CoSpeakers() {
    return this.newPaperFormInterface.get('CoSpeakers');
  }
  get Requirements() {
    return this.newPaperFormInterface.get('Requirements');
  }
  public sendForm() {
    this.ifSubmitted = true;
    console.log(this.newPaperFormInterface.value);
    console.log(this.EventDetails.get('EventToSubmit').valid);
  }
  public addToCoSpeakers () {
    this.coSpeakersArr.push(this.CoSpeakers.value);
  }
>>>>>>> d219d29bf66000bd99d4f6ebc0ace7ba626ba503

}
