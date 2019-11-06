import { Component, OnInit } from "@angular/core";
import { Userservice } from "./user.service";
import { User } from "./user";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { Image } from "../image/image";
import { CollectionService } from "../collection/collection.service";
import { CollectionFactory } from "../collection/collection.factory";
import { Collection } from "../collection/collection";
import { UserFactory } from "./user.factory";
import { ApplicationContext } from "../application.context";
import { ImageStore } from "../image/image.store";
import { ImageFactory } from "../image/image.factory";

@Component({
    selector: "Profile",
    templateUrl: "./profile.html",
    styleUrls: ["./profile.css"]
})
export class ProfileComponent implements OnInit {
    public user: User;
    public userService: Userservice;
    private colletioService: CollectionService;
    private imageStore: ImageStore;
    username: string;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        let userFactory: UserFactory = ApplicationContext.getUserFactory();
        this.user = userFactory.getUser();
        this.userService = userFactory.getUserService();

        let collectionFactory: CollectionFactory = ApplicationContext.getCollectioFactory();
        this.colletioService = collectionFactory.getCollectionService();

        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();
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
        this.imageStore.setImages(this.user.getImages());
        this.imageStore.setTitle("Post");
        this.routerExtensions.navigate(["image-list", index]);
    }
}