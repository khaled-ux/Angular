import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Parametre } from 'src/app/board-admin/models/parametre.model';
import { Email } from 'src/app/board-admin/models/email';
import { item } from 'src/app/board-admin/models/item ';
const baseUrl = 'http://localhost:5000/api/Parametre';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Parametre': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getAllParametre(): Observable<Parametre[]> {
    return this.http.get<Parametre[]>(this.baseUrl+ '/Parametre');
  }

  getParametreById(ParametreId: number): Observable<Parametre> {
    return this.http.get<Parametre>(this.baseUrl+ '/Parametre/' + ParametreId);
  }
  getParametreByIdUser(ParametreId: string): Observable<Parametre> {
    return this.http.get<Parametre>(this.baseUrl+ '/Parametre/ByIdUser/' + ParametreId);
  }
  createParametre(Parametre: Parametre): Observable<Parametre> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };
    return this.http.post<Parametre>(this.baseUrl+ '/Parametre/save',
    Parametre, httpOptions);
  }


  updateParametre(ParametreId: any,Parametre: Parametre): Observable<Parametre> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };

    return this.http.put<Parametre>(this.baseUrl+ '/Parametre/' + ParametreId,
    Parametre, httpOptions);
  }

  deleteParametreById(ParametreId: any): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };
    return this.http.delete<any>(this.baseUrl + '/Parametre',
      httpOptions);
  }

  delete(ParametreId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${ParametreId}`);
  }



sendEmail(ToEmail:any,Subject:any,Body:any): Observable<Email> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };
  return this.http.post<Email>(this.baseUrl+ '/Mailing/sendmessage',

   httpOptions);
}

CreateComponents(droppedItems :any[] ): Observable<item> {
  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };
  return this.http.post<item>(this.baseUrl+ '/Component/save',
  droppedItems, httpOptions);
}




getAllItem(IdUser:any): Observable<item[]> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Parametre': 'application/json' }) };
  return this.http.get<any[]>(this.baseUrl + '/Component/'+ IdUser,
    httpOptions);
}
}
