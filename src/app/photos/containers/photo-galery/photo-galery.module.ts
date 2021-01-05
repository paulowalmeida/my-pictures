import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { PhotoComponentsModule } from "../../components/photo.components.module";
import { PhotoGaleryComponent } from "./photo-galery.component";

@NgModule({
    declarations: [
      PhotoGaleryComponent
    ],
    imports: [
      PhotoComponentsModule,
      SharedModule
    ]
})
export class PhotoGaleryModule{

}