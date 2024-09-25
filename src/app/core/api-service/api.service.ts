import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "./api.urls";
import { RequestType } from "./requesType";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    constructor(
        private httpClient: HttpClient,
      ) { }

      get<Entity>(baseUrl: string, urlApi: ApiUrls, requestType: RequestType): Observable<HttpResponse<Entity>> {
        
        return this.httpClient.get<Entity>(`${baseUrl}${urlApi}`, {
          observe: 'response',
          
        });
      }
    
      post<Entity>(baseUrl: string, urlApi: ApiUrls, body: any, requestType: RequestType): Observable<HttpResponse<Entity>> {
        
        return this.httpClient.post<Entity>(`${baseUrl}${urlApi}`, body, {
          observe: 'response',
          
        });

        
      }
      getHeaders(requestType: RequestType) {
        switch (requestType) {
          case RequestType.GET:
            return;
          case RequestType.POST:
            return;
          case RequestType.PUT:
            return;
          case RequestType.DELETE:
            return;
        }
      }
  }