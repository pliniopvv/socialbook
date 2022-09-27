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
  private usuario: Usuario;

  constructor(private http: HttpClient) { }

  async verify(login: string, senha: string) {
    return await firstValueFrom(this.http.post<any>(this.API+'/verify',{login,senha}));
  }

  async getUsuario() {
    // return await firstValueFrom(this.http.get<Usuario>(this.API+`/me`));
    return this.usuario;
  }

  async setUsuario(usuario: Usuario) {
    this.usuario = usuario;
  }

  async setToken(token: string) {
    localStorage.setItem('token',token);
  }

  async getToken() {
    return localStorage.getItem('token');
  }
}
