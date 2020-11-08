import { Component, OnInit } from '@angular/core';
import {ForecastServiceService} from "../forecast-service.service";
import {ActivatedRoute, Router, ROUTES} from "@angular/router";
import {Forecast} from "../forecast";
import {LogInComponent} from "../log-in/log-in.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  log = true;
  showForm = false;
  constructor(private forecastService: ForecastServiceService,
              private router: Router,
              private logIn: LogInComponent) { }
  forecast: Forecast = {
    'countryName' : '',
    'city' : '',
    'weather' : '',
    'temperature': '',
    'lon': '',
    'lat': '',
    'wind': '',
    'pressure': '',
    'humidity': '',
    'id': null,
    'numOfSearches': 1,
    'suggestion': '',
    'upToDate': null

};
  numberOf = 1;

  logOut() {
    this.log = false;
    this.router.navigate(['/log_in']);
    this.logIn.show = true;

  }


  ngOnInit(): void {
  }

  onClick() {
    this.showForm = true;
  }

  onFinish(city: string, country: string, lat: string, lon: string) {
    this.showForm = false;
    this.forecast.city = city;
    this.forecast.countryName = country;
    this.forecast.lat = lat;
    this.forecast.lon = lon;
    this.forecast.numOfSearches = this.numberOf;
    this.forecastService.postForecast(this.forecast);
  }
}
