import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Theme } from 'src/app/board-admin/models/theme';
const baseUrl = 'http://localhost:5000/api/Theme';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Theme': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getAllTheme(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.baseUrl+ '/Theme');
  }

  getThemeById(ThemeId: number): Observable<Theme> {
    return this.http.get<Theme>(this.baseUrl+ '/Theme/' + ThemeId);
  }

  createTheme(Theme: Theme): Observable<Theme> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Theme': 'application/json' }) };
    return this.http.post<Theme>(this.baseUrl+ '/Theme/save',
    Theme, httpOptions);
  }


  updateTheme(ThemeId: any,Theme: Theme): Observable<Theme> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Theme': 'application/json' }) };

    return this.http.put<Theme>(this.baseUrl+ '/Theme/' + ThemeId,
    Theme, httpOptions);
  }

  deleteThemeById(ThemeId: any): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Theme': 'application/json' }) };
    return this.http.delete<any>(this.baseUrl + '/Theme',
      httpOptions);
  }

  delete(ThemeId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${ThemeId}`);
  }
}
