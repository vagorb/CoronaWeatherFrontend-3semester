import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `<div class="appSearch">
    <input #myInput type="text" class="inputClass">
    <button (click)="onClick(myInput.value)">
      <div class="magnifyingGlass">
      <img src="/assets/images/magnifyingGlass.png" alt="magnifying glass image" class="magnifyingGlassImage">
    </div>
    </button>
  </div>`,
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent implements OnInit {

  onClick(value) {
    console.log(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
