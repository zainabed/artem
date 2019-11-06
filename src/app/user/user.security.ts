import { User } from "./user";

export abstract class UserSecurity {
    abstract getCurrentUser(): User;
    abstract isLoggedUser(user: User): boolean;
    abstract setCurrentUser(user: User): void;
}