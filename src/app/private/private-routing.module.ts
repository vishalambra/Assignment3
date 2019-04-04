import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AuthPrivateGuard } from '../services/auth-private.guard';

const routes: Routes = [
  
  { 
  path:'navbar',
  component: NavbarComponent,
  canActivate:[AuthPrivateGuard],
  children:[
    { path:'profile',component:ProfileComponent },
    { path:'faq',component:FaqComponent },
    { path:'bookings',component:BookingsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
