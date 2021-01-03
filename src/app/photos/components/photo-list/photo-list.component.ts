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
  photosMore: Photo[] = [];

  @Input()
  userName: string = '';
  
  @Input()
  filter: string = '';

  @Output()
  onListEmpty: EventEmitter<boolean> = new EventEmitter<boolean>();

  rows: any[] = [];

  
  ngOnChanges({photos, photosMore}: SimpleChanges) {
    if(photos && !photosMore){
      this.rows = this.getGroupColumns();
    }
    else if(!photos && photosMore){
      this.photos = [...this.photos, ...this.photosMore];
      this.rows = this.getGroupColumns();
    }

    if(this.photos.length === 0){
      this.onListEmpty.emit(true);
    }
  }

  getGroupColumns(): any[] {
    const newRows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i + 3));
    }

    return newRows;
  }
}
