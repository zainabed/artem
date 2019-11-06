import { ImageMetadata } from "~/app/image/image.metadata";

export class ImageMetadataImpl implements ImageMetadata {

    constructor(data: any) {
        Object.assign(this, data);
    }

    getDevice(): string {
        throw new Error("Method not implemented.");
    }
    getDeviceModel(): string {
        throw new Error("Method not implemented.");
    }
    getShutterSpeed(): string {
        throw new Error("Method not implemented.");
    }
    getFocalLength(): number {
        throw new Error("Method not implemented.");
    }
    getAperture(): number {
        throw new Error("Method not implemented.");
    }
    getIso(): number {
        throw new Error("Method not implemented.");
    }


}