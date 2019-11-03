import { Component, Input } from "@angular/core";
import { PhotoService } from "./photo.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Photos",
    templateUrl: "./photos.html",
    styleUrls: ["./photos.css"]
})
export class PhotosComponent {

    type: string = "list";
    
    constructor(
        public photoService: PhotoService,
        private routerExtensions: RouterExtensions) { }

    goBack() {
        this.routerExtensions.back();
    }
}