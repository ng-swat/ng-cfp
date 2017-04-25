import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPaperComponent } from './new-paper.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewPaperComponent] ,
  exports: [NewPaperComponent]
})
export class NewPaperModule { }
