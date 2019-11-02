import { Image } from "../image/image";

export abstract class GalleryService {
    abstract setType(type: string): void;
    abstract getType(): string;
    abstract isOfType(type: string): boolean;
    abstract setImages(images: Array<Image>): void;
    abstract getImages(): Array<Image>;
}