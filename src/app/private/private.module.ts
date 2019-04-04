import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FaqComponent } from './faq/faq.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent, BookingsComponent, FaqComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class PrivateModule { }
