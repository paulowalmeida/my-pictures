import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PhotoModule } from "../photo/photo.module";
import { PhotoListComponent } from "./photo-list.component";

@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    SharedModule,
    PhotoModule
  ],
  exports: [PhotoListComponent]
})
export class PhotoListModule { }