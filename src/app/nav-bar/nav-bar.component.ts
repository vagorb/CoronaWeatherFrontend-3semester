import { Component, OnInit } from '@angular/core';
import {LogInComponent} from "../log-in/log-in.component";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  private tokenHolder;
  //
  //
  token() {

    this.tokenHolder = localStorage.getItem('currentUser');
    // console.log(this.tokenHolder);
    if (this.tokenHolder === null || this.tokenHolder === "null") {
      return null;
    } else {
      return this.tokenHolder;
    }

  }

  logOut() {
    localStorage.clear();
    this.tokenHolder = null;
    this.router.navigate(['home']).then(() => location.reload());
  }

  ngOnInit(): void {
    // console.log(this.authenticationService.currentUser);
    // this.tokenHolder = this.authenticationService.currentUser;
    // this.token();
    // console.log(this.tokenHolder);
  }

}
