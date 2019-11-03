import { GalleryService } from "./gallery.service";

export abstract class GalleryFactory {
    abstract getGalleryService(): GalleryService;
}