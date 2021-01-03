import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoListComponent } from './containers/photo-list/photo-list.component';

@NgModule({
  declarations: [
      PhotoComponent, 
      PhotoListComponent
    ],
  imports: [
      CommonModule, 
      HttpClientModule
    ],
  exports: [PhotoListComponent],
})
export class PhotosModule {}
