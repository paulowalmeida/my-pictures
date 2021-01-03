import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Photo } from 'src/app/shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnChanges {
  @Input()
  photos: Photo[] = [];

  @Input()
  userName: string = '';

  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos.currentValue) {
      this.rows = this.getGroupColumns(changes.photos.currentValue);
    }
  }

  getGroupColumns(photos: Photo[]): any[] {
    const newRows = [];
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i + 3));
    }

    return newRows;
  }
}
