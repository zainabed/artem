import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SearchListComponent } from "./search/search.list.component";
import { ExplorerComponent } from "./explore/explorer.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./user/profile.component";
import { IndexComponent } from "./index/index.component";
import { ImageListComponent } from "./image-list/image.list.component";
import { CollectionListComponent } from "./collection/list/collection.list.component";

const routes: Routes = [
    { path: "", component: IndexComponent },
    //{ path: "index", redirectTo: "/(home:home//search:search)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "home" },
    { path: "search", component: SearchListComponent, outlet: "search" },
    { path: "explorer", component: ExplorerComponent, outlet: "search" },
    { path: "profile/:id", component: ProfileComponent },
    { path: "image-list/:indexAt", component: ImageListComponent },
    { path: "user-profile", component: ProfileComponent, outlet: "user" },
    { path: "collection/:id", component: CollectionListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
