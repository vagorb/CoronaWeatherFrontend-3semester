import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: `search-bar.html`,
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {
  show: boolean = false;
  cityName: string = "";
  weatherImage: string = "";

  onClick(value) {
    this.show = true;
    console.log(value);
    this.cityName = value;
    this.weatherImage = "sunny";
  }
  constructor() { }

  ngOnInit() {
  }

}
