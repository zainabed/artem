import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { GalleryComponent } from "./gallery.component";
import { GalleryService } from "./gallery.service";
import { GalleryServiceImpl } from "./gallery.service.impl";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ImageModule } from "../image/image.module";
import { GalleryFactory } from "./gallery.factory";
import { GalleryFactoryImpl } from "./gallery.factory.impl";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        ImageModule
    ],
    declarations: [
        GalleryComponent
    ],
    exports: [
        GalleryComponent
    ],
    providers: [
        { provide: GalleryFactory, useClass: GalleryFactoryImpl }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryModule {

}