import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { pathWithParameters } from 'src/app/config/paths';
import { Photo } from '../models/photo/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(
    readonly httpClient: HttpClient) {}

  getUserPhotos(userName: string): Observable<Photo[]> {
    const url = pathWithParameters.galery(userName);
    return this.photosIncludeDescriptionToLowerCase(this.httpClient.get<Photo[]>(url));
  }

  getListFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
    const url = pathWithParameters.galery(userName);
    const params = new HttpParams().append('page', page.toString());
    return this.photosIncludeDescriptionToLowerCase(this.httpClient.get<Photo[]>(url, { params }));
  }

  private photosIncludeDescriptionToLowerCase(photos$: Observable<Photo[]>): Observable<Photo[]> {
    return photos$.pipe(
      map((photos) => {
          return photos.map((photo) => {
            photo.descriptionLowerCase = photo.description.toLocaleLowerCase();
            return photo;
        });
      })
    );
  };
  
}
