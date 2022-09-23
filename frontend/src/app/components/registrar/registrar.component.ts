import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/model/partido';
import { PartidosService } from 'src/app/service/partidos.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  partidos: Partido[];

  constructor(private partidoServices: PartidosService, private router: Router) { }

  ngOnInit(): void {
    this.partidos = this.partidoServices.get();
  }

  selecionarPartido(partido: Partido) {
    this.router.navigate(['dadosCadastrais', { queryParams: partido }]);
  }

  voltar(ev: Event) {
    this.router.navigate(['login'])
  }
}
