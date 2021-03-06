import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchModule } from "./search/search.module";
import { ImageModule } from "./image/image.module";
import { ExplorerModule } from "./explore/explorer.module";
import { HomeModule } from "./home/home.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./util/http/auth.interceptor";
import { UserModule } from "./user/user.module";
import { IndexComponent } from "./index/index.component";
import { ImageListModule } from "./image-list/image.list.module";

 

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ImageModule,
        SearchModule,
        ExplorerModule,
        HomeModule,
        UserModule,
        ImageListModule
    ],
    declarations: [
        AppComponent,
        IndexComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    exports: [

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {
    
 }
