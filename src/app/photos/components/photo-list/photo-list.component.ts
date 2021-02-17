import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  @Input()
  photos: Photo[] = [];

  @Input()
  username: string = '';
  
  @Input()
  filter: string = '';

  rows: Photo[] = [];
  
  ngOnInit(): void {
  }
  
  ngOnChanges({photos}: SimpleChanges) {
    if(photos) this.rows = this.getGroupColumns();
  }

  getGroupColumns(): Photo[] {
    const newRows = [];
    for (let i = 0; i < this.photos.length; i += 3) {
      newRows.push(this.photos.slice(i, i + 3));
    }
    console.log(newRows);
    return newRows;
  }
}
