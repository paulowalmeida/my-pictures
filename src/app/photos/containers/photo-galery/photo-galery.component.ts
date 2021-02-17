import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/shared/models/photo/photo.model';
import { PhotoService } from 'src/app/shared/services/photo/photo.service';

@Component({
  selector: 'app-photo-galery',
  templateUrl: './photo-galery.component.html',
  styleUrls: ['./photo-galery.component.scss']
})
export class PhotoGaleryComponent implements OnInit {

  photos: Photo[];
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

  load() {
    this.photoService
      .getListFromUserPaginated(this.username, ++this.currentPage)
      .subscribe(photos => {
        console.log(photos);
        this.filter = '';
        if (photos.length === 0) this.hasMore = false;
        else this.photos = [...this.photos, ...photos];
      });
  }
}
