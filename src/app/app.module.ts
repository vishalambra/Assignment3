import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { AuthPublicGuard } from './services/auth-public.guard';
import { AuthPrivateGuard } from './services/auth-private.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthPublicGuard,AuthPrivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
