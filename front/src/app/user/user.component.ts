import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showForm = true;
  }

  onFinish(city: string, country: string, humidity: string, lat: string, lon: string, pressure: string, temperature: string
  , weather: string, wind: string) {
    this.showForm = false;
  }
}
