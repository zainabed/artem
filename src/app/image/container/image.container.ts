import { Component, Input, OnInit } from "@angular/core";
import { Cache } from "tns-core-modules/ui/image-cache";
import { fromFile, fromNativeSource, ImageSource } from "tns-core-modules/image-source";
import { Image } from "../image";

@Component({
    selector: "ImageContainer",
    templateUrl: "./image-container.html",
    styleUrls: ["./image-container.css"]
})
export class ImageContainer implements OnInit {
    @Input() public image: Image;
    cache: Cache;

    constructor() {
        this.cache = new Cache();
        // this.cache.placeholder = fromNativeSource("ic_action_home");
        this.cache.maxRequests = 5;
    }

    ngOnInit(): void {
    }

    loadImage(ImageURL: string) {

        const image = this.cache.get(ImageURL);
        let cachedImageSource = null;
        this.cache.enableDownload()
        if (image) {
            return image;
        } else {
            // If not present -- request its download + put it in the cache.
            this.cache.push({
                key: ImageURL,
                url: ImageURL,
                completed: (image, key) => {
                   
                 //   if (ImageURL === key) {
                        cachedImageSource = fromNativeSource(image);
                        console.log(cachedImageSource);
                        return cachedImageSource;
                   // }
                }
            });
        }

        this.cache.disableDownload();
    }
}