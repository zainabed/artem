import { GalleryFactory } from "./gallery.factory";
import { GalleryService } from "./gallery.service";
import { GalleryServiceImpl } from "./gallery.service.impl";

export class GalleryFactoryImpl implements GalleryFactory {
    getGalleryService(): GalleryService {
        return new GalleryServiceImpl();
    }

}