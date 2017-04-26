import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {ProfileModule} from "./profile/profile.module";

import {NewPaperModule} from './new-paper/new-paper.module';

import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,

    ProfileModule,
    HttpModule,
    LoginModule,
    ReactiveFormsModule

    NewPaperModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
