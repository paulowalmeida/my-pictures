import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../../../shared/models/photo/photo.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(
    readonly photoService: PhotoService,
    readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { userName } = this.activatedRoute.snapshot.params;
    this.photos$ = this.photoService.getUserPhotos(userName);
  }
}
