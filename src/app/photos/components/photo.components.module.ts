import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoComponent } from "./photo/photo.component";
import { PhotosLoadMoreComponent } from "./photos-load-more/photos-load-more.component";
import { PhotosSearchComponent } from "./photos-search/photos-search.component";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotosLoadMoreComponent,
        PhotosSearchComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        PhotoListComponent,
        PhotosLoadMoreComponent,
        PhotosSearchComponent
    ]
})
export class PhotoComponentsModule{ }