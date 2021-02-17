import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Photo } from "../../models/photo/photo.model";

@Injectable({ providedIn: 'root'})
export class PhotoServiceMock {
  getUserPhotos(userName: string): Observable<Photo[]> {
    
    return of(null);
  }

  getListFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
    return of(null);
  }
}
