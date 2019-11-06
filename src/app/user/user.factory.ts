import { User } from "./user";
import { Userservice } from "./user.service";
import { UserSecurity } from "./user.security";
import { HttpClient } from "@angular/common/http";

export abstract class UserFactory{
    abstract getUser(data: any): User;
    abstract getUserService(httpClient: HttpClient): Userservice;
    abstract getUserSecurity(): UserSecurity;
}