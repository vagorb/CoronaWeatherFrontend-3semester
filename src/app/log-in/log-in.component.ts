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

    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }


  }

  ngOnInit() {

  }

  onSubmit(customerData) {

    // console.log(this.userService.registerUser(customerData));
    // this.userService.loginUser(customerData);
    this.authenticationService.login(customerData).pipe(first())
      .subscribe((user) => {
       // console.log(user);
        this.messageService.add('login suc');
        this.router.navigate(['home']);
      },
        error => {
        this.messageService.add('login unsuc');
        console.log(error);
        });

    this.checkoutForm.reset();
  }
}
