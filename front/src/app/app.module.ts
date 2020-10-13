import { BrowserModule } from '@angular/platform-browser';
import {Component, Input, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WeatherComponent } from './weather/weather.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import {Http, Response} from '@angular/http'
import {HttpClientModule} from "@angular/common/http";
// import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    // WeatherComponent,
    SearchBarComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

