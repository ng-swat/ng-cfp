import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NavigationModule} from './navigation/navigation.module';
import {PasswordModule} from './password/password.module';
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
    ReactiveFormsModule
    NewPaperModule,
    LoginModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
