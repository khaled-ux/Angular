import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:5000/api/Parametre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor(private http: HttpClient) { }


  save(Nom :string,Email :string,Adresse:string,Telephone:string,
    Theme:string,IdUser:string,description:string, dateOuverture:string, lienFacebook:string,
    lienLinkedin:string, lienInstagram:string): Observable<any>{
    return this.http.post(AUTH_API + '/save', {
      Nom,
      Email,
      Adresse,
      Telephone,
      Theme,
      IdUser,
      description,
      dateOuverture,
      lienFacebook,
      lienLinkedin,
      lienInstagram,
  
    }, httpOptions);
}
saveType(type :string): Observable<any>{
  return this.http.post(AUTH_API + '/Type/save', {
    type
  }, httpOptions);
}
saveTheme(theme:string): Observable<any>{
  return this.http.post(AUTH_API + '/Theme/save', {
    theme
  }, httpOptions);
}
savePages(page:string[]): Observable<any>{
  return this.http.post(AUTH_API + '/Page/save', {
    page
  }, httpOptions);
}
}
