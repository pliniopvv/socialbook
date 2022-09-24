import { debug } from 'src/app/utils/utils.tools';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { Usuario } from 'src/app/model/usuario';
import { FeedService } from 'src/app/service/feed.service';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-homedumb',
  templateUrl: './homedumb.component.html',
  styleUrls: ['./homedumb.component.scss']
})
export class HomedumbComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() postar = new EventEmitter();

  feeds: Feed[];
  post: string;

  constructor(private feedService: FeedService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.feeds = this.feedService.get();
  }

  private count = 1;
  onPostar() {
    if (this.post.length < 3)
      return;

    let feed = new Feed();
    feed.id = this.count++;
    feed.texto = this.post;
    this.post = '';
    feed.create_at = new Date();
    feed.usuario = this.usuarioService.usuarioLogado();
    this.postar.emit(feed);
  }

  openPost(id: number) {
    debug('Abrir postagem: ', id);
  }

}
