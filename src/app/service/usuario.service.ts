import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  SERVER_URL = 'http://localhost:3100/usuario';

  constructor(private http: HttpClient) { }
  public getUsuarios() {
    return this.http.get(this.SERVER_URL);
  }
}
