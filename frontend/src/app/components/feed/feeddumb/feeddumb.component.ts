import { Usuario } from 'src/app/model/usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { Comments } from 'src/app/model/comments';

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

  @Output() postar = new EventEmitter();
  @Output() voltar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.comments = this.feed.comments;
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
    // comment.parent = this.comment;
    comment.feedId = this.feed.id;
    comment.usuario = this.usuario;
    this.postar.emit(comment);
  }

  onVoltar() {
    this.voltar.emit();
  }
}
