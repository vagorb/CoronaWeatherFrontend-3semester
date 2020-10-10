import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ForecastServiceService {

  url: string = "http://localhost:8080/api/Forecast/city/{city}";

  constructor(private http: HttpClient) { }

  public getWeatherForecast(url): Observable<any> {
    console.log("Check to see if the method works");
    return this.http.get(url);
  }
}
