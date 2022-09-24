import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios = [{
    id: 0,
    login: "gangss2@hotmail.com",
    nome: "Plínio Victor",
    senha: "12345",
    partido: {
      id: 0,
      nome: "Partido da Social Democracia Brasileira",
      numero: 45,
      sigla: "PSDB",
      bandeira: 'psdb.png'
    }
  }] as Usuario[];

  constructor() { }

  create(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  get() {
    return this.usuarios;
  }

  delete(id: number) {
    this.usuarios = this.usuarios.slice(
      this.usuarios.indexOf(
        this.usuarios.find(u => u.id == id)
      ),
        1
    );
  }

}
