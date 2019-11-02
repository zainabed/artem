import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Route } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const UserRoutes: Array<Route> = [
    { path: "profile/:id", component: ProfileComponent}
]

@NgModule({
    imports: [
        NativeScriptRouterModule.forChild(UserRoutes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class UserRoutingModule{}