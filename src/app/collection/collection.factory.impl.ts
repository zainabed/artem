import { CollectionFactory } from "./collection.factory";
import { Collection } from "./collection";
import { CollectionService } from "./collection.service";
import { CollectionServiceImpl } from "./collection.service.impl";
import { HttpClient } from "@angular/common/http";

export class CollectionFactoryImpl implements CollectionFactory {

    constructor(private http: HttpClient) { }

    getCollectionService(): CollectionService {
        return new CollectionServiceImpl(this.http);
    }

    getCollection(data: any): Collection {
        throw new Error("Method not implemented.");
    }


}