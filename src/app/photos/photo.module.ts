import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { PhotosComponent } from "./photos.component";
import { GalleryModule } from "../gallery/gallery.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

@NgModule({
    imports:[
        NativeScriptModule,
        GalleryModule
    ],
    declarations: [
        PhotosComponent
    ],
    exports: [
        PhotosComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PhotoModule{}