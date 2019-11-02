import { ImageService } from "~/app/image/image.service";
import { Image } from "~/app/image/image";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ImageImple } from "./image.impl";
import { map } from 'rxjs/operators';

export class ImageServiceImpl implements ImageService {

    _image: Image;

    setImage(image: Image): void {
        this._image = image;
    }

    getImage(): Image {
        return this._image;
    }

    constructor(private http: HttpClient) { }

    getSearchApiPath(key: string, page: number): string {
        return `https://unsplash.com/napi/search?query=${key}&xp=&per_page=20&page=${page}`;
    }

    search(key: string, page: number): Observable<Array<Image>> {
        return this.http.get<any>(this.getSearchApiPath(key, page)).pipe(
            map(records => {
                return records.photos.results.map(data => new ImageImple(data) as Image)
            })
        )
    }

    upload(data: Blob): void {
        throw new Error("Method not implemented.");
    }

    getRandomImages(page: number): Observable<Image[]> {
        throw new Error("Method not implemented.");
    }

}