import { Pagination } from './../components/home/model/pagination';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { Injectable } from '@angular/core';
import { Feed } from '../model/feed';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface payload {
  items: Feed[],
  meta: Pagination
}

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private API = `${environment.API}/feed`;
  private limit: number = 10;

  constructor(private http: HttpClient) { }

  async create(feed: Feed) {
    return await firstValueFrom(this.http.post<Feed>(this.API, feed));
  }
  async get(pagination: Pagination = null) {
    if (pagination == null)
      return await firstValueFrom(this.http.get<payload>(this.API+`?limit=${this.limit}`));
    else
      return await firstValueFrom(this.http.get<payload>(this.API+`?page=${pagination.currentPage}&limit=${this.limit}`));
  }
  async find(id: number) {
    return await firstValueFrom(this.http.get<Feed>(this.API+`/${id}`));
  }
  async update(id: number, feed: Feed) {
    return await firstValueFrom(this.http.patch<Feed>(this.API+`/${id}`, feed));
  }
  async delete(id: number) {
    return await (this.http.delete<Feed>(this.API+`/${id}`));
  }

}
