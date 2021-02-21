import { NgModule } from '@angular/core';

import { PhotoFormContainerModule } from './photo-form/photo-form-container.module';
import { PhotoGaleryContainerModule } from './photo-galery/photo-galery-container.module';

@NgModule({
  imports: [
    PhotoGaleryContainerModule,
    PhotoFormContainerModule
  ],
})
export class PhotosContainersModule { }
