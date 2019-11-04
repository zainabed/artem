import { Component, OnInit } from "@angular/core";
import { Userservice } from "./user.service";
import { User } from "./user";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { UserImpl } from "../implementation/user/user.impl";
import { Image } from "../image/image";
import { CollectionService } from "../collection/collection.service";
import { CollectionFactory } from "../collection/collection.factory";
import { Collection } from "../collection/collection";
import { PhotoService } from "../photos/photo.service";
import { UserFactory } from "./user.factory";

@Component({
    selector: "Profile",
    templateUrl: "./profile.html",
    styleUrls: ["./profile.css"]
})
export class ProfileComponent implements OnInit {
    public user: User;
    public userService: Userservice;
    private colletioService: CollectionService;
    username: string;

    constructor(
        private userFactory: UserFactory,
        private collectionFactory: CollectionFactory,
        private routerExtensions: RouterExtensions,
        private photoService: PhotoService,
        private route: ActivatedRoute) {
        this.user = this.userFactory.getUser();
        this.userService = this.userFactory.getUserService();
        this.colletioService = this.collectionFactory.getCollectionService();
    }

    ngOnInit(): void {
        this.username = this.route.snapshot.params.id;
        this.userService.getUser(this.username).subscribe(this.onUserGetSuccess.bind(this), this.onFail.bind(this));

    }

    onUserGetSuccess(user: User) {
        this.user = user;
        this.userService.getPhotos(this.username).subscribe(this.onPhotosSuccess.bind(this), this.onFail.bind(this));
        this.colletioService.getCollection(this.username).subscribe(
            this.onCollectionSuccess.bind(this),
            this.onFail.bind(this)
        )
    }

    onPhotosSuccess(images: Array<Image>) {
        this.user.setImages(images);
        console.log(" -- photos -- " + this.user.getImages().length);
    }

    onCollectionSuccess(collections: Array<Collection>) {
        console.log("-- collection count : " + collections.length);
        this.user.setCollection(collections);
    }

    onFail(error: any) {

    }

    goBack() {
        this.routerExtensions.back();
    }

    onImageSelect(index: number) {
        this.photoService.setPhotos(this.user.getImages());
        this.photoService.setIndex(index);
        this.photoService.setTitle("Post");
        this.routerExtensions.navigate(["photos"]);
    }
}