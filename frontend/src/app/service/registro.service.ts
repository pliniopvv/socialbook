import { Partido } from 'src/app/model/partido';
import { UsuariosService } from './usuarios.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { PartidosService } from './partidos.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private usuarioService: UsuariosService,
    private partidoService: PartidosService
    ) { }


  create(usuario: Usuario) {
    let partido = this.partidoService.find(usuario.partido.id) as Partido;
    if (partido) {
      this.usuarioService.create(usuario);
    }
  }

  delete(usuario: Usuario) {
    this.usuarioService.delete(usuario.id);
  }

}
