import { User } from "~/app/user/user";
import { Image } from "~/app/image/image";
import { ImageImple } from "../image/image.impl";
import { Collection } from "~/app/collection/collection";

export class UserImpl implements User {

    private username: string;
    private name: string;
    private bio: string;
    private location: string;
    private profile_image: any;
    private _images: Array<Image>;
    private total_collections: number;
    private total_likes: number;
    private total_photos: number;
    private collections: Array<Collection>;

    constructor(data: any) {
        this.collections = [];
        Object.assign(this, data);
        this.images = data.photos;

    }

    set images(data: Array<any>) {
        this._images = data.map(image => new ImageImple(image));
        console.log(this._images);
    }

    setImages(images: Image[]): void {
        this._images = images;
    }

    getUsername(): string {
        return this.username;
    }

    getName(): string {
        return this.name;
    }

    getProfilePicture(): string {
        return this.profile_image.medium;
    }

    getBio(): string {
        return this.bio;
    }

    getLocation(): string {
        return this.location;
    }

    getImages(): Array<Image> {
        return this._images;
    }

    getPhotoCount(): number {
        return this.total_photos;
    }

    getLikeCount(): number {
        return this.total_likes;
    }

    getCollectionCount(): number {
        return this.total_collections;
    }

    setCollection(collections: Collection[]): void {
        this.collections = collections;
    }

    getCollection(): Collection[] {
        return this.collections;
    }

}