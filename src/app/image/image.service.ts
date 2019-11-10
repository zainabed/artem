import { Image } from "./image";
import { Observable } from "rxjs";
import { ImageInformation } from "./image.information";

export abstract class ImageService {
    abstract search(query: string, page: number): Observable<Array<Image>>;
    abstract getRandomImages(page: number): Observable<Array<Image>>
    abstract getImageInformation(id: string): Observable<ImageInformation>;
    abstract upload(data: Blob): void;
   
}