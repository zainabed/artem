import { ImageStore } from "~/app/image/image.store";
import { Image } from "~/app/image/image";

export class ImageStoreImpl implements ImageStore {

    private _title: string;
    private _image: Image;
    private _images: Array<Image>;

    setImages(images: Image[]): void {
        this._images = images;
    }

    getImages(): Image[] {
        return this._images;
    }

    setImage(image: Image): void {
        this._image = image;
    }

    getImage(): Image {
        return this._image;
    }

    setTitle(title: string): void {
        this._title = title;
    }

    getTitle(): string {
        return this._title;
    }
}