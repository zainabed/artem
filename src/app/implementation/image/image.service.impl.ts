import { ImageService } from "~/app/image/image.service";
import { Image } from "~/app/image/image";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ImageImple } from "./image.impl";
import { map } from 'rxjs/operators';
import { ImageInformation } from "~/app/image/image.information";
import { ImageInformationImpl } from "./image.information.impl";
import { ApplicationContext } from "~/app/application.context";
import { HttpFactory } from "~/app/util/http/http.factory";
import { ImageFactory } from "~/app/image/image.factory";

export class ImageServiceImpl implements ImageService {


    private http: HttpClient
    private imageFactory: ImageFactory;

    constructor() {
        this.imageFactory = ApplicationContext.getImageFactory();
        let httpFactory: HttpFactory = ApplicationContext.getHttpFactory();
        this.http = httpFactory.getHttpClient();
    }

    getSearchApiPath(key: string, page: number): string {
        return `https://unsplash.com/napi/search?query=${key}&xp=&per_page=20&page=${page}`;
    }

    search(key: string, page: number): Observable<Array<Image>> {
        return this.http.get<any>(this.getSearchApiPath(key, page)).pipe(
            map(records => {
                return records.photos.results.map((data: any) => this.imageFactory.getImage(data))
            })
        )
    }

    getPhotoApiPath(): string {
        return `https://api.unsplash.com/photos/`
    }

    getImageInformation(id: string): Observable<ImageInformation> {
        return this.http.get<any>(this.getPhotoApiPath() + id)
            .pipe(
                map(data => new ImageInformationImpl(data))
            );
    }

    upload(data: Blob): void {
        throw new Error("Method not implemented.");
    }

    getRandomImages(page: number): Observable<Image[]> {
        throw new Error("Method not implemented.");
    }

 

}