import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {UserData} from "./user-data";
import {UserDataResponse} from "./user-data-response";
import {UserServiceService} from "./user-service.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UserDataResponse>;
  public currentUser: Observable<UserDataResponse>;

  constructor(private userService: UserServiceService) {
    this.currentUserSubject = new BehaviorSubject<UserDataResponse>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserDataResponse {
    return this.currentUserSubject ? this.currentUserSubject.value : undefined;
  }

  login(userPassword): Observable<UserDataResponse> {

    return this.userService.loginUser(userPassword)
      .pipe(map((user: UserDataResponse) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


  // constructor() { }
}
