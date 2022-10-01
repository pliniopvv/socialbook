import { debug } from 'src/app/utils/utils.tools';
import { Feed } from 'src/app/model/feed';
import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';
import { Pagination } from './model/pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feeds: Feed[];
  paginacao: Pagination;

  constructor(private feedService: FeedService) { }

  async ngOnInit(): Promise<void> {
    this.feedService.get().then(payload => {
      debug("payload >",payload);
      this.feeds = payload.items;
      this.paginacao = payload.meta;
    });
  }

  async postar(feed: Feed) {
    let _feed = await this.feedService.create(feed);
    this.feeds = [_feed, ...this.feeds];
  }

  setPage(payload: any) {
    debug("setPage >", payload.page);
    this.paginacao.currentPage = payload.page;
    this.feedService.get(this.paginacao).then(payload => {
      debug("payload >",payload);
      this.feeds = payload.items;
      this.paginacao = payload.meta;
    });
  }

}
