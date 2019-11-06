import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { GalleryModule } from "../gallery/gallery.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ImageListComponent } from "./image.list.component";

@NgModule({
    imports:[
        NativeScriptModule,
        GalleryModule
    ],
    declarations: [
        ImageListComponent
    ],
    exports: [
        ImageListComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ImageListModule{}