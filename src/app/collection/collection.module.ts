import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CollectionListComponent } from "./list/collection.list.component";
import { CollectionFactory } from "./collection.factory";
import { CollectionFactoryImpl } from "./collection.factory.impl";
import { CollectionComponent } from "./component/collection.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { CollectionPreview } from "./preview/collectio.preview";
import { CollectionPreviewListComponent } from "./preview-list/collection.list.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CollectionListComponent,
        CollectionComponent,
        CollectionPreview,
        CollectionPreviewListComponent
    ],
    exports: [
        CollectionListComponent,
        CollectionComponent,
        CollectionPreview,
        CollectionPreviewListComponent
    ],
    providers: [
        { provide: CollectionFactory, useClass: CollectionFactoryImpl }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CollectionModule { }