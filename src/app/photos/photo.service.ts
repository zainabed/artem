import { Injectable } from "@angular/core";
import { Image } from "../image/image";

@Injectable({
    providedIn: "root"
})
export class PhotoService {
    private images: Array<Image>;
    private index: number = 0;
    private title: string;

    setPhotos(images: Array<Image>): void {
        this.images = images;
    }

    getPhotos(): Array<Image> {
        return this.images;
    }

    setIndex(index: number) {
        this.index = index;
    }

    getIndex(): number {
        return this.index;
    }

    setTitle(title: string) {
        this.title = title;
    }
    
    getTitle(): string {
        return this.title;
    }
}