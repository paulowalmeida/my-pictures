import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from './photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(userName: string): Observable<any[]> {
    const url = `${environment.URL_API}/${userName}/photos`;
    return this.httpClient.get<Photo[]>(url);
  }
}
