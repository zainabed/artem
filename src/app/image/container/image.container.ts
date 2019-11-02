import { Component, Input, OnInit } from "@angular/core";
import { Image } from "../image";

@Component({
    selector: "ImageContainer",
    templateUrl: "./image-container.html",
    styleUrls: ["./image-container.css"]
})
export class ImageContainer implements OnInit {
    @Input() public image: Image;

    constructor() { }

    ngOnInit(): void {
    }

}