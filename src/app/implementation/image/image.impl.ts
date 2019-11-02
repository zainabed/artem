import { Image } from "~/app/image/image";

export class ImageImple implements Image {

    urls: any;
    alt_description: string;
    description: string;
    likes: any;
    user: any;
    like: boolean;

    constructor(copy: any) {
        Object.assign(this, copy);
    }

    getThumbnail(): string {
        return this.urls.raw + "&w=140&dpi=1&h=140&fit=crop";
    }

    getTitle(): string {
        return this.alt_description;
    }

    getDescription(): string {
        return this.description;
    }

    getViewCount(): number {
        throw new Error("Method not implemented.");
    }

    getLikeCount(): number {
        return this.likes;
    }

    getOriginal(): string {
        return this.urls.regular;
    }

    getLocation(): string {
        return this.user.location;
    }
    getUsername(): string {
        return this.user.username;
    }
    getProfilePicture(): string {
        return this.user.profile_image.medium;
    }

    setLike(value: boolean): void {
        this.like = value;
    }
    getLike(): boolean {
        return this.like;
    }
}