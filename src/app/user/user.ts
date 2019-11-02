import { Image } from "../image/image";

export abstract class User {
    abstract getUsername(): string;
    abstract getName(): string;
    abstract getProfilePicture(): string;
    abstract getBio(): string;
    abstract getLocation(): string;
    abstract getImages(): Array<Image>;
}