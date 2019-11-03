import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { SearchListComponent } from "./search/search.list.component";
import { ExplorerComponent } from "./explore/explorer.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./user/profile.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
    { path: "", component: IndexComponent },
    //{ path: "index", redirectTo: "/(home:home//search:search)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "home" },
    { path: "search", component: SearchListComponent, outlet: "search" },
    { path: "explorer", component: ExplorerComponent, outlet: "search" },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "profile/:id", component: ProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
