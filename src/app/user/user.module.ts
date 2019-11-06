import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { GalleryModule } from "../gallery/gallery.module";
import { UserRoutingModule } from "./user.routing.module";
import { Userservice } from "./user.service";
import { UserServiceImpl } from "../implementation/user/user.service.impl";
import { CollectionModule } from "../collection/collection.module";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { UserFactoryImpl } from "../implementation/user/user.factory.impl";
import { UserFactory } from "./user.factory";


@NgModule({
    imports: [
        //UserRoutingModule,
        GalleryModule,
        CollectionModule,
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        NativeScriptModule
    ],
    declarations: [
        ProfileComponent
    ],
    exports: [
        ProfileComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule {

}