import { HttpFactory } from "~/app/util/http/http.factory";
import { HttpClient, HttpXhrBackend } from "@angular/common/http";

export class HttpFactoryImpl implements HttpFactory {

    getHttpClient(): HttpClient {
        return new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
    }

}