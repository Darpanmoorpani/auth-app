import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private authService:AuthserviceService){

  }
  emailform=new FormGroup({
    Email: new FormControl()
  })

  submit():void{
    console.log(this.emailform.value)
    this.authService.verifyEmail(this.emailform.value).subscribe((value)=>{
      console.log(value)
    })
  }
}
