import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { GalleryModule } from "../gallery/gallery.module";
import { UserRoutingModule } from "./user.routing.module";

@NgModule({
    imports: [
        UserRoutingModule,
        GalleryModule
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