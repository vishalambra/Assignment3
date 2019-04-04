import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PrivateModule } from '../private/private.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrivateModule
  ]
})
export class PublicModule { }
