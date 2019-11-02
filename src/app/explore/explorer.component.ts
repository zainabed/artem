import { OnInit, Input, Component } from "@angular/core";
import { ImageService } from "../image/image.service";
import { Image } from "../image/image";


@Component({
    selector: "InstaExplorer",
    templateUrl: "./explorer.html",
    styleUrls: ["./explorer.css"]
})
export class ExplorerComponent implements OnInit {

    public image: Image;

    constructor(private imageService: ImageService) { }

    ngOnInit(): void {
        this.image = this.imageService.getImage();
        console.log("Inside explorer");

    }

}