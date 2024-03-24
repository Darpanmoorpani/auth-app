import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { RouterLink, RouterModule } from '@angular/router';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],

  exports:[
    RegisterUserComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetpasswordComponent
  ]
})
export class AuthAppModule { }
