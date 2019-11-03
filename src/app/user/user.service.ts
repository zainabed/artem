import { User } from "./user";
import { Observable } from "rxjs";
import { Image } from "../image/image";

export abstract class Userservice {
    abstract getUser(username: string): Observable<User>;
    abstract getPhotos(username: string): Observable<Array<Image>>;
} 