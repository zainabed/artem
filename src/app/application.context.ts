import { ImageFactory } from "./image/image.factory";
import { HttpFactory } from "./util/http/http.factory";
import { UserFactory } from "./user/user.factory";
import { CollectionFactory } from "./collection/collection.factory";
import { UserFactoryImpl } from "./implementation/user/user.factory.impl";
import { CollectionFactoryImpl } from "./implementation/collection/collection.factory.impl";
import { HttpFactoryImpl } from "./implementation/http/http.factory.impl";
import { ImageFactoryImpl } from "./implementation/image/image.factory.impl";
import { GalleryFactory } from "./gallery/gallery.factory";
import { GalleryFactoryImpl } from "./implementation/gallery/gallery.factory.impl";

export class ApplicationContext {
    private static imageFactory: ImageFactory = null;
    private static httpFactory: HttpFactory = null;
    private static userFactory: UserFactory = null;
    private static collectionFactory: CollectionFactory = null;
    private static galleryFactory: GalleryFactory = null;


    static getImageFactory(): ImageFactory {
        if (!this.imageFactory) {
            this.imageFactory = new ImageFactoryImpl();
        }
        return this.imageFactory;
    }

    static getHttpFactory(): HttpFactory {
        if (!this.httpFactory) {
            this.httpFactory = new HttpFactoryImpl();
        }
        return this.httpFactory;
    }

    static getUserFactory(): UserFactory {
        if (!this.userFactory) {
            this.userFactory = new UserFactoryImpl();
        }
        return this.userFactory;
    }

    static getCollectioFactory(): CollectionFactory {
        if (!this.collectionFactory) {
            this.collectionFactory = new CollectionFactoryImpl();
        }
        return this.collectionFactory;
    }

    static getGalleryFactory(): GalleryFactory {
        if (!this.galleryFactory) {
            this.galleryFactory = new GalleryFactoryImpl();
        }
        return this.galleryFactory;
    }
}