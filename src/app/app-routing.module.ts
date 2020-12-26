import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {LogInComponent} from "./log-in/log-in.component";
import {UserComponent} from "./user/user.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./auth.guard";
import {UserProfileComponent} from "./user-profile/user-profile.component";
// import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  // create register component and make a path for it
  // add , canActivate: [AuthGuard] to any path to make it available to logged in users only
  {path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  {
    path: 'log_in', component: LogInComponent,
    children: [{path: 'user', component: UserComponent}, {path: 'admin', component: AdminComponent}]
  },
  {path: 'register', component: RegisterComponent},
  // {path: 'profile', component: UserProfileComponent},
  {
    path: 'profile', component: UserProfileComponent,
    children: [{path: 'user', component: UserComponent}, {path: 'admin', component: AdminComponent}]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
