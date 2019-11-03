import { Component, OnInit } from "@angular/core";
import { Userservice } from "./user.service";
import { User } from "./user";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { UserImpl } from "../implementation/user/user.impl";
import { Image } from "../image/image";

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
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        let username = this.route.snapshot.params.id;
        this.userService.getUser(username).subscribe(this.onUserGetSuccess.bind(this), this.onFail.bind(this));
        this.userService.getPhotos(username).subscribe(this.onPhotosSuccess.bind(this), this.onFail.bind(this));
    }

    onUserGetSuccess(user: User) {
        this.user = user;
  
    }

    onPhotosSuccess(images: Array<Image>) {
        this.user.setImages(images);
        console.log(" -- photos -- " + this.user.getImages().length);
    }

    onFail(error: any) {

    }
}