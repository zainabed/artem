import { Image } from "./image";
import { ImageService } from "./image.service";
import { ImageInformation } from "./image.information";
import { ImageMetadata } from "./image.metadata";
import { ImageStore } from "./image.store";

export abstract class ImageFactory{
    abstract getImage(data: any):Image;
    abstract getImageInformation(data: any): ImageInformation;
    abstract getImageService(): ImageService;
    abstract getImageMetadata(data:any): ImageMetadata;
    abstract getImageStore(): ImageStore;
}