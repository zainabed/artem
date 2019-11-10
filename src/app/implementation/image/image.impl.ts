import { Image } from "~/app/image/image";

export class ImageImple implements Image {


    id: string;
    _urls: any;
    alt_description: string;
    description: string;
    likes: any;
    _user: any;
    like: boolean;
    _links: any;
    width: number = 100;
    height: number = 100;

    constructor(copy: any) {
        Object.assign(this, copy);
    }

    set user(user: any) {
        if (!user || user == undefined) {
            user = {
                profile_image: {
                    medium: ""
                },
                location: "",
                username: ""
            };
        }

        this._user = user;
    }

    get user(): any {
        if (!this._user) {
            this.user = null;
        }
        return this._user;
    }

    set links(links: any) {
        if (!links || links == undefined) {
            links = {
                self: ""
            }
        };
        this._links = links;
    }

    get links(): any {
        if (!this._links) {
            this.links = null;
        }
        return this._links;
    }

    set urls(urls: any) {
        if (!urls || urls == undefined) {
            urls = {
                regular: ""
            }
        };
        this._urls = urls;
    }

    get urls(): any {
        if (!this._urls) {
            this.urls = null;
        }
        return this._urls;
    }

    getId(): string {
        return this.id;
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
        if (this.user && this.user.profile_image) {
            return this.user.profile_image.medium;
        }
        return null;
    }

    setLike(value: boolean): void {
        this.like = value;
    }

    getLike(): boolean {
        return this.like;
    }

    getInfoUrl(): string {
        return this.links.self;
    }

    getHeight(): number {
        return this.height;
    }

    getWidth(): number {
        return this.width;
    }

}