import { Component, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ImageService } from "../image/image.service";
import { ImageFactory } from "../image/image.factory";
import { ApplicationContext } from "../application.context";
import { ImageStore } from "../image/image.store";

@Component({
    selector: "ImageList",
    templateUrl: "./image-list.html",
    styleUrls: ["./image-list.css"]
})
export class ImageListComponent {

    type: string = "list";
    public imageStore: ImageStore;
    private index: number;

    constructor(private routerExtensions: RouterExtensions) {
        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();
    }

    
    getIndex(){
        return this.index;
    }

    goBack() {
        this.routerExtensions.back();
    }
}