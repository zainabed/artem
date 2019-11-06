import { CollectionFactory } from "../../collection/collection.factory";
import { Collection } from "../../collection/collection";
import { CollectionService } from "../../collection/collection.service";
import { CollectionServiceImpl } from "./collection.service.impl";
import { CollectionImpl } from "./collection.impl";

export class CollectionFactoryImpl implements CollectionFactory {


    getCollectionService(): CollectionService {
        return new CollectionServiceImpl();
    }

    getCollection(data: any): Collection {
        throw new CollectionImpl(data);
    }


}