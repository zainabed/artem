import { User } from "./user";
import { Observable } from "rxjs";

export abstract class Userservice {
    abstract getUser(username: string): Observable<User>;
} 