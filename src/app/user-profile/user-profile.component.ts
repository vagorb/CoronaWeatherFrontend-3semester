import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MessageService} from "../message.service";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private userService: UserServiceService,
    private router: Router
  ) {    this.checkoutForm = this.formBuilder.group({
    oldusername: '',
    username: '',
    hometown: ''
  })}



  define() {
    this.userName = JSON.parse(localStorage.getItem('currentUser'))['username'];
    this.hometown = JSON.parse(localStorage.getItem('currentUser'))['hometown'];
  }

  showForm = false;
  checkoutForm;
  userName : '';
  hometown: '';

  onClick() {
    this.showForm = true;
  }


  onSubmit(customerData) {
    // console.log(customerData);
    // // console.log(this.userService.registerUser(customerData));
    // this.userService.registerUser(customerData);
    // this.router.navigate(['log_in']);
    //
    // this.checkoutForm.reset();
    // console.log(this.userService.updateUser(customerData));
    var response = this.userService.updateUser(customerData);

    this.checkoutForm.reset();
    this.showForm = false;
    this.authenticationService.logout();
    localStorage.clear();
    this.router.navigate(['log_in']);
  }





  ngOnInit(): void {
    this.define();
  }

}
