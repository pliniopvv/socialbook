import { debug } from 'src/app/utils/utils.tools';
import { Injectable } from '@angular/core';
import { Comments } from '../model/comments';
import { FeedService } from './feed.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comments[] = [];

  constructor(private feedService: FeedService) { }

  get(): Comments[] {
    return this.comments;
  }

  findByFeed(id: number): Comments[] {
    this.comments = this.feedService.find(id).comments;
    if (!this.comments)
      this.comments = [];
    return this.comments;
  }

  create(comments: Comments) {
    this.comments.push(comments);
    debug('Comments', this.comments);
  }
}
