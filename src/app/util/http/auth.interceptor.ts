import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            headers: req.headers.set("Authorization", "Client-ID c160a094b6cba0cebabadee9661b0eb80abbf8aebf5a0cb2e332afa7071bb03f")
                .set("Accept-Version", "v1")

        });

        return next.handle(request);
    }

}