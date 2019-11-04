import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Image } from "../image/image";
import { GalleryService } from "./gallery.service";
import { LoadOnDemandListViewEventData, RadListView, ListViewEventData } from "nativescript-ui-listview";
import { GALLERY_TYPE } from "./gallery.type";
import { GalleryFactory } from "./gallery.factory";
import { Page } from "tns-core-modules/ui/page/page";
import { RadListViewComponent } from "nativescript-ui-listview/angular/listview-directives";

@Component({
    selector: "ImageGallery",
    templateUrl: "./gallery-component.html",
    styleUrls: ["./gallery-component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {

    @Input() type: GALLERY_TYPE;
    @Output() loadMore: EventEmitter<any> = new EventEmitter();
    @Output() onTap: EventEmitter<any> = new EventEmitter();
    @Input() scrollAt: number = 0;
    @ViewChild('listView', null) radListViewComponent: RadListViewComponent;

    public id: number;
  
    public galleryType: GALLERY_TYPE;
    public galleryService: GalleryService;
    constructor(galleryFactory: GalleryFactory, private page: Page) {
        this.galleryService = galleryFactory.getGalleryService();
        this.id = Math.random();
    }

    @Input() set images(images: Array<Image>) {
        this.galleryService.setImages(images);
    }

    ngOnInit(): void {
        console.log("----Image Gallery ---");
        //this.listView = this.page.getViewById(this.id + "") as RadListView;
        this.galleryService.setType(this.type);
    }

    onLoadMore(args: LoadOnDemandListViewEventData) {
        this.loadMore.emit(args);
    }

    onItemSelected(args: ListViewEventData) {
        this.onTap.emit(args.index);
    }

    loadedEvent(args: any) {
        this.scrollTo();
    }

    scrollTo() {
        if (this.type == "grid") {
            return;
        }
        setTimeout(() => {
            console.log("----- scrolling at : " + this.scrollAt);
            console.log(this.radListViewComponent.listView);
            this.radListViewComponent.listView.scrollToIndex(this.scrollAt);
        }, 200);

    }

}