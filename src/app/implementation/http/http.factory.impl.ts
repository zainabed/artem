import { HttpFactory } from "~/app/util/http/http.factory";
import { HttpClient, HttpXhrBackend } from "@angular/common/http";

export class HttpFactoryImpl implements HttpFactory {
    private _httpClient: HttpClient = null;
    getHttpClient(): HttpClient {
        if(this._httpClient == null) {
            this._httpClient = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
            
        }
        return this._httpClient; 
    }

}