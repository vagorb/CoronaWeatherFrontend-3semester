// import { Injectable } from '@angular/core';
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {MessageService} from "./message.service";
// import {Observable, of} from "rxjs";
// import {Forecast} from "./forecast";
// import {catchError, tap} from "rxjs/operators";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CoronaService {
//
//
//   private url: string = "http://localhost:8080/api/coronaViruses/country/";
//
//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };
//
//   constructor(private http: HttpClient, private messageService: MessageService ) { }
//
//
//   // getForecasts(): Observable<Forecast[]> {
//   //   return this.http.get<Forecast[]>(this.url).pipe(tap(_ => this.log('fetched forecasts')),
//   //     catchError(this.handleError<Forecast[]>('getForecasts', [])));
//   // }
//
//   getCorona(country: string): Observable<Forecast> {
//     const otherUrl = `${this.url}/${country}`;
//     return this.http.get<Forecast>(otherUrl).pipe(tap(_ => this.log(`fetched corona country=${country}`)))
//   }
//
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//
//       this.log(`${operation} failed: ${error.message}`);
//
//       return of(result as T);
//     }
//   }
//
//
//   private log(message: string) {
//     this.messageService.add(`CoronaService: ${message}`);
//   }
// }
//
//
