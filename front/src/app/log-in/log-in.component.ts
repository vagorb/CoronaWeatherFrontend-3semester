import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  show = true;
  log = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.show = false;
    this.log = true
  }

  logOut() {
    this.log = false;
    this.show = true;
  }
}
