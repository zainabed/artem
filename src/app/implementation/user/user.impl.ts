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
    private _likePhotos: Array<Image>;
    private total_collections: number;
    private total_likes: number;
    private total_photos: number;
    private collections: Array<Collection>;
    private followers_count: number;
    private following_count: number;

    constructor(data: any) {
        this.collections = null;
        Object.assign(this, data);
        if (data.photos) {
            this.images = data.photos;
        }
    }

    static getUser(data: any): User {
        return new UserImpl(data);
    }

    set images(data: Array<any>) {
        if (data == null) {
            return;
        }
        this._images = data.map(image => new ImageImple(image));
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
        if (!this.profile_image) return;
        return this.profile_image.large;
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

    getFollowersCount(): number {
        return this.followers_count;
    }

    getFollowingCount(): number {
        return this.following_count;
    }

    setLikePhotos(images: Image[]): void {
        this._likePhotos = images;
    }
    getLikePhotos(): Image[] {
        return this._likePhotos;
    }

}