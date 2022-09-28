import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/model/partido';
import { PartidosService } from 'src/app/service/partidos.service';
import { RegistroService } from 'src/app/service/registro.service';
import { debug } from 'src/app/utils/utils.tools';
import { FotoService } from 'src/app/service/foto.service';
import { Usuario } from 'src/app/model/usuario';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  partidos: Partido[];

  constructor(
    private partidoServices: PartidosService,
    private registroService: RegistroService,
    private fotoService: FotoService,
    private auth: AuthenticationService,
    private router: Router,
    ) { }

  async ngOnInit(): Promise<void> {
    this.partidos = await this.partidoServices.get();
  }


  async cadastrar(obj: any[]) {
    let usuario = obj[0] as Usuario;
    let fotox = obj[1] as FormData;

    debug(fotox);

    let usr = await this.registroService.create(usuario);
    let foto = await this.fotoService.create(usr.id, fotox);

    debug('foto > ', foto);

    if (usuario.foto != undefined)
        usuario.foto.push(foto);
    else {
        usuario.foto = [];
        usuario.foto.push(foto);
    }

    this.auth.setUsuario(usr);

    debug('Usuário cadastrado > ', usr);
    this.router.navigate(['home']);
  }

  voltar(ev: Event) {
    this.router.navigate(['login']);
  }

}
