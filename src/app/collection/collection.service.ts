import { Collection } from "./collection";
import { Image } from "../image/image";
import { Observable } from "rxjs";

export abstract class CollectionService {
    abstract getCollection(username: string): Observable<Array<Collection>>;
    abstract getCollectionPhotos(collectionId: number): Observable<Array<Image>>;
}