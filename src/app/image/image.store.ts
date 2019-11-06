import { Image } from "./image";

export abstract class ImageStore {
    abstract setImage(image: Image): void;
    abstract getImage(): Image;
    abstract setImages(images: Array<Image>): void;
    abstract getImages(): Array<Image>;
    abstract setTitle(title:string): void;
    abstract getTitle(): string;
}