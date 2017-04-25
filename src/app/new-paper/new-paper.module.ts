import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaperComponent } from './new-paper.component';
<<<<<<< HEAD
=======
import {ReactiveFormsModule} from '@angular/forms';
>>>>>>> d219d29bf66000bd99d4f6ebc0ace7ba626ba503


@NgModule({
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
    ReactiveFormsModule
>>>>>>> d219d29bf66000bd99d4f6ebc0ace7ba626ba503
  ],
  declarations: [NewPaperComponent] ,
  exports: [NewPaperComponent]
})
export class NewPaperModule { }
