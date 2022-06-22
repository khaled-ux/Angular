import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/board-admin/models/page';
const baseUrl = 'http://localhost:5000/api/Page';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Page': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PageService {

  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getAllPage(): Observable<Page[]> {
    return this.http.get<Page[]>(this.baseUrl+ '/Page');
  }

  getPageById(PageId: number): Observable<Page> {
    return this.http.get<Page>(this.baseUrl+ '/Page/' + PageId);
  }

  createPage(page: Page): Observable<Page> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Page': 'application/json' }) };
    return this.http.post<Page>(this.baseUrl+ '/Page/save',
    page, httpOptions);
  }


  updatePage(PageId: any,Page: Page): Observable<Page> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Page': 'application/json' }) };

    return this.http.put<Page>(this.baseUrl+ '/Page/' + PageId,
    Page, httpOptions);
  }

  deletePageById(PageId: any): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Page': 'application/json' }) };
    return this.http.delete<any>(this.baseUrl + '/Page',
      httpOptions);
  }

  delete(PageId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${PageId}`);
  }

}
