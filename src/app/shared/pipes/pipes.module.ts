import { NgModule } from "@angular/core";
import { CapitalizePipe } from "./capitalize/capitalize.pipe";
import { FilterByDescriptionPipe } from "./filter-by-description/filter-by-description.pipe";

@NgModule({
  declarations: [
    FilterByDescriptionPipe,
    CapitalizePipe,
  ],
  exports: [
    CapitalizePipe,
    FilterByDescriptionPipe
  ]
})
export class PipesModule{ }