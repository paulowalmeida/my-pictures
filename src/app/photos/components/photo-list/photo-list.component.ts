import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';

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
  
  @Input()
  filter: string = '';

  rows: any[] = [];

  
  ngOnChanges({photos}: SimpleChanges) {
    if(photos) this.rows = this.getGroupColumns();
  }

  getGroupColumns(): any[] {
    const newRows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i + 3));
    }
    return newRows;
  }
}
