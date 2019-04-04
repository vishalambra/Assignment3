import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { AuthPublicGuard } from '../services/auth-public.guard';

const routes: Routes = [
  { path:'',redirectTo:'/register',pathMatch:'full' },
  { path:'register',
    component: RegisterComponent,
    canActivate:[AuthPublicGuard] },
  { 
    path:'login', 
    component: LoginComponent,
    canActivate:[AuthPublicGuard]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
