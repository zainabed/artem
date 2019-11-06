import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ApplicationContext } from "./application.context";
import { UserSecurity } from "./user/user.security";
import { UserFactory } from "./user/user.factory";
import { User } from "./user/user";
import { Userservice } from "./user/user.service";

//Third party modules
import { initializeOnAngular } from 'nativescript-image-cache';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
     
    constructor(private route: RouterExtensions){
        let userFactory = ApplicationContext.getUserFactory();
        let userSecurity : UserSecurity=  userFactory.getUserSecurity();
        let currentUser: User = userFactory.getUser({
            username: "zainabed179"
        });
        userSecurity.setCurrentUser(currentUser);

        //
        initializeOnAngular();
    }

    ngOnInit(): void {
    }

}
