import { User } from "./user";
import { Userservice } from "./user.service";

export abstract class UserFactory{
    abstract getUser(): User;
    abstract getUserService(): Userservice;
    
}