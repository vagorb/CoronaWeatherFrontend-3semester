import { Component, OnInit } from '@angular/core';
import {ForecastServiceService} from "../forecast-service.service";
import {Forecast} from "../forecast";
import {Router} from "@angular/router";
import {LogInComponent} from "../log-in/log-in.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  subscribe = new Subscription();
  log = true;
  showForm = false;
  showDelete = false;
  // forecastService = ForecastServiceService;
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

  onFinish(city: string, country: string,  lat: string, lon: string) {
    this.showForm = false;
    this.forecast.city = city;
    this.forecast.countryName = country;
    this.forecast.lat = lat;
    this.forecast.lon = lon;
    this.forecast.numOfSearches = this.numberOf;
    this.forecastService.postForecast(this.forecast);
  }

  delete() {
    this.showDelete = true;
  }

  onDelete(id: string) {
    this.showDelete = false;
    const numberId: number  = parseInt(id);
    this.forecastService.deleteForecast(numberId).subscribe(res => {console.log(JSON.stringify(res));
    });
  }
}
// this.dailySubscription.add(this.dailyForecast.getDailyForecast(this.lat, this.lon).subscribe(
//   res => {console.log("Response info " +JSON.stringify(res));
//     this.zero = res[0], this.first = res[1], this.second = res[2], this.third = res[3], this.fourth = res[4], this.fifth = res[5],
//       this.sixth = res[6], this.seventh = res[7], this.objectCleaning()}));
// }
