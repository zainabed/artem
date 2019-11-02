import { Image } from "./image";
import { Observable } from "rxjs";

export abstract class ImageService {
    abstract search(key: string, page: number): Observable<Array<Image>>;
    abstract getRandomImages(page:number): Observable<Array<Image>>
    abstract upload(data: Blob): void;
    abstract setImage(image: Image): void;
    abstract getImage(): Image;
}