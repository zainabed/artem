import { CollectionService } from "../../collection/collection.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Collection } from "../../collection/collection";
import { Image } from "../../image/image";
import { HttpClient } from "@angular/common/http";
import { CollectionImpl } from "./collection.impl";
import { ImageImple } from "../image/image.impl";
import { ApplicationContext } from "~/app/application.context";
import { HttpFactory } from "~/app/util/http/http.factory";
import { CollectionFactory } from "~/app/collection/collection.factory";
import { ImageFactory } from "~/app/image/image.factory";

export class CollectionServiceImpl implements CollectionService {
    private collectionFactory: CollectionFactory;
    private imageFactory: ImageFactory;
    private http: HttpClient;
    private static _collectionService: CollectionService = null;

    constructor(http: HttpClient) {
        this.http = http;
        this.collectionFactory = ApplicationContext.getCollectioFactory();
        this.imageFactory = ApplicationContext.getImageFactory();
    }

    static getInstance(http: HttpClient) {
        if (this._collectionService == null) {
            this._collectionService = new this(http);
        }
        return this._collectionService;
    }

    getUserCollectionApi(username: string): string {
        return `https://api.unsplash.com/users/${username}/collections`;
    }

    getCollectionApi(collectioId: number) {
        return `https://api.unsplash.com/collections/${collectioId}/photos`;
    }

    getCollection(username: string): Observable<Array<Collection>> {
        return this.http.get<Array<any>>(this.getUserCollectionApi(username))
            .pipe(
                map(collections => collections.map(collection => this.collectionFactory.getCollection(collection)))
            );
    }

    getCollectionPhotos(collectionId: number): Observable<Array<Image>> {
        return this.http.get<Array<any>>(this.getCollectionApi(collectionId))
            .pipe(
                map(images => images.map(image => this.imageFactory.getImage(image)))
            );
    }


}