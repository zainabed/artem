import { Userservice } from "~/app/user/user.service";
import { User } from "~/app/user/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
import { ImageImple } from "../image/image.impl";

export class UserServiceImpl implements Userservice {

    constructor(private http: HttpClient) {

    }

    getUserApi(): string {
        return "https://api.unsplash.com/users/";
    }

    getUser(username: string): Observable<User> {
        return this.http.get<any>(this.getUserApi() + username).pipe(
            map(data => {
                data.photos.map(photo => new ImageImple(photo));
                return data;
            })
        );
    }

}