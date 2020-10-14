import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, Subscription, throwError} from 'rxjs';
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

  postForecast(forecast:  Forecast): Subscription {
    return this.http.post<Forecast>(this.url, forecast, this.httpOptions).pipe(tap(_ => this.log(`adding new forecast`))).subscribe(res => (console.log(res)))
  }

  // /** POST: add a new hero to the server */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

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
