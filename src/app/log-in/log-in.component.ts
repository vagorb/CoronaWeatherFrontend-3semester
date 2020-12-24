import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserServiceService} from "../user-service.service";
import {AuthenticationService} from "../authentication.service";
import {first} from "rxjs/operators";
import {MessageService} from "../message.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  // // constructor() {
  // // }
  // //
  // // ngOnInit(): void {
  // // }
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

  returnUrl: string;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    // TODO add this if we need to now allow logged in users to go into this page
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }


  }

  ngOnInit() {
    // not sure what this is for
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
