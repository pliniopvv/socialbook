import { Feed } from 'src/app/model/feed';
import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
  }

  postar(feed: Feed) {
    this.feedService.create(feed);
  }

}
