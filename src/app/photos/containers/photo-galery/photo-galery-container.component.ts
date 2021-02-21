import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Photo } from 'src/app/shared/models/photo/photo.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';

@Component({
  selector: 'app-photo-galery-container',
  templateUrl: './photo-galery-container.component.html',
  styleUrls: ['./photo-galery-container.component.scss']
})
export class PhotoGaleryContainerComponent implements OnInit {

  photos: Photo[] = [];
  photosLength = 0;
  filter: string = '';
  username: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;

  constructor(
    readonly activatedRoute: ActivatedRoute,
    readonly photoService: PhotoService
  ) { }

  ngOnInit() {
    const { data: { photos }, params: { username } } = this.activatedRoute.snapshot;
    this.photos = photos;
    this.username = username;
  }

  loadMore() {
    this.photoService
      .getListFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        if (photos.length === 0) {
          this.hasMore = false;
        } else {
          this.hasMore = true;
          this.photos = [...this.photos, ...photos];
        }
      });
  }

  hasFilter() {
    return this.filter !== ''
  }

  onFilter($event) {
    this.filter = $event;
  }

  onResetPhotos() {
    this.photos = [];
    this.currentPage = 0;
    this.hasMore = true;
    this.loadMore();
  }
}
