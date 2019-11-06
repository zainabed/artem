import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeComponent } from "./home.component";
import { GalleryModule } from "../gallery/gallery.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    imports: [
        GalleryModule,
        NativeScriptCommonModule,
        NativeScriptModule
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