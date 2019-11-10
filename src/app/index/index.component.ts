import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Index",
    templateUrl: "./index.html"
})
export class IndexComponent{

    constructor(page: Page, private router: RouterExtensions){
        page.actionBarHidden = false;
    }

    public onUserTap(){
        console.log("User clicked");
        this.router.navigate(["/profile", "zainabed179"])
    }
}
