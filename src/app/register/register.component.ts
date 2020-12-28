import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";
import {Forecast} from "../forecast";
import {tap} from "rxjs/operators";
import {UserServiceService} from "../user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: '',
      hometown: ''
    });


  }

  ngOnInit() {
    // this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    //console.log(customerData);
    // console.log(this.userService.registerUser(customerData));
    this.userService.registerUser(customerData);
    this.router.navigate(['log_in']);

    this.checkoutForm.reset();
  }
}
