import { Input, OnInit, Component } from "@angular/core";
import { Image } from "../image";
import { RouterExtensions } from "nativescript-angular/router";
import { screen } from "tns-core-modules/platform/platform"

@Component({
    selector: "ImageCard",
    templateUrl: "./image-card.html",
    styleUrls: ["./image-card.css"]
})
export class ImageCardComponent implements OnInit {

    @Input() image: Image;
    public imageHeight: number = 200;

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        console.log(this.getImageHeight());
        this.imageHeight = this.getImageHeight();
    }

    onProfileTap(username: string) {
        console.log("tap on : " + username);
        this.routerExtensions.navigate(["/profile", username]);
    }

    public getImageHeight(): number {
        return Math.ceil((this.image.getHeight() * screen.mainScreen.widthDIPs) / this.image.getWidth());
    }
}