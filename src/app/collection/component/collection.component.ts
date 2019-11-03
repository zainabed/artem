import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { Collection } from "../collection";

@Component({
    selector: "Collection",
    templateUrl: "./collection.html",
    styleUrls: ["./collection.css"]
})
export class CollectionComponent implements OnInit{
    
    @Input() collection:Collection;
    @Output() ontap: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {
      console.log("--collection title : " + this.collection.getTitle());
    }

    
}