import {Component} from '@angular/core';
import {ForecastServiceService} from "./forecast-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoronaWeather';

  constructor(hs : ForecastServiceService) {
  }


}
