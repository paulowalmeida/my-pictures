import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { includeToLowerCaseIn } from 'src/app/shared/helpers/photos.helpers';

import { PhotoService } from 'src/app/shared/services/photo.service';
import { Photo } from '../../../shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-galery',
  templateUrl: './photo-galery.component.html',
})
export class PhotoGaleryComponent implements OnInit {
  photos$: Observable<Photo[]>;
  photosMore: Photo[] = [];
  rows: number;
  filter: string = '';
  userName: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;

  constructor(
    readonly photoService: PhotoService,
    readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { userName } = this.activatedRoute.snapshot.params;
    this.userName = userName;
    this.photos$ = this.photoService.getUserPhotos(userName)
      .pipe( 
        map(photos => {
          return includeToLowerCaseIn(photos) 
        })
      )
  }

  load() {
    this.photoService
      .getListFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        if (photos.length === 0) this.hasMore = false;
        else this.photosMore = includeToLowerCaseIn(photos);
      });
  }
}
