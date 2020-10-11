import { Component, OnInit } from '@angular/core';
import {Forecast} from "../forecast";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {ForecastServiceService} from "../forecast-service.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: `search-bar.html`,
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {
  // forecast: Forecast;

  show: boolean = false;
  cityName: string = "";
  weatherImage: string = "";
  subscription = new Subscription();
  forecastInfo: any = [{}];
  // xhr = new XMLHttpRequest();



  url = "http://localhost:8080/api/Forecast/city";
  onClick(value) {
    // this.show = true;
    // this.subscription.add(this.hs.getWeatherForecasts(this.url + value).subscribe(res => {console.log("Test if works");
    //   this.forecastInfo = res['data']}));
    // console.log(this.forecastInfo)
    this.show = true;
    this.subscription.add(this.hs.getForecast(value).subscribe(res => {console.log("HOPE");
    this.forecastInfo = res['data']}));
    // this.forecastInfo = res['data'];
    console.log(this.forecastInfo)
  }
  constructor(
    private route: ActivatedRoute,
    private hs: ForecastServiceService
    // private location: Location
  ) { }

  ngOnInit() {
  }
}
