export abstract class ImageMetadata {
    abstract getDevice(): string;
    abstract getDeviceModel(): string;
    abstract getShutterSpeed(): string;
    abstract getFocalLength(): number;
    abstract getAperture(): number;
    abstract getIso(): number;
} 