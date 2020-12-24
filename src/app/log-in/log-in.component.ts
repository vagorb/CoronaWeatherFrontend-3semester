import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserServiceService} from "../user-service.service";
import {AuthenticationService} from "../authentication.service";
import {first} from "rxjs/operators";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  //
  // show = true;
  // log = false;
  //
  //
  // constructor() {
  // }
  //
  // ngOnInit(): void {
  // }
  //
  // onClick() {
  //   this.show = false;
  //   this.log = true
  // }
  //
  // logOut() {
  //   this.log = false;
  //   this.show = true;
  // }

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });


  }

  ngOnInit() {
    // this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.log(customerData);
    // console.log(this.userService.registerUser(customerData));
    // this.userService.loginUser(customerData);
    this.authenticationService.login(customerData).pipe(first())
      .subscribe((user) => {
        console.log(user);
        this.messageService.add('login suc');
      },
        error => {
        this.messageService.add('login unsuc');
        console.log(error);
        });

    this.checkoutForm.reset();
  }
}
