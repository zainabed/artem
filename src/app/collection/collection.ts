import { Image } from "../image/image";

export abstract class Collection {
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

    abstract getId(): number;
    abstract getTitle(): string;
    abstract getDescription(): string;
    abstract getCreatedAt(): Date;
    abstract getUpdatedAt(): Date;
    abstract getPhotoCount(): number;
    abstract getCoverPhoto(): Image;
}
