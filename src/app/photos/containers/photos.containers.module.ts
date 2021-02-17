import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoGaleryModule } from './photo-galery/photo-galery.module';

@NgModule({
  imports: [
    PhotoGaleryModule,
    PhotoFormModule
  ],
})
export class PhotosContainersModule { }
