import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class SearchService {

    constructor(private http: HttpClient) {

    }
    search(key: string, page: number = 1) {
        let apiPath =`https://unsplash.com/napi/search?query=${key}&xp=&per_page=20&page=${page}`
        console.log(apiPath);
        return this.http.get(apiPath);
    }
} 