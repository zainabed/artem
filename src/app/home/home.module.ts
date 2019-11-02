import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { GalleryModule } from "../gallery/gallery.module";

@NgModule({
    imports: [
        GalleryModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }