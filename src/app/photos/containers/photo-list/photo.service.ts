import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../../../shared/models/photo/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(
    readonly httpClient: HttpClient) {}

  getUserPhotos(userName: string): Observable<any[]> {
    const url = `${environment.URL_API}/${userName}/photos`;
    return this.httpClient.get<Photo[]>(url);
  }
}
