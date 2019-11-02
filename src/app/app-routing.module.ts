import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { SearchListComponent } from "./search/search.list.component";
import { ExplorerComponent } from "./explore/explorer.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    //{ path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "", redirectTo: "/(home:home//search:search)", pathMatch: "full" },
    { path: "home", component: HomeComponent, outlet: "home" },
    { path: "search", component: SearchListComponent, outlet: "search" },
    { path: "explorer", component: ExplorerComponent, outlet: "search" },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
