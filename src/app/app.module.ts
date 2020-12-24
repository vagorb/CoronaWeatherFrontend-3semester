import { BrowserModule } from '@angular/platform-browser';
import {Component, Input, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LogInComponent} from "./log-in/log-in.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LogInComponent,
    AdminComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

