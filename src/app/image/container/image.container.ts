import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Cache } from "tns-core-modules/ui/image-cache";
import { fromFile, fromNativeSource, ImageSource } from "tns-core-modules/image-source";
import { Image } from "../image";
import { Observable } from "tns-core-modules/ui/page/page";
import { ApplicationContext } from "~/app/application.context";
import { ImageFactory } from "../image.factory";

@Component({
    selector: "ImageContainer",
    templateUrl: "./image-container.html",
    styleUrls: ["./image-container.css"]
})
export class ImageContainer implements OnInit {
    public _image: Image;
    
    constructor() {
        this.image = null;
    }

    @Input() set image(image: Image) {
        if (!image) {
            let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
            image = imageFactory.getImage({});
        }
        this._image = image;
    }

    get image(): Image {
        return this._image;
    }

    ngOnInit(): void {
    }
 
    
}