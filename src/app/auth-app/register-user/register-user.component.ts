import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm!:FormGroup

  ngOnInit(): void {
    this.createForm()
  }

  constructor(private authservice:AuthserviceService, private router:Router){

  }

  createForm():void{
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl()
    })
  }
  submit():void{
    // console.log(this.registerForm.value)
    this.authservice.register(this.registerForm.value).subscribe((value)=>{
      console.log('register')
      this.router.navigate(['/login'])

    })

  }
  
}
