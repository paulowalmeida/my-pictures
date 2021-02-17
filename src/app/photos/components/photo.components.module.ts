import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoLoadMoreModule } from './photo-load-more/photo-load-more.module';
import { PhotoSearchModule } from './photo-search/photo-search.module';

@NgModule({
  imports: [
    PhotoListModule,
    PhotoLoadMoreModule,
    PhotoSearchModule
  ],
  exports: [
    PhotoListModule,
    PhotoLoadMoreModule,
    PhotoSearchModule
  ]
})
export class PhotoComponentsModule { }