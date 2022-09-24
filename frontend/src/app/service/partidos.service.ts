import { Injectable } from '@angular/core';
import { Partido } from '../model/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  private partidos: Partido[] = [{
    id: 0,
    nome: "Partido da Social Democracia Brasileira",
    numero: 45,
    sigla: "PSDB",
    bandeira: 'psdb.png'
  },{
    id: 1,
    nome: "Partido dos Trabalhadores",
    numero: 13,
    sigla: "PT",
    bandeira: 'pt.png'
  }
];

  constructor() { }

  create(partido: Partido) {
    this.partidos.push(partido);
  }

  get() {
    return this.partidos;
  }

  find(id: number) {
    return this.partidos.find(p => p.id == id);
  }

}
