import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservice:AuthserviceService,private router: Router,private cookieService:CookieService){
  }

  createForm=new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })
  

  login():void{
    this.authservice.loginUser(this.createForm.value as { username: string; password: string }).subscribe((val)=>{
      console.log("createform",this.createForm.value)
      console.log("done")
      this.router.navigate(['/view']);
      console.log("value:",val)
      if(val){
        this.cookieService.set("userId",val.id)
        console.log("userId",val.id)
        this.cookieService.set("username",val.username)
        console.log("username",val.username)
        this.cookieService.set("password",val.password)
        console.log("password",val.password)
      }
    })
  }
}

