import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestCreat, ResponseCreat } from "./registrar.model";
@Injectable({
    providedIn: 'root'
})
export class UserService {

    private url = "http://localhot:3100/usuario";

    constructor(private http: HttpClient) { }

    registrar(request: RequestCreat): Observable<ResponseCreat> {
        return this.http.get<ResponseCreat>(this.url, request);

    }
}