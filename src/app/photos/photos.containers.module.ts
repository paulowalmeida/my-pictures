import { NgModule } from '@angular/core';

import { PhotoFormModule } from './containers/photo-form/photo-form.module';
import { PhotoGaleryModule } from './containers/photo-galery/photo-galery.module';


@NgModule({
  imports: [
      PhotoGaleryModule,
      PhotoFormModule
    ]
})
export class PhotosContainersModule {}
