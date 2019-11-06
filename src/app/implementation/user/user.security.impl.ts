import { UserSecurity } from "~/app/user/user.security";
import { User } from "~/app/user/user";

export class UserSecurityImpl implements UserSecurity {
    private _currentUser: User;

    private static _userSecurity: UserSecurity = null;
    
    static getInstance(): UserSecurity {

        if (this._userSecurity == null) {
            this._userSecurity = new UserSecurityImpl();
        }
        return this._userSecurity;
    }

    setCurrentUser(user: User): void {
        this._currentUser = user;
    }

    getCurrentUser(): User {
        return this._currentUser;
    }


    isLoggedUser(user: User): boolean {
        return this._currentUser.getUsername() == user.getUsername();
    }


}