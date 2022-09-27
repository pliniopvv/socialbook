import { FeedService } from 'src/app/service/feed.service';
import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Comments } from 'src/app/model/comments';
import { CommentsService } from 'src/app/service/comments.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feed: Feed;
  comments: Comments[];
  usuario: Usuario;

  constructor(private feedService: FeedService,
  private commentService: CommentsService,
  private auth: AuthenticationService,
  private router: Router,
  private aRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    let id = this.aRoute.snapshot.params['id'];
    this.feed = await this.feedService.find(id);
    this.comments = (await (await this.commentService.findByFeed(this.feed.id))).comments;
    this.feed.comments = this.comments;
    this.usuario = await this.auth.getUsuario();
  }

  postar(comment: Comments) {
    this.commentService.create(comment);
  }

  voltar(ev: Event) {
    this.router.navigate(['home']);
  }

}
