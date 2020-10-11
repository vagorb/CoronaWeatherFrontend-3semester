import { Component, OnInit } from '@angular/core';
import {Forecast} from "../forecast";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {ForecastServiceService} from "../forecast-service.service";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {CoronaService} from "../corona.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: `search-bar.html`,
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {
  // forecast: Forecast;

  show: boolean = false;
  // cityName: string = "";
  // weatherImage: string = "";
  ForecastSubscription = new Subscription();
  coronaSubscription = new Subscription();
  // forecastInfo: string;
  // xhr = new XMLHttpRequest();
  countryName = "";
  city = "";
  weather = "";
  temperature = "";
  // lon = "";
  // lat = "";
// , this.lon = res['lon'], this.lat = res['lat']
  wind = "";
  pressure = "";
  humidity = "";
  suggestion = "";
  totalCases = "";
  recoveredCases = "";
  totalDeaths = "";
  currentCases = "";



  url = "http://localhost:8080/api/Forecast/city";
  coronaUrl = "http://localhost:8080/api/coronaViruses/country/";
  onClick(value) {
    // this.show = true;
    // this.subscription.add(this.hs.getWeatherForecasts(this.url + value).subscribe(res => {console.log("Test if works");
    //   this.forecastInfo = res['data']}));
    // console.log(this.forecastInfo)
    this.show = true;
    this.ForecastSubscription.add(this.hs.getForecast(value).subscribe(res => {console.log("RESPONSE INFO: " + JSON.stringify(res));
    // this.forecastInfo = res['data']}));
    this.countryName = res['countryName'], this.city = res['city'], this.weather = res['weather']
    , this.temperature = res['temperature'], this.wind = res['wind'], this.pressure = res['pressure'], this.humidity = res['humidity']
      , this.suggestion = res['suggestion']}));
    // while (this.countryName == "") {
    // }
    setTimeout(() => {
      this.coronaSubscription.add(this.coronaService.getCorona(this.countryName).subscribe(resp => {console.log(JSON.stringify(resp));
      this.totalCases = resp['totalCases'], this.recoveredCases = resp['recoveredCases'], this.totalDeaths = resp['totalDeaths']
      , this.currentCases = resp['currentCases']}))
    }, 750);


    // COuntryName
    // totalCases
    //recoveredCases
    //totalDeaths
    //currentCases


    // console.log(this.countryName);
    // console.log(this.city);
    // console.log(this.weather);
    // console.log(this.temperature);
    // console.log(this.lon);
    // console.log(this.lat);
    // console.log(this.wind);
    // console.log(this.pressure);
    // console.log(this.humidity);
    // console.log(this.suggestion);
  }
  constructor(
    private route: ActivatedRoute,
    private hs: ForecastServiceService,
    private coronaService: CoronaService
    // private location: Location
  ) { }

  ngOnInit() {
  }
}
