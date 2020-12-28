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
  // log = true;
  // showForm = false;
  constructor(private forecastService: ForecastServiceService,
              private router: Router,
              private logIn: LogInComponent) { }

  ngOnInit(): void {
  }

}
