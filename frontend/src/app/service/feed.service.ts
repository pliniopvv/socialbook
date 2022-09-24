import { debug } from 'src/app/utils/utils.tools';
import { Usuario } from 'src/app/model/usuario';
import { Injectable } from '@angular/core';
import { Feed } from '../model/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private usuarioLogado = {
    id: 0,
    login: "gangss2@hotmail.com",
    nome: "Plínio Victor",
    apelido: "Gangss",
    senha: "12345",
    partido: {
      id: 0,
      nome: "Partido da Social Democracia Brasileira",
      numero: 45,
      sigla: "PSDB",
      bandeira: 'psdb.png'
    }
  } as Usuario;
  private feed = [
    {
      id: 0,
      usuario: this.usuarioLogado,
      texto: "Deu certo!",
      create_at: new Date()
    }
  ] as Feed[];

  constructor() { }

  get() {
    return this.feed;
  }

  create(feed: Feed) {
    this.feed.push(feed);
    debug(`Postado com sucesso: `, feed);
  }

}
