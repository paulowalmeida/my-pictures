import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD:src/app/photos/containers/photo-list/photo.service.ts
import { Photo } from '../../../shared/models/photo/photo.model';
=======
import { Photo } from './photo.model';
>>>>>>> 5ea2a94286ef45dba271bc75d4d48988589d5d8c:src/app/photos/photo/photo.service.ts

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(userName: string): Observable<any[]> {
    const url = `${environment.URL_API}/${userName}/photos`;
    return this.httpClient.get<Photo[]>(url);
  }
}
