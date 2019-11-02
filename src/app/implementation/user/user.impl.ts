import { User } from "~/app/user/user";
import { Image } from "~/app/image/image";

export class UserImpl implements User {

    private username: string;
    private name: string;
    private bio: string;
    private location: string;
    private profile_image: any;
    private images: Array<Image>;

    constructor(data: any) {
        Object.assign(this, data);
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
        return this.images;
    }


}