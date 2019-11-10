import { User } from "./user";
import { Observable } from "rxjs";
import { Image } from "../image/image";

export abstract class Userservice {
    abstract getUser(username: string): Observable<User>;
    abstract getPhotos(username: string, page: number): Observable<Array<Image>>;
    abstract getLikePhotos(username: string, page: number): Observable<Array<Image>>;
    abstract search(query: string, page: number): Observable<Array<User>>;
} 