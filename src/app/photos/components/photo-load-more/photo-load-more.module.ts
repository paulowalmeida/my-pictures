import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PhotoLoadMoreComponent } from "./photo-load-more.component";

@NgModule({
  declarations: [
    PhotoLoadMoreComponent
  ],
  imports: [SharedModule],
  exports: [PhotoLoadMoreComponent]
})
export class PhotoLoadMoreModule { }