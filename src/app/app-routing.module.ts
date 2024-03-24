import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './auth-app/register-user/register-user.component';
import { LoginComponent } from './auth-app/login/login.component';
import { HomeComponent } from './auth-app/home/home.component';
import { ForgotPasswordComponent } from './auth-app/forgot-password/forgot-password.component';
import { ResetpasswordComponent } from './auth-app/resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path:"registeruser",
    component:RegisterUserComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'reset/:token',
    component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
