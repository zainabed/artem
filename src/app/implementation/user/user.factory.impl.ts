import { UserFactory } from "../../user/user.factory";
import { User } from "../../user/user";
import { Userservice } from "../../user/user.service";
import { UserImpl } from "./user.impl";
import { UserServiceImpl } from "./user.service.impl";
import { UserSecurity } from "~/app/user/user.security";
import { UserSecurityImpl } from "./user.security.impl";
import { HttpClient } from "@angular/common/http";


export class UserFactoryImpl implements UserFactory {

    getUser(data: any): User {
        return UserImpl.getUser(data);
    }

    getUserService(httpClient: HttpClient): Userservice {
        return UserServiceImpl.getInstance(httpClient);
    }

    getUserSecurity(): UserSecurity {
        return UserSecurityImpl.getInstance();
    }

}