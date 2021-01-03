import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../../shared/models/photo/photo.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photos$ = this.photoService.getPhotos('flavio');
  }
}
