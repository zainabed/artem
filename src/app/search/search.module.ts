import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchListComponent } from "./search.list.component";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { GalleryModule } from "../gallery/gallery.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

@NgModule({
    imports: [
        HttpClientModule,
        NativeScriptCommonModule,
        NativeScriptModule,
        GalleryModule
    ],
    declarations: [
        SearchListComponent
    ],
    exports: [
        SearchListComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule{

}