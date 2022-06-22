import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:5000/api/User';
;
const baseUrl = 'http://localhost:5000/api/User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getAll(){
   return this.http.get(this.baseUrl + '/User',{headers: new HttpHeaders({'Authorization':'Bearer '+sessionStorage.getItem('token')})});
  }

  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(this.baseUrl+ '/User/'+ userId);
  }

  createUser(user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<User>(this.baseUrl+ '/User/save',
    user, httpOptions);
  }


  updateUser(UserId: any,user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put<User>(this.baseUrl+ '/User/UserId',
    user, httpOptions);
  }

  deleteUserById(UserId: string): Observable<string> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<string>(this.baseUrl + '/User',
      httpOptions);
  }

  delete(UserId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${UserId}`);
  }
  update(id:any,firstname:string, lastname:string, email: string): Observable<any> {
    return this.http.put(AUTH_API + '/'+id, {
      id,
      firstname,
      lastname,
      email,
     
    }, httpOptions);
  }
}
