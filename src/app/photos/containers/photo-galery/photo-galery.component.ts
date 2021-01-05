import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoService } from 'src/app/shared/services/photo.service';
import { Photo } from '../../../shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-galery',
  templateUrl: './photo-galery.component.html',
})
export class PhotoGaleryComponent implements OnInit {
  photos: Photo[];
  filter: string = '';
  userName: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;

  constructor(
    readonly activatedRoute: ActivatedRoute,
    readonly photoService: PhotoService
  ) {}

  ngOnInit() {
    const { data: { photos }, params: { userName } } = this.activatedRoute.snapshot;
    this.photos = photos;
    this.userName = userName;
  }

  load() {
    this.photoService
      .getListFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe((photos) => {
        this.filter = '';
        if (photos.length === 0) this.hasMore = false;
        else this.photos = [...this.photos,...photos];
      });
  }
}
