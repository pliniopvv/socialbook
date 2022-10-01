import { Partido } from 'src/app/model/partido';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private API = `${environment.API}/usuario`;

  constructor(private http: HttpClient) { }

  async create(usuario: Usuario) {
    return await firstValueFrom(this.http.post<Usuario>(this.API, usuario));
  }
  async get() {
    return await firstValueFrom(this.http.get<Usuario>(this.API));
  }
  async find(id: number) {
    return await firstValueFrom(this.http.get<Usuario>(this.API+`/${id}`));
  }
  async update(id: number, usuario: Usuario) {
    return await firstValueFrom(this.http.patch<Usuario>(this.API+`/${id}`, usuario));
  }
  async delete(id: number) {
    return await firstValueFrom(this.http.delete<Usuario>(this.API+`/${id}`));
  }

  async me() {
    return await firstValueFrom(this.http.get<Usuario>(this.API+'/me'));
  }

}
