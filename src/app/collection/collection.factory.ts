import { CollectionService } from "./collection.service";
import { Collection } from "./collection";

export abstract class CollectionFactory {
    abstract getCollectionService(): CollectionService;
    abstract getCollection(data: any): Collection;
}