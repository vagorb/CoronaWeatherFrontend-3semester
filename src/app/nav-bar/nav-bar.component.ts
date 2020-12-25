import { Component, OnInit } from '@angular/core';
import {LogInComponent} from "../log-in/log-in.component";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
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
    // this.tokenHolder = this.authenticationService.currentUser['source']; //['value']['token']
    // // console.log(JSON.stringify(this.tokenHolder));
    // console.log(this.tokenHolder);
    //
    // if (this.tokenHolder !== null) {
    //   this.tokenHolder = this.authenticationService.currentUser['source']['value'];
    // }
    // // console.log(JSON.stringify(this.tokenHolder));
    // console.log(this.tokenHolder);
    //
    // if (this.tokenHolder !== null) {
    //   this.tokenHolder = this.authenticationService.currentUser['source']['value']['token'];
    // }
    // // console.log(JSON.stringify(this.tokenHolder));
    // console.log(this.tokenHolder);
    //
    // if (this.tokenHolder === undefined) {
    //   this.tokenHolder = null;
    // }
    //
    // if (this.tokenHolder == 'null') {
    //   this.tokenHolder = null;
    // }
    // // console.log(JSON.stringify(this.tokenHolder));
    // console.log(this.tokenHolder);
    // return this.tokenHolder;
  }

  logOut() {
    localStorage.clear();
    this.tokenHolder = null;
  }

  ngOnInit(): void {
    // console.log(this.authenticationService.currentUser);
    // this.tokenHolder = this.authenticationService.currentUser;
    // this.token();
    // console.log(this.tokenHolder);
  }

}
