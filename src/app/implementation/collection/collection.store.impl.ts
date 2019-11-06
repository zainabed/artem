import { CollectionStore } from "~/app/collection/collection.store";
import { Collection } from "~/app/collection/collection";

export class CollectionStoreImpl implements CollectionStore {

    private static _collectionStore: CollectionStore = null;
    private _collections: Array<Collection> = null;

    static getInstance(): CollectionStore {
        if (this._collectionStore == null) {
            this._collectionStore = new this();
        }
        return this._collectionStore;
    }

    setCollections(collections: Collection[]): void {
        this._collections = collections;
    }

    getCollections(): Collection[] {
        return this._collections;
    }


}