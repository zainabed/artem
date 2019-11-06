import { OnInit, Component } from "@angular/core";
import { ImageService } from "../image/image.service";
import { Image } from "../image/image";
import { LoadOnDemandListViewEventData } from "nativescript-ui-listview";
import { GALLERY_TYPE } from "../gallery/gallery.type";
import { ImageFactory } from "../image/image.factory";
import { ApplicationContext } from "../application.context";
import { HttpClient } from "@angular/common/http";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "HomeComponent",
    templateUrl: "./home.html",
    styleUrls: ["./home.css"]
})
export class HomeComponent implements OnInit {

    public images: Array<Image>;
    searchKey: string;
    page: number;
    public galleryType: GALLERY_TYPE;
    private imageService: ImageService;

    constructor(http: HttpClient, page: Page) {
        page.actionBarHidden = false;
        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageService = imageFactory.getImageService(http);
    }

    ngOnInit(): void {
        console.log("------------- Inside Home Component -------------");
        this.page = 0;
        this.searchKey = "random";
        this.galleryType = GALLERY_TYPE.LIST;
        this.loadImages(this.searchKey, this.page);
    }

    loadImages(searchKey: string, page: number) {
        this.imageService.search(searchKey, page).subscribe(this.onSearchSuccs.bind(this), this.onFail.bind(this));
    }

    onLoadMoreItems(args: LoadOnDemandListViewEventData) {
        this.page = this.page + 1;
        this.loadImages(this.searchKey, this.page);
    }

    onSearchSuccs(images: Array<Image>) {
        console.log("loaded images -- " + images.length);
        this.images = images;
    }

    onFail(response: any) {
        console.log(response);
    }
}