import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
     
    constructor(private route: RouterExtensions){
 //       this.route.navigate(["tab"]);
    }

    ngOnInit(): void {
        
    }

}
