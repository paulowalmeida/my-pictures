import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-load-more',
  templateUrl: './photo-load-more.component.html',
  styleUrls: ['./photo-load-more.component.scss']
})
export class PhotoLoadMoreComponent implements OnInit {

  @Input()
  hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
