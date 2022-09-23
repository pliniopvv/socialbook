import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Partido } from 'src/app/model/partido';
import { PartidosService } from 'src/app/service/partidos.service';

@Component({
  selector: 'app-registrardumb',
  templateUrl: './registrardumb.component.html',
  styleUrls: ['./registrardumb.component.scss']
})
export class RegistrardumbComponent implements OnInit {

  @Input() partidos: Partido[];
  @Output() selecionar = new EventEmitter();
  @Output() voltar = new EventEmitter();

  partidoSelecionado: Partido;

  constructor(private partidoServices: PartidosService) { }

  ngOnInit(): void {
  }

  onSelecionar(partido: Partido) {
    this.partidoSelecionado = partido;
    this.selecionar.emit(partido);
  }

  onVoltar() {
    this.voltar.emit();
  }

}
