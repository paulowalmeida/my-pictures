import { Component, Input } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
})
export class PhotoComponent {
  @Input()
  photo: Photo;
}
