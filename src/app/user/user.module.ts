import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { GalleryModule } from "../gallery/gallery.module";
import { UserRoutingModule } from "./user.routing.module";
import { Userservice } from "./user.service";
import { UserServiceImpl } from "../implementation/user/user.service.impl";

@NgModule({
    imports: [
        //UserRoutingModule,
        GalleryModule
    ],
    declarations: [
        ProfileComponent
    ],
    exports: [
        ProfileComponent
    ],
    providers: [
        { provide: Userservice, useClass: UserServiceImpl }
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class UserModule {

}