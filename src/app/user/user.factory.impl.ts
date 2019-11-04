import { UserFactory } from "./user.factory";
import { User } from "./user";
import { Userservice } from "./user.service";
import { UserImpl } from "../implementation/user/user.impl";
import { UserServiceImpl } from "../implementation/user/user.service.impl";
import { HttpClient } from "@angular/common/http";


export class UserFactoryImpl implements UserFactory {

    constructor(private http: HttpClient) { }

    getUser(): User {
        return new UserImpl({});
    }

    getUserService(): Userservice {
        return new UserServiceImpl(this.http);
    }


}