import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SearchListComponent } from "./search.list.component";
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { GalleryModule } from "../gallery/gallery.module";

@NgModule({
    imports: [
        HttpClientModule,
        NativeScriptCommonModule,
        
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