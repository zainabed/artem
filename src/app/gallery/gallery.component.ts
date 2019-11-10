import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Image } from "../image/image";
import { GalleryService } from "./gallery.service";
import { LoadOnDemandListViewEventData, RadListView, ListViewEventData, ListViewScrollEventData } from "nativescript-ui-listview";
import { GALLERY_TYPE } from "./gallery.type";
import { GalleryFactory } from "./gallery.factory";
import { Page } from "tns-core-modules/ui/page/page";
import { RadListViewComponent } from "nativescript-ui-listview/angular/listview-directives";
import { ApplicationContext } from "../application.context";

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
    @Output() onScrolled: EventEmitter<any> = new EventEmitter();
    @Input() scrollAt: number = 0;
    @Input() marginValue: number = 0;
    @ViewChild('listView', null) radListViewComponent: RadListViewComponent;
    private listView: RadListView;
    private currentImages: Array<Image>;

    public id: number;
    public galleryType: GALLERY_TYPE;
    public galleryService: GalleryService;

    constructor(private page: Page) {
        let galleryFactory: GalleryFactory = ApplicationContext.getGalleryFactory();
        this.galleryService = galleryFactory.getGalleryService();
        this.id = Math.random();
    }

    @Input() set images(images: Array<Image>) {
        this.currentImages = images;
        this.galleryService.setImages(images);
    }

    ngOnInit(): void {
        this.galleryService.setType(this.type);
    }

    onLoadMore(args: LoadOnDemandListViewEventData) {
        if (!this.currentImages.length) {
            const listView: RadListView = args.object;
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
        this.loadMore.emit(args);
    }

    onItemSelected(args: ListViewEventData) {
        this.onTap.emit(args.index);
    }

    loadedEvent(args: any) {
        this.scrollTo();
    }

    scrolledEvent(args: ListViewScrollEventData){
        this.onScrolled.emit(args);
        this.listView = args.object as RadListView;
    }

    scrollTo() {
        if (this.type == "grid" || !this.scrollAt) {
            return;
        }
        let self = this;
        setTimeout(() => {
            console.log("----- scrolling at : " + self.scrollAt);
            self.listView.scrollToIndex(self.scrollAt);
        }, 1000);

    }

}