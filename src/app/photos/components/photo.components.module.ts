import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoLoadMoreComponent } from "./photo-load-more/photo-load-more.component";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoSearchComponent } from "./photo-search/photo-search.component";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoLoadMoreComponent,
        PhotoSearchComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        PhotoListComponent,
        PhotoLoadMoreComponent,
        PhotoSearchComponent
    ]
})
export class PhotoComponentsModule{ }