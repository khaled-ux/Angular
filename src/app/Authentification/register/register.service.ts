import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:5000/api/Authenticate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(firstname:string, lastname:string,username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/register', {
      firstname,
      lastname,
      username,
      email,
      password
    }, httpOptions);
  }

  sendEmail(username: string, email: string): Observable<any> {
    return this.http.post('http://localhost:5000/api/Mailing/welcome', {
      username,
      email,
    }, httpOptions);
  
  }

  registerAdmin(firstName:string, lastName:string,username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/register-admin', {
      firstName,
      lastName,
      username,
      email,
      password
    }, httpOptions);
  }
 
}
