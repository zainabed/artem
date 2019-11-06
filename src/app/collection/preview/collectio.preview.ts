import { Component, Input, OnInit } from "@angular/core";
import { Collection } from "../collection";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "CollectionPreview",
  templateUrl: "./collection-preview.html",
  styleUrls: ["./collection-preview.css"]
})
export class CollectionPreview implements OnInit {

  @Input() collection: Collection;

  constructor(private router: RouterExtensions) {

  }

  ngOnInit(): void {
    console.log("--- Inside collection preivew with : " + this.collection.getPhotoCount());
  }

  onNavigate(id: number) {
    this.router.navigate(["/collection", id]);
  }
}