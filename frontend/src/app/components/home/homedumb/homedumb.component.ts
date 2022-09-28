import { Router } from '@angular/router';
import { debug } from 'src/app/utils/utils.tools';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feed } from 'src/app/model/feed';
import { Usuario } from 'src/app/model/usuario';
import { FeedService } from 'src/app/service/feed.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homedumb',
  templateUrl: './homedumb.component.html',
  styleUrls: ['./homedumb.component.scss']
})
export class HomedumbComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() postar = new EventEmitter();
  @Input() feeds: Feed[];

  post: string = "";

  URL_PICTURE: string;

  constructor(
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.URL_PICTURE = environment.URL_UPLOAD;
    if (!this.usuario) {
      this.usuario = this.auth.getUsuario();
      if (!this.usuario)
        this.router.navigate(['login']);
    }
  }

  async onPostar() {
    if (this.post?.length < 3)
      return;

    let feed = new Feed();
    feed.texto = this.post;
    this.post = '';
    feed.create_at = new Date();
    feed.usuario = this.auth.getUsuario();
    debug('postado > ',feed);
    this.postar.emit(feed);
  }

  openPost(id: number) {
    this.router.navigate([`feed/${id}`])
    debug('Abrir postagem: ', id);
  }

}
