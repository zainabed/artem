import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CollectionFactory } from "../collection.factory";
import { ActivatedRoute } from "@angular/router";
import { CollectionService } from "../collection.service";
import { Image } from "~/app/image/image";
import { ApplicationContext } from "~/app/application.context";
import { HttpClient } from "@angular/common/http";
import { Page } from "tns-core-modules/ui/page/page";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

@Component({
    selector: "CollectionList",
    templateUrl: "./collection-list.html",
    styleUrls: ["./collection-list.css"]
})
export class CollectionListComponent implements OnInit {
    private images: Array<Image>;
    private collectionService: CollectionService;
    public image: Image;
    private id: number;
    public maxValue: number = 0;
    public currentValue: number = 0;
    interval: any;


    constructor(private route: ActivatedRoute, http: HttpClient, page: Page) {
        page.actionBarHidden = true;
        let collectionFactory: CollectionFactory = ApplicationContext.getCollectioFactory();
        this.collectionService = collectionFactory.getCollectionService(http);
        this.image = null;
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.collectionService.getCollectionPhotos(this.id).subscribe(this.onCollectionPhotoSuccess.bind(this), this.onFail.bind(this));
    }

    onCollectionPhotoSuccess(images: Array<Image>) {
        this.images = images;
        this.animateCollection();
    }

    animateCollection() {
        this.maxValue = this.images.length;
        let self = this;
        this.interval = setInterval(function () {
            self.updatateImage(1);
        }, 2000);


    }

    updatateImage(index: number) {
        this.currentValue = this.currentValue + index;
        if (this.currentValue >= this.maxValue) {
            clearInterval(this.interval);
            return;
        }
        this.image = this.images[this.currentValue];
    }




    onFail() { }

} 