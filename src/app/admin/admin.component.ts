import { Component, OnInit } from '@angular/core';
import {ForecastServiceService} from "../forecast-service.service";
import {Forecast} from "../forecast";
import {Router} from "@angular/router";
import {LogInComponent} from "../log-in/log-in.component";
import {Subscription} from "rxjs";
import {UserProfileComponent} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private forecastService: ForecastServiceService,
              private router: Router,
              private logIn: LogInComponent,
              private profile: UserProfileComponent) { }



  ngOnInit(): void {
  }


}
