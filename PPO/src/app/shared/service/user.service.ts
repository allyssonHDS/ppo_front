// import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })

// export class UserService {

//     apiUrl = 'http://localhost:3100/usuario';

//     httpOptions = {
//         headers: new HttpHeaders({
//             'Content-Type': 'application/json'
//         })
//     };

//     constructor(
//         private httpClient: HttpClient
//     ) { }

//     public getUser(): Observable<ResponsePageable> {
//         return this.httpClient.get<ResponsePageable>(this.apiUrl + user)
//     }

// }