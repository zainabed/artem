import { Component, OnInit } from "@angular/core";
import { Userservice } from "./user.service";
import { User } from "./user";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Profile",
    templateUrl: "./profile.html",
    styleUrls: ["./profile.css"]
})
export class ProfileComponent implements OnInit {
    public user: User;
    constructor(
        private userService: Userservice,
        private routerExtensions: RouterExtensions,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        let username = this.route.snapshot.params.id;
        this.userService.getUser(username).subscribe(this.onUserGetSuccess.bind(this), this.onFail.bind(this));
    }

    onUserGetSuccess(user: User) {
        this.user = user;
    }

    onFail(error: any) {

    }
}