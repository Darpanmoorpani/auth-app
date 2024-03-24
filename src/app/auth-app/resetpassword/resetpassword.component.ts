import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  constructor(private activatedRoute: ActivatedRoute ,private authService : AuthserviceService){
    this.activatedRoute.params.subscribe((parameters:any)=>{
      let FPtoken = parameters.token;

      this.authService.verifyFPtoken(FPtoken).subscribe((value:any)=>{
        console.log(value)
      })
    })
  }
}
