import { OnInit, Input, Component } from "@angular/core";
import { ImageService } from "../image/image.service";
import { Image } from "../image/image";
import { ImageFactory } from "../image/image.factory";
import { ApplicationContext } from "../application.context";
import { ImageStore } from "../image/image.store";


@Component({
    selector: "InstaExplorer",
    templateUrl: "./explorer.html",
    styleUrls: ["./explorer.css"]
})
export class ExplorerComponent implements OnInit {

    public image: Image;
    private imageStore: ImageStore;

    constructor() { 
        let imageFactory: ImageFactory = ApplicationContext.getImageFactory();
        this.imageStore = imageFactory.getImageStore();
    }

    ngOnInit(): void {
        this.image = this.imageStore.getImage();
        console.log("Inside explorer");

    }

}