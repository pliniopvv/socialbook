import { Usuario } from 'src/app/model/usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { Comments } from 'src/app/model/comments';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-feeddumb',
  templateUrl: './feeddumb.component.html',
  styleUrls: ['./feeddumb.component.scss']
})
export class FeeddumbComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() feed: Feed;
  @Input() comments: Comments[];
  post: string;

  URL_PICTURE: string;

  @Output() postar = new EventEmitter();
  @Output() voltar = new EventEmitter();

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.URL_PICTURE = environment.URL_UPLOAD;
  }

  private count = 1;
  onPostar() {
    if (this.post.length < 3)
      return;

    let comment = new Comments();
    comment.id = this.count++;
    comment.texto = this.post;
    this.post = '';
    comment.create_at = new Date();
    // @ts-ignore
    comment.feed = { id: this.feed.id };
    comment.usuario = this.auth.getUsuario();
    this.postar.emit(comment);
  }

  onVoltar() {
    this.voltar.emit();
  }
}
