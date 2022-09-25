import { FeedService } from 'src/app/service/feed.service';
import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { Comments } from 'src/app/model/comments';
import { CommentsService } from 'src/app/service/comments.service';

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
  private usuarioService: UsuariosService,
  private router: Router,
  private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.aRoute.snapshot.params['id'];
    this.feed = this.feedService.find(id);
    this.comments = this.commentService.findByFeed(this.feed.id);
    this.feed.comments = this.comments;
    this.usuario = this.usuarioService.usuarioLogado();
  }

  postar(comment: Comments) {
    this.commentService.create(comment);
  }

  voltar(ev: Event) {
    this.router.navigate(['home']);
  }

}
