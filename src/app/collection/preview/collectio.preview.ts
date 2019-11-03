import { Component, Input, OnInit } from "@angular/core";
import { Collection } from "../collection";

@Component({
    selector: "CollectionPreview",
    templateUrl: "./collection-preview.html",
    styleUrls: ["./collection-preview.css"]
})
export class CollectionPreview implements OnInit{
    
    @Input() collection: Collection;

    ngOnInit(): void {
      console.log("--- Inside collection preivew with : " + this.collection.getPhotoCount());
    }
}