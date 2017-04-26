import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector   : 'cfp-new-paper-details',
  templateUrl: './new-paper-details.component.html',
})
export class NewPaperDetailsComponent implements OnInit{

  @Input()
  public newPaperForm: FormGroup;
  public newPaperDetails: FormGroup;
  private fb: FormBuilder;

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }


  ngOnInit(): void {
    this.newPaperDetails = this.fb.group({
      EventDetails: this.fb.group({
        EventToSubmit: '',
        Language     : '',
      }, {validator: Validators.required}),
    });

    this.newPaperForm.addControl('EventDetails', this.newPaperDetails);

  }
}
