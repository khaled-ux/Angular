import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
const baseUrl = 'http://localhost:5000/api/Image';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Page': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  readonly baseUrl  = 'http://localhost:5000/api';
  constructor(private http: HttpClient) { }
  getImageById(ImageId: number): Observable<Image> {
    return this.http.get<Image>(this.baseUrl+ '/Image/' + ImageId);
  }

}
