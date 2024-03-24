import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  register(body:any):Observable<any>{
    return this.http.post(APP_CONSTANTS.BACKEND_URL+'registeruser',body);
  }

  
 loginUser(credentials: { username: string, password: string }): Observable<any> {
  return this.http.post(APP_CONSTANTS.BACKEND_URL+'login', credentials);
 }
 
 students():Observable<any>{
  return this.http.get("http://localhost:8080/api/students")
}

verifyFPtoken(FPtoken:String):Observable<any>{
  return this.http.post("http://localhost:8080/api/verifyFPtoken",{FPtoken})
}

verifyEmail(email:any):Observable<any>{
  return this.http.post("http://localhost:8080/api/email",email)
}

}

