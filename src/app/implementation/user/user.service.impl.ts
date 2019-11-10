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
import { UserFactory } from "~/app/user/user.factory";

export class UserServiceImpl implements Userservice {

    private http: HttpClient;
    private static _userservice: Userservice = null;
    private userFactory: UserFactory;

    constructor(httpClient: HttpClient) {
        //let httpFactory: HttpFactory = ApplicationContext.getHttpFactory();
        this.http = httpClient;
        this.userFactory = ApplicationContext.getUserFactory();

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

    getUserSearchApi(query: string, page: number = 1) {
        return `https://api.unsplash.com/search/users?page=${page}&query=${query}`;
    }

    getUser(username: string): Observable<User> {
        return this.http.get<any>(this.getUserApi(username)).pipe(
            map(data => UserImpl.getUser(data))
        );
    }

    getPhotos(username: string, page: number = 0): Observable<Image[]> {
        let apiUrl: string = this.getUserApi(username) + "/photos?page=" + page;
        return this.executePhotoApi(apiUrl);
    }

    getLikePhotos(username: string, page: number): Observable<Image[]> {
        let apiUrl: string = this.getUserApi(username) + "/likes?page=" + page;
        return this.executePhotoApi(apiUrl);
    }

    search(query: string, page: number): Observable<User[]> {
        return this.http.get<any>(this.getUserSearchApi(query, page))
            .pipe((data: any) => data.results.map((user: any) => this.userFactory.getUser(user)));
    }


    executePhotoApi(apiUrl: string): Observable<Array<Image>> {
        return this.http.get<Array<any>>(apiUrl).pipe(
            map(records => records.map(image => new ImageImple(image)))
        );
    }
}