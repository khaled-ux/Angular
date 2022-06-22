import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Type } from 'src/app/board-admin/models/type';
const baseUrl = 'http://localhost:5000/api/Type';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TypeService {
  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getAllType(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseUrl+ '/Type');
  }

  getTypeById(TypeId: number): Observable<Type> {
    return this.http.get<Type>(this.baseUrl+ '/Type/' + TypeId);
  }

  createType(Type: Type): Observable<Type> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Type>(this.baseUrl+ '/Type/save',
    Type, httpOptions);
  }


  updateType(TypeId: any,Type: Type): Observable<Type> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.put<Type>(this.baseUrl+ '/Type/' + TypeId,
    Type, httpOptions);
  }

  deleteTypeById(TypeId: any): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.baseUrl + '/Type',
      httpOptions);
  }

  delete(TypeId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${TypeId}`);
  }

}
