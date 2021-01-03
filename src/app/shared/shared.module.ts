import { NgModule } from "@angular/core";
import { Capitalize } from "./pipes/capitalize.pipe";
import { FilterByDescription } from "./pipes/filter-by-description.pipe";

@NgModule({
    declarations:[
        FilterByDescription,
        Capitalize
    ],
    exports: [
        FilterByDescription,
        Capitalize
    ]
})
export class SharedModule{}