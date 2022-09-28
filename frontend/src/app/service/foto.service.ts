import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foto } from '../model/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private API = `${environment.API}/foto`;

  constructor(private http: HttpClient) { }

  async create(id:number, form: FormData) {
    return await firstValueFrom(this.http.post<Foto>(this.API+`/${id}`, form));
  }

  async find(id: number) {
    return await firstValueFrom(this.http.get<Foto>(this.API+`/${id}`));
  }

  async delete(id: number) {
    return await firstValueFrom(this.http.delete<Foto>(this.API+`/${id}`));
  }
}
