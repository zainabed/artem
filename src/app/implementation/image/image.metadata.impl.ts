import { ImageMetadata } from "~/app/image/image.metadata";

export class ImageMetadataImpl implements ImageMetadata {

    make: string;
    model: string;
    exposure_time: string;
    focal_length: number;
    aperture: number;
    iso: number;

    constructor(data: any) {
        Object.assign(this, data);
    }

    getDevice(): string {
        return this.make;
    }
    getDeviceModel(): string {
        return this.model;
    }
    getShutterSpeed(): string {
        return this.exposure_time;
    }
    getFocalLength(): number {
        return this.focal_length;
    }
    getAperture(): number {
        return this.aperture;
    }
    getIso(): number {
        return this.iso;
    }


}