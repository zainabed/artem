import { HttpClient } from "@angular/common/http";

export abstract class HttpFactory {
   
  abstract getHttpClient(): HttpClient;

}