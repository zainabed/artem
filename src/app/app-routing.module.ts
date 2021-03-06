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
import { CurrentUserComponent } from "./user/current.user.component";

const routes: Routes = [
    { path: "", component: IndexComponent , pathMatch: "full"},
    //{ path: "", redirectTo: "/(home:home//search:search//user:user)", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "user", component: CurrentUserComponent },
    { path: "search", component: SearchListComponent },
    { path: "explorer", component: ExplorerComponent }, 
    { path: "profile/:id", component: ProfileComponent },
    { path: "image-list/:indexAt", component: ImageListComponent },
    { path: "collection/:id", component: CollectionListComponent },
    { path: "user-profile", component: ProfileComponent },
    { path: "collection/:id", component: CollectionListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
