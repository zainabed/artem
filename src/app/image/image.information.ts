import { User } from "../user/user";
import { Collection } from "../collection/collection";
import { ImageMetadata } from "./image.metadata";

export abstract class ImageInformation {
    abstract getId(): string;
    abstract getCreatedAt(): Date;
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract getDescription(): string;
    abstract getImageUrl(): string;
    abstract getUser(): User;
    //abstract getLocation(): Location;
    //abstract getTags(): Array<Tag>;
    abstract getRelatedCollections(): Array<Collection>
    abstract getImageMetadata(): ImageMetadata
    ;
}