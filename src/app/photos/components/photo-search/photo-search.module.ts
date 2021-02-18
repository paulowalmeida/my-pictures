import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PhotoSearchComponent } from "./photo-search.component";

@NgModule({
  declarations: [PhotoSearchComponent],
  imports: [SharedModule],
  exports: [PhotoSearchComponent]
})
export class PhotoSearchModule { }