import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnChanges {

  @Input()
  photos: Photo[] = [];

  @Input()
  username: string = '';

  @Output()
  onHasMore = new EventEmitter<boolean>();

  @Output()
  onPhotosLength = new EventEmitter<number>();

  rows: Photo[] = [];

  ngOnChanges({ photos }: SimpleChanges) {
    if (photos.currentValue.length > 0) {
      this.rows = this.getGroupColumns();
      this.onPhotosLength.emit(photos.currentValue.length);
    } else {
      this.onHasMore.emit(false);
      this.onPhotosLength.emit(0);
    }
  }

  getGroupColumns(): Photo[] {
    const newRows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i + 3));
    }
    return newRows;
  }
}
