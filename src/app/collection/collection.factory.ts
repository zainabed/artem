import { CollectionService } from "./collection.service";
import { Collection } from "./collection";
import { HttpClient } from "@angular/common/http";
import { CollectionStore } from "./collection.store";

export abstract class CollectionFactory {
    abstract getCollectionService(http: HttpClient): CollectionService;
    abstract getCollection(data: any): Collection;
    abstract getCollectionStore(): CollectionStore;
}