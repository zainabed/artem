import { Component, OnInit } from "@angular/core";
import { SearchService } from "./search.service";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { LoadOnDemandListViewEventData, RadListView } from "nativescript-ui-listview";
import { ImageService } from "../image/image.service";
import { Image } from "../image/image";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { GALLERY_TYPE } from "../gallery/gallery.type";
import { Page } from "tns-core-modules/ui/page/page";
import { ImageStore } from "../image/image.store";
import { ImageFactory } from "../image/image.factory";
import { ApplicationContext } from "../application.context";
import { HttpClient } from "@angular/common/http";

interface Item {
    title: string;
}

@Component({
    selector: "SearchList",
    templateUrl: "search-list.html",
    styleUrls: ["./search.css"]
})
export class SearchListComponent implements OnInit {

    public images: Array<Image>;
    page: number;
    searchText: string;
    public galleryType: GALLERY_TYPE;
    private imageStore: ImageStore;
    private imageService: ImageService;

    constructor(private routerExtensions: RouterExtensions, private viewPage: Page, http: HttpClient, private route: ActivatedRoute) {
        this.page = 1;
        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();
        this.imageService = imageFactory.getImageService(http);
    }

    ngOnInit(): void {
        console.log("---- inside search ----")
        this.viewPage.actionBarHidden = true;
        this.reset()
        this.galleryType = GALLERY_TYPE.GRID;
    }

    reset() {
        this.page = 1;
        this.images = [];
    }

    onSubmit(args: any) {
        let searchBar: SearchBar = args.object as SearchBar;
        this.searchText = searchBar.text;
        this.reset();
        this.onSearch(this.searchText, this.page);
    }

    public onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
        console.log("onDemand")
        const listview: RadListView = args.object as RadListView;
        this.page = this.page + 1;
        this.onSearch(this.searchText, this.page);
    }

    onSearch(key: string, page: number) {
        this.imageService.search(key, page).subscribe(this.onSearchSuccess.bind(this), this.onFail.bind(this));
    }

    onSearchSuccess(images: Array<Image>) {
        this.images = this.images.concat(images);
    }

    onFail(error: any) {

    }

    onImageSelect(index: number) {
        this.imageStore.setImages(this.images);
        this.imageStore.setTitle("Explorer");
        this.routerExtensions.navigate(["../image-list", index], { relativeTo: this.route });
    }
}