import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Cache } from "tns-core-modules/ui/image-cache";
import { fromFile, fromNativeSource, ImageSource } from "tns-core-modules/image-source";
import { Image } from "../image";
import { Observable } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ImageContainer",
    templateUrl: "./image-container.html",
    styleUrls: ["./image-container.css"]
})
export class ImageContainer implements OnInit {
    @Input() public image: Image;
    
    constructor() {
    }

    ngOnInit(): void {
        //const vm = new Observable();
        //this.cacheImage(vm, this.image.getThumbnail());
        //this.page.bindingContext = vm;
    }

    onLoaded(args) {
     //   this.page = args.object;
    }

    cacheImage(viewModel: Observable, ImageURL: string) {

        // >> image-cache-code
        const cache = new Cache();
        cache.placeholder = fromFile("~/logo.png");
        cache.maxRequests = 5;

        // set the placeholder while the desired image is downloaded
        viewModel.set("imageSource", cache.placeholder);

        // Enable download while not scrolling
        cache.enableDownload();

        let cachedImageSource;
        // Try to read the image from the cache
        const image = cache.get(ImageURL);

        if (image) {
            // If present -- use it.
            cachedImageSource = fromNativeSource(image);
            viewModel.set("imageSource", cachedImageSource);
        } else {
            // If not present -- request its download + put it in the cache.
            cache.push({
                key: ImageURL,
                url: ImageURL,
                completed: (image, key) => {
                    if (ImageURL === key) {
                        cachedImageSource = fromNativeSource(image);
                        viewModel.set("imageSource", cachedImageSource); // set the downloaded image
                    }
                }
            });
        }

    }
}