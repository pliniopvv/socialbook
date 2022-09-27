import { Feed } from 'src/app/model/feed';
import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  feeds: Feed[];

  constructor(private feedService: FeedService) { }

  async ngOnInit(): Promise<void> {
    this.feedService.get().then(feeds => {
      this.feeds = feeds;
    });
  }

  async postar(feed: Feed) {
    let _feed = await this.feedService.create(feed);
    this.feeds = [_feed, ...this.feeds];
  }

}
