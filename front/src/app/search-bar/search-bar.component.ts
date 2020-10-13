import { Component, OnInit } from '@angular/core';
import {Forecast} from "../forecast";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {ForecastServiceService} from "../forecast-service.service";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
// import {CoronaService} from "../corona.service";
import {DailyForecastService} from "../daily-forecast.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: `search-bar.html`,
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {

  show: boolean = false;
  forecastSubscription = new Subscription();
  dailySubscription = new Subscription();
  countryName = "";
  city = "";
  weather = "";
  temperature = "";
  lon = "";
  lat = "";
  wind = "";
  pressure = "";
  humidity = "";
  suggestion = "";
  totalCases = "";
  recoveredCases = "";
  totalDeaths = "";
  currentCases = "";
  coronaContainer = Object;
  showToday = true;
  showWeek = false;


  url = "http://localhost:8080/api/Forecast/city";
  onClick(value) {
    this.show = true;
    this.forecastSubscription.add(this.hs.getForecast(value).subscribe(res => {console.log("RESPONSE INFO: " + JSON.stringify(res));
    this.countryName = res['countryName'], this.city = res['city'], this.weather = res['weather']
    , this.temperature = res['temperature'], this.wind = res['wind'], this.pressure = res['pressure'], this.humidity = res['humidity']
      , this.suggestion = res['suggestion'], this.coronaContainer = res['coronaVirus'], this.lat = res['lat'], this.lon = res['lon']
      , this.totalCases = this.coronaContainer['totalCases'], this.recoveredCases = this.coronaContainer['recoveredCases']
    , this.totalDeaths = this.coronaContainer['totalDeaths'], this.currentCases = this.coronaContainer['currentCases']
    , this.sevenDayForecast(this.lat, this.lon)}));
  }

  zero = Object;
  first = Object;
  second = Object;
  third = Object;
  fourth = Object;
  fifth = Object;
  sixth = Object;
  seventh = Object;
  sevenDayForecast(lat: string, lon: string) {
      this.dailySubscription.add(this.dailyForecast.getDailyForecast(this.lat, this.lon).subscribe(
        res => {console.log("Response info " +JSON.stringify(res));
      this.zero = res[0], this.first = res[1], this.second = res[2], this.third = res[3], this.fourth = res[4], this.fifth = res[5],
      this.sixth = res[6], this.seventh = res[7], this.objectCleaning()}));
  }

  showWeeklyForecast() {
    this.showToday = false;
    this.showWeek = true;
  }

  showNowForecast() {
    this.showWeek = false;
    this.showToday = true;
  }


  objectCleaning() {
    this.zero['weather'] = this.zero['weather'].replace("\"", "");
    this.first['weather'] = this.first['weather'].replace("\"", "");
    this.second['weather'] = this.second['weather'].replace("\"", "");
    this.third['weather'] = this.third['weather'].replace("\"", "");
    this.fourth['weather'] = this.fourth['weather'].replace("\"", "");
    this.fifth['weather'] = this.fifth['weather'].replace("\"", "");
    this.sixth['weather'] = this.sixth['weather'].replace("\"", "");
    this.seventh['weather'] = this.seventh['weather'].replace("\"", "");
    this.zero['weather'] = this.zero['weather'].replace("\"", "");
    this.first['weather'] = this.first['weather'].replace("\"", "");
    this.second['weather'] = this.second['weather'].replace("\"", "");
    this.third['weather'] = this.third['weather'].replace("\"", "");
    this.fourth['weather'] = this.fourth['weather'].replace("\"", "");
    this.fifth['weather'] = this.fifth['weather'].replace("\"", "");
    this.sixth['weather'] = this.sixth['weather'].replace("\"", "");
    this.seventh['weather'] = this.seventh['weather'].replace("\"", "");
  }
  constructor(
    private route: ActivatedRoute,
    private hs: ForecastServiceService,
    private dailyForecast: DailyForecastService
  ) { }



  ngOnInit() {
    this.hs.getTopSearches()
  }
}
