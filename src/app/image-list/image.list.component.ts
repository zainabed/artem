import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ImageService } from "../image/image.service";
import { ImageFactory } from "../image/image.factory";
import { ApplicationContext } from "../application.context";
import { ImageStore } from "../image/image.store";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ImageList",
    templateUrl: "./image-list.html",
    styleUrls: ["./image-list.css"]
})
export class ImageListComponent implements OnInit {


    type: string = "list";
    public imageStore: ImageStore;
    private index: number;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();
    }

    ngOnInit(): void {
        this.index = this.route.snapshot.params.indexAt;
    }

    getIndex() {
        return this.index;
    }

    goBack() {
        this.routerExtensions.back();
    }
}