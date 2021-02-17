import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CapitalizePipe } from "./pipes/capitalize/capitalize.pipe";
import { FilterByDescriptionPipe } from "./pipes/filter-by-description/filter-by-description.pipe";

@NgModule({
  declarations: [
    FilterByDescriptionPipe,
    CapitalizePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FilterByDescriptionPipe,
    CapitalizePipe,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }