import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coordonne } from 'src/app/board-admin/models/coordonne.model';
const baseUrl = 'http://localhost:5000/api/Coordonne';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CoordonneService {
  Coordonnes:any
  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }

  getAllCoordonne(): Observable<Coordonne[]> {
    return this.http.get<Coordonne[]>(this.baseUrl+ '/Coordonne');
  }

  getCoordonneById(CoordonneId: number): Observable<Coordonne> {
    return this.http.get<Coordonne>(this.baseUrl+ '/Coordonne/' + CoordonneId);
  }

  createCoordonne(coordonne: Coordonne): Observable<Coordonne> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Coordonne>(this.baseUrl+ '/Coordonne/save',
    coordonne, httpOptions);
  }


  updateCoordonne(CoordonneId: any,coordonne: Coordonne): Observable<Coordonne> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put<Coordonne>(this.baseUrl+ '/Coordonne/' + CoordonneId,
    coordonne, httpOptions);
  }

  deleteCoordonneById(CoordonneId: any): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.baseUrl + '/Coordonne',
      httpOptions);
  }

  delete(CoordonneId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${CoordonneId}`);
  }



 
}