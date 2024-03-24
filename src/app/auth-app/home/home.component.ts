import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  students!:string
  constructor(private authservice:AuthserviceService){

  }
  ngOnInit(): void {
    this.authservice.students().subscribe((students)=>{
      this.students=students
      
    })
  }
}
