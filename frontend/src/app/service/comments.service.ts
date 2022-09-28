import { Injectable } from '@angular/core';
import { Comments } from '../model/comments';
import { FeedService } from './feed.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';
import { firstValueFrom } from 'rxjs';
import { Feed } from '../model/feed';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private API = `${environment.API}/comments`;

  constructor(private http: HttpClient, private feedService: FeedService) { }

  async create(comments: Comments) {
    return await firstValueFrom(this.http.post<Comments>(this.API, comments));
  }
  async get() {
    return await firstValueFrom(this.http.get<Comments[]>(this.API));
  }
  async find(id: number) {
    return await firstValueFrom(this.http.get<Comments>(this.API+`/${id}`));
  }
  async findByFeed(id: number) {
    return await firstValueFrom(this.http.get<Comments[]>(this.API+`/wd/${id}`));
  }
  async update(id: number, comments: Comments) {
    return await firstValueFrom(this.http.patch<Comments>(this.API+`/${id}`, comments));
  }
  async delete(id: number) {
    return await firstValueFrom(this.http.delete<Comments>(this.API+`/${id}`));
  }

}
