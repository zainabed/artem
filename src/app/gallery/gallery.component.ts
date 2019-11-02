import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Image } from "../image/image";
import { GalleryService } from "./gallery.service";
import { LoadOnDemandListViewEventData } from "nativescript-ui-listview";
import { GALLERY_TYPE } from "./gallery.type";

@Component({
    selector: "ImageGallery",
    templateUrl: "./gallery-component.html",
    styleUrls: ["./gallery-component.css"],
    moduleId: module.id
})
export class GalleryComponent implements OnInit {

    @Input() type: GALLERY_TYPE;
    @Output() loadMore: EventEmitter<any> = new EventEmitter();
    public galleryType: GALLERY_TYPE;

    constructor(public galleryService: GalleryService) { }

    @Input() set images(images: Array<Image>) {
        this.galleryService.setImages(images);
    }

    ngOnInit(): void {
        console.log("----Image Gallery ---");
        console.log(this.type);
        this.galleryService.setType(this.type);
    }

    onLoadMore(args: LoadOnDemandListViewEventData) {
        this.loadMore.emit(args);
    }

}