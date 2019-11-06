import { Collection } from "./collection";

export abstract class CollectionStore{
    abstract setCollections(collections: Array<Collection>): void;
    abstract getCollections(): Array<Collection>;
}