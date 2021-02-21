import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { PhotoComponentsModule } from "../../components/photo.components.module";
import { PhotoGaleryContainerComponent } from "./photo-galery-container.component";

@NgModule({
  declarations: [
    PhotoGaleryContainerComponent
  ],
  imports: [
    SharedModule,
    PhotoComponentsModule
  ]
})
export class PhotoGaleryContainerModule { }