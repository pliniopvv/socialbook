import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/model/partido';
import { PartidosService } from 'src/app/service/partidos.service';
import { RegistroService } from 'src/app/service/registro.service';
import { debug } from 'src/app/utils/utils.tools';

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
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.partidos = this.partidoServices.get();
  }

  // selecionarPartido(partido: Partido) {
  //   this.router.navigate(['dadosCadastrais', { queryParams: partido }]);
  // }

  cadastrar(usuario: Usuario) {
    this.registroService.create(usuario);
    debug('Usuário cadastrado > ', usuario);
    this.router.navigate(['home']);
  }

  voltar(ev: Event) {
    this.router.navigate(['login']);
  }
}
