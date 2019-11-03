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

    constructor(private imageService: ImageService, private routerExtensions: RouterExtensions, 
        private _activateRoute: ActivatedRoute) {
        this.page = 1;
    }

    ngOnInit(): void {
        console.log("---- inside search ----")
        this.reset()
        this.galleryType = GALLERY_TYPE.GRID;
    }

    reset() {
        this.page = 1;
        this.images = [];
    }

    onSelect(image: Image) {
        this.imageService.setImage(image);
        this.routerExtensions.navigate(["../explorer"], {relativeTo: this._activateRoute})
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
}