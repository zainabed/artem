import { ImageFactory } from "~/app/image/image.factory";
import { ImageImple } from "./image.impl";
import { Image } from "~/app/image/image";
import { ImageService } from "~/app/image/image.service";
import { ImageServiceImpl } from "./image.service.impl";
import { ImageInformation } from "~/app/image/image.information";
import { ImageInformationImpl } from "./image.information.impl";
import { ImageMetadata } from "~/app/image/image.metadata";
import { ImageMetadataImpl } from "./image.metadata.impl";
import { ImageStore } from "~/app/image/image.store";
import { ImageStoreImpl } from "./image.store.impl";
import { HttpClient } from "@angular/common/http";

export class ImageFactoryImpl implements ImageFactory {
    
    private _imageStore: ImageStore = null;

    getImage(data: any): Image {
        return new ImageImple(data);
    }

    getImageInformation(data: any): ImageInformation {
        return new ImageInformationImpl(data);
    }

    getImageService(http: HttpClient): ImageService {
        return new ImageServiceImpl(http);
    }

    getImageMetadata(data: any): ImageMetadata {
        return new ImageMetadataImpl(data);
    }

    getImageStore(): ImageStore {
        if(this._imageStore == null) {
            this._imageStore = new ImageStoreImpl();
        }
        return this._imageStore;
    }

}