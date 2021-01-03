import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PathWithParameters } from 'src/app/config/paths';
import { Photo } from '../../../shared/models/photo/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoGaleryService {
  constructor(
    readonly httpClient: HttpClient) {}

  getUserPhotos(userName: string): Observable<Photo[]> {
    const url = PathWithParameters.galery(userName);
    return this.httpClient.get<Photo[]>(url);
  }
}
