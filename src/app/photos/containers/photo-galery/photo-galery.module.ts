import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { PhotoComponent } from "../../components/photo/photo.component";
import { PhotoListComponent } from "../../components/photo-list/photo-list.component";
import { PhotoGaleryComponent } from "./photo-galery.component";
import { PhotosSearchComponent } from "../../components/photos-search/photos-search.component";
import { PhotosLoadMoreComponent } from "../../components/photos-load-more/photos-load-more.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        PhotoGaleryComponent,
        PhotoComponent,
        PhotoListComponent,
        PhotosSearchComponent,
        PhotosLoadMoreComponent
    ],
    imports: [
      CommonModule, 
      HttpClientModule,
      SharedModule
    ]
})
export class PhotoGaleryModule{

}