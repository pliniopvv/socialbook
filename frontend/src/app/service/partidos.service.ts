import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partido } from '../model/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  private API = `${environment.API}/partido`;

  constructor(private http: HttpClient) { }

  async create(partido: Partido) {
    return await firstValueFrom(this.http.post<Partido>(this.API, partido));
  }
  async get() {
    return await firstValueFrom(this.http.get<Partido[]>(this.API));
  }
  async find(id: number) {
    return await firstValueFrom(this.http.get<Partido>(this.API+`/${id}`));
  }
  async update(id: number, partido: Partido) {
    return await firstValueFrom(this.http.patch<Partido>(this.API+`/${id}`, partido));
  }
  async delete(id: number) {
    return await firstValueFrom(this.http.delete<Partido>(this.API+`/${id}`));
  }

}
