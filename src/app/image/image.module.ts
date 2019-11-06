import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ImageContainer } from "./container/image.container";
import { ImageService } from "./image.service";
import { ImageServiceImpl } from "../implementation/image/image.service.impl";
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ImageRoutingModule } from "./image.routing.module";
import { ImageCardComponent } from "./image-card/image.card.component";

@NgModule({
    imports:[
        NativeScriptModule,
        NativeScriptCommonModule,
   //     ImageRoutingModule
    ],
    declarations: [
        ImageContainer,
        ImageCardComponent
    ],
    exports: [
        ImageContainer,
        ImageCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
}) 
export class ImageModule {

}