import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private httpClient: HttpClient) {}

  getPhotos(userName: string): Observable<any[]> {
    const url = `${environment.URL_API}/${userName}/photos`;
    return this.httpClient.get<any[]>(url);
  }
}
