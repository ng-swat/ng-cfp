import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaperComponent } from './new-paper.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [NewPaperComponent] ,
  exports: [NewPaperComponent]
})
export class NewPaperModule { }
