import { Input, OnInit, Component } from "@angular/core";
import { Image } from "../image";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ImageCard",
    templateUrl: "./image-card.html",
    styleUrls: ["./image-card.css"]
})
export class ImageCardComponent implements OnInit {

    @Input() image: Image;

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
    }

    onProfileTap(username: string) {
        this.routerExtensions.navigate(["/profile", username]);
    }
}