import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CapitalizePipe } from "./pipes/capitalize/capitalize.pipe";
import { FilterByDescriptionPipe } from "./pipes/filter-by-description/filter-by-description.pipe";

@NgModule({
  declarations: [
    FilterByDescriptionPipe,
    CapitalizePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    FilterByDescriptionPipe,
    CapitalizePipe,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }