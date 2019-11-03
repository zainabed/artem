import { Image } from "../image/image";

export abstract class User {
    abstract getUsername(): string;
    abstract getName(): string;
    abstract getProfilePicture(): string;
    abstract getBio(): string;
    abstract getLocation(): string;
    abstract setImages(images: Array<Image>): void;
    abstract getImages(): Array<Image>;
    abstract getPhotoCount(): number;
    abstract getLikeCount(): number;
    abstract getCollectionCount(): number;
}