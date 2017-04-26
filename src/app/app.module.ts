import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {PasswordComponent} from './password/password.component';
import {RouterModule} from '@angular/router';
import {ProfileModule} from "./profile/profile.module";
import {NewPaperModule} from './new-paper/new-paper.module';
import {LoginModule} from './login/login.module';

export const routes = [
  {path:'', component: PasswordComponent},
  {path:'password', component: PasswordComponent}
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    HttpModule,
    ProfileModule,
    LoginModule,
    NewPaperModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
