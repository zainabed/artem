import { Userservice } from "~/app/user/user.service";
import { User } from "~/app/user/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { ImageImple } from "../image/image.impl";
import { UserImpl } from "./user.impl";
import { Image } from "~/app/image/image";
import { HttpFactory } from "~/app/util/http/http.factory";
import { ApplicationContext } from "~/app/application.context";

export class UserServiceImpl implements Userservice {

    private http: HttpClient;

    private static _userservice: Userservice = null;

    constructor(httpClient: HttpClient) {
        //let httpFactory: HttpFactory = ApplicationContext.getHttpFactory();
        this.http = httpClient;
    }

    static getInstance(httpClient: HttpClient): Userservice {

        if (this._userservice == null) {
            this._userservice = new this(httpClient);
        }
        return this._userservice;
    }

    getUserApi(username: string): string {
        console.log(`https://api.unsplash.com/users/${username}`);
        return `https://api.unsplash.com/users/${username}`;
    }

    getUser(username: string): Observable<User> {
        return this.http.get<any>(this.getUserApi(username)).pipe(
            map(data => UserImpl.getUser(data))
        );
    }

    getPhotos(username: string, page: number = 0): Observable<Image[]> {
        console.log(this.getUserApi(username) + "/photos?page=" + page);
        return this.http.get<Array<any>>(this.getUserApi(username) + "/photos?page=" + page).pipe(
            map(records => records.map(image => new ImageImple(image)))
        );
    }

}