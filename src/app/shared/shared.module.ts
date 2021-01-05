import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Capitalize } from "./pipes/capitalize.pipe";
import { FilterByDescription } from "./pipes/filter-by-description.pipe";

@NgModule({
    declarations:[
        FilterByDescription,
        Capitalize
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        FilterByDescription,
        Capitalize,
        CommonModule,
        HttpClientModule
    ]
})
export class SharedModule{}