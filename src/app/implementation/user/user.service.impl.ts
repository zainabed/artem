import { Userservice } from "~/app/user/user.service";
import { User } from "~/app/user/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { ImageImple } from "../image/image.impl";
import { UserImpl } from "./user.impl";
import { Image } from "~/app/image/image";

export class UserServiceImpl implements Userservice {


    constructor(private http: HttpClient) {

    }

    getUserApi(username: string): string {
        return `https://api.unsplash.com/users/${username}`;
    }

    getUser(username: string): Observable<User> {
        return this.http.get<any>(this.getUserApi(username)).pipe(
            map(data => new UserImpl(data))
        );
    }

    getPhotos(username: string): Observable<Image[]> {
        return this.http.get<Array<any>>(this.getUserApi(username) + "/photos").pipe(
            map(records => records.map(image => new ImageImple(image)))
        );
    }

}