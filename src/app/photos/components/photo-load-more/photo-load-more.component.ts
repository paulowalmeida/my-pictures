import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photo-load-more',
  templateUrl: './photo-load-more.component.html',
  styleUrls: ['./photo-load-more.component.scss']
})
export class PhotoLoadMoreComponent implements OnChanges {

  @Input()
  hasMore = false;

  @Input()
  photosLength = 0;

  @Output()
  onLoadMore = new EventEmitter<void>();

  constructor() { }
    
  ngOnChanges({photosLength, hasMore}: SimpleChanges): void {
    if(photosLength) {
      this.photosLength = photosLength.currentValue;
      console.log(this.photosLength);
    }
    
    if(hasMore) {
      this.hasMore = hasMore.currentValue;
      console.log(this.hasMore);
    }
  }
  loadMore() {
    this.onLoadMore.emit();
  }
}
