import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {MessageService} from "./message.service";
import {Forecast} from "./forecast";
@Injectable({
  providedIn: 'root'
})
export class ForecastServiceService {

  private url: string = "http://localhost:8080/api/Forecast";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService ) { }

  // getForecasts(): Observable<Forecast[]> {
  //   return this.http.get<Forecast[]>(this.url).pipe(tap(_ => this.log('fetched forecasts')),
  //     catchError(this.handleError<Forecast[]>('getForecasts', [])));
  // }

  getForecast(cityName: string): Observable<Forecast> {
    const otherUrl = `${this.url}/city/${cityName}`;
    return this.http.get<Forecast>(otherUrl).pipe(tap(_ => this.log(`fetched forecast id=${cityName}`)))
  }

  getTopSearches(): Observable<Forecast> {
    console.log('SENT');
    return this.http.get<Forecast>(this.url).pipe(tap(_ => this.log(`fetched forecast top results`)))
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ForecastserviceService: ${message}`);
  }
}
