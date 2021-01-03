import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Pictures';
  photos$: Observable<Photo[]>;

  constructor(private photoService: PhotoService) {
    this.photos$ = this.photoService.getPhotos('flavio');
  }
}
