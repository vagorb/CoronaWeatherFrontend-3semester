import { Component, OnInit } from '@angular/core';
import {ForecastServiceService} from "../forecast-service.service";
import {ActivatedRoute} from "@angular/router";
import {Forecast} from "../forecast";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showForm = false;
  // forecastService = ForecastServiceService;
  constructor(private forecastService: ForecastServiceService) { }
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

  ngOnInit(): void {
  }

  onClick() {
    this.showForm = true;
  }

  onFinish(city: string, country: string, humidity: string, lat: string, lon: string, pressure: string, temperature: string
  , weather: string, wind: string) {
    this.showForm = false;
    this.forecast.city = city;
    this.forecast.countryName = country;
    this.forecast.humidity = humidity;
    this.forecast.lat = lat;
    this.forecast.lon = lon;
    this.forecast.pressure = pressure;
    this.forecast.temperature = temperature;
    this.forecast.weather = weather;
    this.forecast.wind = wind;
    this.forecast.numOfSearches = this.numberOf;
    this.forecastService.postForecast(this.forecast);
  }
}
