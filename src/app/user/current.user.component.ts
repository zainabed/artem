import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "CurrentUser",
    template: `<ProfileComponent></ProfileComponent>`
})
export class CurrentUserComponent implements OnInit {

    username: string;
    constructor(private route: RouterExtensions, private activatedRoute: ActivatedRoute) {
        this.username = "zainabed179"
    }

    ngOnInit(): void {
        console.log(this.username);
    }
}