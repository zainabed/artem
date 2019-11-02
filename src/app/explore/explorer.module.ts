import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ExplorerComponent } from "./explorer.component";

@NgModule({
    declarations: [
        ExplorerComponent
    ],
    exports: [
        ExplorerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExplorerModule { }