import { UserFactory } from "../../user/user.factory";
import { User } from "../../user/user";
import { Userservice } from "../../user/user.service";
import { UserImpl } from "./user.impl";
import { UserServiceImpl } from "./user.service.impl";
import { HttpClient } from "@angular/common/http";
import { HttpFactory } from "../../util/http/http.factory";
import { ApplicationContext } from "../../application.context";


export class UserFactoryImpl implements UserFactory {
    private http: HttpClient;
    
    constructor() {
        let httpFactory: HttpFactory = ApplicationContext.getHttpFactory();
        this.http = httpFactory.getHttpClient();
    }

    getUser(): User {
        return new UserImpl({});
    }

    getUserService(): Userservice {
        return new UserServiceImpl(this.http);
    }


}