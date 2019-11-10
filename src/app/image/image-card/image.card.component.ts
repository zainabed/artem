import { Input, OnInit, Component } from "@angular/core";
import { Image } from "../image";
import { RouterExtensions } from "nativescript-angular/router";
import { screen } from "tns-core-modules/platform/platform"
import { ActivatedRoute } from "@angular/router";
import { ImageFactory } from "../image.factory";
import { ApplicationContext } from "~/app/application.context";

@Component({
    selector: "ImageCard",
    templateUrl: "./image-card.html",
    styleUrls: ["./image-card.css"]
})
export class ImageCardComponent implements OnInit {

    _image: Image;
    public imageHeight: number = 200;

    constructor(private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) {
        this.image = null;
    }

    ngOnInit(): void {
        this.imageHeight = this.getImageHeight();
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

    onProfileTap(username: string) {
        this.routerExtensions.navigate(["/profile", username]);
    }

    public getImageHeight(): number {
        return Math.ceil((this.image.getHeight() * screen.mainScreen.widthDIPs) / this.image.getWidth());
    }
}