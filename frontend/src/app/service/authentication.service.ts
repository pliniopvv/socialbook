import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API = `${environment.API}/usuario`;

  constructor(private http: HttpClient) { }

  async login(login: string, senha: string) {
    return await firstValueFrom(this.http.post<any>(this.API,{login,senha}));
  }

  async getUsuario() {
    return await firstValueFrom(this.http.get<Usuario>(this.API+`/me`));
  }

  async setToken(token: string) {
    localStorage.setItem('token',token);
  }

  async getToken() {
    return localStorage.getItem('token');
  }
}
