import { Component, OnInit, Input } from "@angular/core";
import { CollectionFactory } from "../collection.factory";
import { Route, ActivatedRoute } from "@angular/router";
import { CollectionService } from "../collection.service";
import { Collection } from "../collection";

@Component({
    selector: "CollectionList",
    templateUrl: "./collection-list.html",
    styleUrls: ["./collection-list.css"]
})
export class CollectionListComponent implements OnInit {
    @Input() collections: Array<Collection>;

    constructor() {
        this.collections = [];
    }

    ngOnInit(): void {

    }

    onFail(error: any) { }

}