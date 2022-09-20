import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestCreat, ResponseCreate } from "./registrar.model";
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = "http://localhot:3100/usuario";

    constructor(private http: HttpClient) { }

    registrar(request: RequestCreat): Observable<ResponseCreate> {
        return this.http.get<ResponseCreate>(this.url, request);

    }
}