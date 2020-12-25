import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of, Subscription} from "rxjs";
import {Forecast} from "./forecast";
import {tap} from "rxjs/operators";
import {UserData} from "./user-data";
import {UserDataResponse} from "./user-data-response";
import {UserDataResponseUpdate} from "./userDataResponseUpdate";
// import {UserDataUpdateResponse} from "./userDataUpdateResponse";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  // private url1: string = "/api/users/register";

  // private url: string = "http://localhost:8080/api/Forecast";
  private url: string = "/api/users/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService ) { }


  // getForecast(cityName: string): Observable<Forecast> {
  //   const otherUrl = `${this.url}/city/${cityName}`;
  //   return this.http.get<Forecast>(otherUrl).pipe(tap(_ => this.log(`fetched forecast id=${cityName}`)))
  // }

  registerUser(userData : UserData): Subscription {
    // const otherUrl = `${this.url}register`;
    return this.http.post<Forecast>(this.url + 'register', userData, this.httpOptions).pipe(tap()).subscribe(res => (console.log(res)));
  }

  loginUser(userData: UserDataResponse): Observable<UserDataResponse> {
    return this.http.post<UserDataResponse>(this.url + 'login', userData, this.httpOptions);
  }

  updateUser(userData: UserDataResponseUpdate): Subscription {
    return this.http.post<Forecast>(this.url + 'update', userData, this.httpOptions).pipe(tap()).subscribe(res => (console.log(res)));
  }

  // postForecast(forecast:  Forecast): Subscription {
  //   return this.http.post<Forecast>(this.url, forecast, this.httpOptions).pipe(tap(_ => this.log(`adding new forecast`))).subscribe(res => (console.log(res)))
  // }


}
