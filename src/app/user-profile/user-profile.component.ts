import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../message.service";
import {UserServiceService} from "../user-service.service";
import {Forecast} from "../forecast";
import {ForecastServiceService} from "../forecast-service.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //
  // show = true;
  // log = false;
  // onClick() {
  //   this.show = false;
  //   this.log = true
  // }
  // logOut() {
  //   this.log = false;
  //   this.show = true;
  // }



  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private userService: UserServiceService,
    private forecastService: ForecastServiceService,
    private router: Router
  ) {    this.checkoutForm = this.formBuilder.group({
    oldusername: '',
    username: '',
    hometown: ''
  })}



  define() {
    this.userName = JSON.parse(localStorage.getItem('currentUser'))['username'];
    this.hometown = JSON.parse(localStorage.getItem('currentUser'))['hometown'];
    this.role = JSON.parse(localStorage.getItem('currentUser'))['role'];
  }

  showForm = false;
  checkoutForm;
  userName : '';
  hometown: '';
  role: '';

  onClick2() {
    this.showForm = true;
  }


  onSubmit(customerData) {
    // console.log(customerData);
    // // console.log(this.userService.registerUser(customerData));
    // this.userService.registerUser(customerData);
    // this.router.navigate(['log_in']);
    //
    // this.checkoutForm.reset();
    // console.log(this.userService.updateUser(customerData));
    var response = this.userService.updateUser(customerData);

    this.checkoutForm.reset();
    this.showForm = false;
    this.authenticationService.logout();
    localStorage.clear();
    this.router.navigate(['log_in']);
  }





  ngOnInit(): void {
    this.define();
  }

  // USER PART
  show = false;
  log = false;

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

  logOutUser() {
    this.log = false;
    this.router.navigate(['/profile']);
    // this.logIn.show = true;
    //asdasdasdasdasdasdas
  }


  // ngOnInit(): void {
  // }

  onClickUser() {
    this.show = true;
  }

  onFinish(city: string, country: string, lat: string, lon: string) {
    this.show = false;
    this.forecast.city = city;
    this.forecast.countryName = country;
    this.forecast.lat = lat;
    this.forecast.lon = lon;
    this.forecast.numOfSearches = this.numberOf;
    this.forecastService.postForecast(this.forecast);
  }

  // ADMIN PART

  showDelete = false;

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
