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

  url: string = "http://localhost:8080/api/Forecast";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService ) { }

  // public getWeatherForecast(url): Observable<any> {
  //   console.log("Check to see if the method works");
  //   return this.http.get(url);
  //   return this.http.get(<Forecast[]>(this.url)).pipe(tap(_ => this.log('fetched forecasts')),
  //     catchError(this.handleError<Hero[]>('getForecasts', [])));
  // }

  public getWeatherForecasts(url): Observable<Forecast[]> {
    return this.http.get<Forecast[]>(this.url).pipe(tap(_ => this.log('fetched forecasts')),
      catchError(this.handleError<Forecast[]>('getForecasts', [])));
  }

  // public getWeatherForecast(id: number): Observable<Forecast> {
  //   const csUrl = `${this.url}/${id}`;
  //   return this.http.get<Forecast>(csUrl).pipe(tap)
  // }





  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }
  //
  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       this.log(`found heroes matching "${term}"`) :
  //       this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }
  //
  // //////// Save methods //////////
  //
  // /** POST: add a new hero to the server */
  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
  //
  // /** DELETE: delete the hero from the server */
  // deleteHero(hero: Hero | number): Observable<Hero> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.heroesUrl}/${id}`;
  //
  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }
  //
  // /** PUT: update the hero on the server */
  // updateHero(hero: Hero): Observable<any> {
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http.put(url, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
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
    this.messageService.add(`ForecastService: ${message}`);
  }
}
