import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable, of} from "rxjs";
import {Forecast} from "./forecast";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {



  // private url: string = "http://localhost:8080/api/Forecast/lat";
  private url: string = "/api/Forecast/lat";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService ) { }

  getDailyForecast(lat: string, lon: string): Observable<Forecast> {
    const otherUrl = `${this.url}/${lat}/lon/${lon}`;
    return this.http.get<Forecast>(otherUrl).pipe(tap(_ => this.log(`fetched corona country=${lat}/${lon}`)))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }


  private log(message: string) {
    this.messageService.add(`dailyForecastService: ${message}`);
  }
}
