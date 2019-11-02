export abstract class Image {
    abstract getThumbnail(): string;
    abstract getTitle(): string;
    abstract getDescription(): string;
    abstract getViewCount(): number;
    abstract getLikeCount(): number;
    abstract getOriginal(): string;
    abstract getLocation(): string;
    abstract getUsername(): string;
    abstract getProfilePicture(): string;
    abstract setLike(value: boolean): void;
    abstract getLike(): boolean;
}