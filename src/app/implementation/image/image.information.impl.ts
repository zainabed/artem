import { ImageInformation } from "~/app/image/image.information";

export class ImageInformationImpl implements ImageInformation {

    constructor(data:any) {
        Object.assign(this, data);
    }
    getId(): string {
        throw new Error("Method not implemented.");
    }
    getCreatedAt(): Date {
        throw new Error("Method not implemented.");
    }
    getWidth(): number {
        throw new Error("Method not implemented.");
    }
    getHeight(): number {
        throw new Error("Method not implemented.");
    }
    getDescription(): string {
        throw new Error("Method not implemented.");
    }
    getImageUrl(): string {
        throw new Error("Method not implemented.");
    }
    getUser(): import("../../user/user").User {
        throw new Error("Method not implemented.");
    }
    getRelatedCollections(): import("../../collection/collection").Collection[] {
        throw new Error("Method not implemented.");
    }
    getImageMetadata(): import("../../image/image.metadata").ImageMetadata {
        throw new Error("Method not implemented.");
    }


}