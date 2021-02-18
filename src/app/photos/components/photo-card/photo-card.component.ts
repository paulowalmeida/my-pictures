import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/shared/models/photo/photo.model';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
