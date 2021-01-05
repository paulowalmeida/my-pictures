import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Photo } from '../models/photo/photo.model';
import { PhotoService } from '../services/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolverService implements Resolve<Observable<Photo[]>> {
  
    constructor(readonly photoService: PhotoService) {}

  resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const { userName } = activatedRoute.params;
    return this.photoService.getUserPhotos(userName);
  }
}
