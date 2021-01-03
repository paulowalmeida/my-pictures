import { NgModule } from "@angular/core";
import { PhotoComponent } from "../../components/photo/photo.component";
import { PhotoListComponent } from "../../components/photo-list/photo-list.component";
import { PhotoGaleryComponent } from "./photo-galery.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { PhotosSearchComponent } from "../../components/photos-search/photos-search.component";

@NgModule({
    declarations: [
        PhotoGaleryComponent,
        PhotoComponent,
        PhotoListComponent,
        PhotosSearchComponent
    ],
    imports: [
      CommonModule, 
      HttpClientModule,
    ]
})
export class PhotoGaleryModule{

}