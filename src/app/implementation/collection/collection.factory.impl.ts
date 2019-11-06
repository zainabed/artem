import { CollectionFactory } from "../../collection/collection.factory";
import { Collection } from "../../collection/collection";
import { CollectionService } from "../../collection/collection.service";
import { CollectionServiceImpl } from "./collection.service.impl";
import { CollectionImpl } from "./collection.impl";
import { HttpClient } from "@angular/common/http";
import { CollectionStore } from "~/app/collection/collection.store";
import { CollectionStoreImpl } from "./collection.store.impl";

export class CollectionFactoryImpl implements CollectionFactory {

    getCollectionService(http: HttpClient): CollectionService {
        return CollectionServiceImpl.getInstance(http);
    }

    getCollection(data: any): Collection {
        return CollectionImpl.getInstance(data);
    }

    getCollectionStore(): CollectionStore {
        return CollectionStoreImpl.getInstance();
    }

}