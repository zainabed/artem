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
import { UserSecurity } from "./user.security";
import { HttpClient } from "@angular/common/http";
import { Page } from "tns-core-modules/ui/page/page";

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
    public userSecurity: UserSecurity;
    private photoPage: number = 0;
    username: string;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, http: HttpClient, page: Page) {
        page.actionBarHidden = false;
        let userFactory: UserFactory = ApplicationContext.getUserFactory();
        this.user = userFactory.getUser({});
        this.userService = userFactory.getUserService(http);
        this.userSecurity = userFactory.getUserSecurity();

        let collectionFactory: CollectionFactory = ApplicationContext.getCollectioFactory();
        this.colletioService = collectionFactory.getCollectionService(http);

        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();

    }

    ngOnInit(): void {
        if (this.route.snapshot.params.id) {
            this.username = this.route.snapshot.params.id;
        } else {
            this.username = this.userSecurity.getCurrentUser().getUsername();
        }

        this.userService.getUser(this.username).subscribe(this.onUserGetSuccess.bind(this), this.onFail.bind(this));
    }


    onUserGetSuccess(user: User) {
        console.log(user);
        this.user = user;
        this.loadPhotos(null);
        this.colletioService.getCollection(this.username).subscribe(
            this.onCollectionSuccess.bind(this),
            this.onFail.bind(this)
        );
    }

    public loadPhotos(args: any) {
        this.photoPage = this.photoPage + 1;
        this.userService.getPhotos(this.username, this.photoPage).subscribe(this.onPhotosSuccess.bind(this), this.onFail.bind(this));
    }

    onPhotosSuccess(images: Array<Image>) {
        let imageSet: Array<Image> = images.concat(this.user.getImages());
        this.user.setImages(imageSet);
    }

    onCollectionSuccess(collections: Array<Collection>) {
        console.log("-- collection count : " + collections.length);
        this.user.setCollection(collections);
    }

    onFail(error: any) {
        console.log(error);
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