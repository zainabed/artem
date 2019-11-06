import { Image } from "../../image/image";
import { Collection } from "../../collection/collection";
import { ImageImple } from "../image/image.impl";

export class CollectionImpl implements Collection {

    id: number;
    title: string;
    description: string;
    published_at: Date;
    updated_at: Date;
    curated: boolean;
    featured: boolean;
    total_photos: number;
    private: boolean;
    share_key: string;
    tags: any[];
    user: any;
    cover_photo: any;
    preview_photos: any[];

    constructor(data: any) {
        Object.assign(this, data);
    }

    static getInstance(data: any) {
        return new this(data);
    }

    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getDescription(): string {
        return this.description;
    }
    getCreatedAt(): Date {
        return this.published_at;
    }
    getUpdatedAt(): Date {
        return this.updated_at;
    }
    getPhotoCount(): number {
        return this.total_photos;
    }
    getCoverPhoto(): Image {
        return new ImageImple(this.cover_photo);
    }
}
