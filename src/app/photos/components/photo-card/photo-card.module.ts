import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PhotoCardComponent } from "./photo-card.component";

@NgModule({
  declarations: [PhotoCardComponent],
  imports: [
    SharedModule
  ],
  exports: [PhotoCardComponent]
})
export class PhotoCardModule { }