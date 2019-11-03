import { CollectionService } from "./collection.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Collection } from "./collection";
import { Image } from "../image/image";
import { HttpClient } from "@angular/common/http";
import { CollectionImpl } from "./collection.impl";
import { ImageImple } from "../implementation/image/image.impl";

export class CollectionServiceImpl implements CollectionService {

    constructor(private http: HttpClient) { }
    getUserCollectionApi(username: string): string {
        return `https://api.unsplash.com/users/${username}/collections`;
    }

    getCollectionApi(collectioId: number) {
        return `https://api.unsplash.com/collections/${collectioId}/photos`;
    }
    getCollection(username: string): Observable<Array<Collection>> {
        return this.http.get<Array<any>>(this.getUserCollectionApi(username))
            .pipe(
                map(collections => collections.map(collection => new CollectionImpl(collection)))
            );
    }

    getCollectionPhotos(collectionId: number): Observable<Array<Image>> {
        return this.http.get<Array<any>>(this.getCollectionApi(collectionId))
            .pipe(
                map(images => images.map(image => new ImageImple(image)))
            );
    }


}