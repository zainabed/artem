import { GalleryService } from "../../gallery/gallery.service";
import { Image } from "../../image/image"
import { GALLERY_TYPE } from "../../gallery/gallery.type";

export class GalleryServiceImpl implements GalleryService {
    _type: string;
    _images: Array<Image>;

    setType(type: string): void {
        this._type = type;
    }

    getType(): string {
        return this._type;
    }

    isOfType(type: string): boolean {
       return this._type == type;
    }

    setImages(images: Image[]): void {
        this._images = images;
    }

    getImages(): Image[] {
        return this._images;
    }


}