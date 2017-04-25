import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation/navigation.module';
import {PasswordModule} from './password/password.module';
import {PasswordComponent} from './password/password.component';
import {RouterModule} from '@angular/router';

export const routes = [
  {path:'', component: PasswordComponent},
  {path:'password', component: PasswordComponent}
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavigationModule,
    PasswordModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
