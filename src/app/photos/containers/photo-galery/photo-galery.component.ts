import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { Photo } from '../../../shared/models/photo/photo.model';
import { PhotoGaleryService } from './photo-galery.service';

@Component({
  selector: 'app-photo-galery',
  templateUrl: './photo-galery.component.html',
})
export class PhotoGaleryComponent implements OnInit {
  photos$: Observable<Photo[]>;
  rows: number;
  filter: string = '';
  
  constructor(
    readonly photoService: PhotoGaleryService,
    readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { userName } = this.activatedRoute.snapshot.params;
    this.photos$ = this.photoService.getUserPhotos(userName);
  }
}
