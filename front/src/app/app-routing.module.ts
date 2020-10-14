import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {LogInComponent} from "./log-in/log-in.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  // {path: '', redirectTo: 'about-component', pathMatch: 'full'},
  // {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'log in', component: LogInComponent,
    children: [{path: 'user', component: UserComponent}, {path: 'admin', component: AdminComponent}]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'home', redirectTo: 'about', pathMatch: 'full'}
  // {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
