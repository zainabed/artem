import { Component, OnInit, Input } from "@angular/core";
import { CollectionFactory } from "../collection.factory";
import { Route, ActivatedRoute } from "@angular/router";
import { CollectionService } from "../collection.service";
import { Collection } from "../collection";

@Component({
    selector: "CollectionPreviewList",
    templateUrl: "./collection-preview-list.html",
    styleUrls: ["./collection-preview-list.css"]
})
export class CollectionPreviewListComponent implements OnInit {
    @Input() collections: Array<Collection>;

    constructor() {
        this.collections = [];
    }

    ngOnInit(): void {

    }

    onFail(error: any) { }

}