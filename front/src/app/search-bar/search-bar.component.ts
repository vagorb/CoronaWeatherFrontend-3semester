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
  topFiveSubscription = new Subscription();
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

  onClick(value) {
    this.show = true;
    this.forecastSubscription.add(this.hs.getForecast(value).subscribe(res => {console.log("RESPONSE INFO: " + JSON.stringify(res));
    this.updateMostSearched(), this.countryName = res['countryName'], this.city = res['city'], this.weather = res['weather']
      , this.temperature = res['temperature'], this.wind = res['wind'], this.pressure = res['pressure'], this.humidity = res['humidity']
      , this.suggestion = res['suggestion'], this.coronaContainer = res['coronaVirus'], this.lat = res['lat'], this.lon = res['lon']
      , this.sevenDayForecast(this.lat, this.lon)
      , this.totalCases = this.coronaContainer['totalCases'], this.recoveredCases = this.coronaContainer['recoveredCases']
      , this.totalDeaths = this.coronaContainer['totalDeaths'], this.currentCases = this.coronaContainer['currentCases']}));
    console.log(this.topOne);
    console.log(this.topTwo);
    console.log(this.topThree);
    console.log(this.topFour);
    console.log(this.topFive);
  }
  topOne: string = '';
  topTwo: string = '';
  topThree: string = '';
  topFour: string = '';
  topFive: string = '';
  updateMostSearched() {
    this.topFiveSubscription.add(this.hs.getTopSearches().
    subscribe(res => {
      console.log("RESPONSE INFO: " + JSON.stringify(res));
    this.topOne = res[0], this.topTwo = res[1], this.topThree = res[2], this.topFour = res[3], this.topFive = res[4]}));
  };

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
    this.updateMostSearched()
  }
}
