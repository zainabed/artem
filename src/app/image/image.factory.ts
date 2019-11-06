import { Image } from "./image";
import { ImageService } from "./image.service";
import { ImageInformation } from "./image.information";
import { ImageMetadata } from "./image.metadata";
import { ImageStore } from "./image.store";
import { HttpClient } from "@angular/common/http";

export abstract class ImageFactory{
    abstract getImage(data: any):Image;
    abstract getImageInformation(data: any): ImageInformation;
    abstract getImageService(http: HttpClient): ImageService;
    abstract getImageMetadata(data:any): ImageMetadata;
    abstract getImageStore(): ImageStore;
}