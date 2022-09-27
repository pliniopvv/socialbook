import { Usuario } from './../../../model/usuario';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Partido } from 'src/app/model/partido';
import { PartidosService } from 'src/app/service/partidos.service';
import { debug, log } from 'src/app/utils/utils.tools';

@Component({
  selector: 'app-registrardumb',
  templateUrl: './registrardumb.component.html',
  styleUrls: ['./registrardumb.component.scss']
})
export class RegistrardumbComponent implements OnInit {

  // Mecânica
  @Input() partidos: Partido[];
  @Output() selecionar = new EventEmitter();
  @Output() voltar = new EventEmitter();

  paginacao: number = 0;
  maxPaginas: number = 1;

  // Dados formulário | Dumb -> Smart
  login: string;
  nome: string;
  telefone: string;
  foto: FormData;
  apelido: string;
  senha: string;
  senha2: string;
  partidoSelecionado: Partido;


  constructor(private partidoServices: PartidosService) { }

  ngOnInit(): void {
  }

  onSelecionar(partido: Partido) {
    this.partidoSelecionado = partido;
    debug('Partido selecionado > ', partido);
  }

  onVoltar() {
    if (this.paginacao == 0)
      this.voltar.emit();
    else
      this.paginacao--;
  }

  proximaPagina() {
    if (this.paginacao >= 1) {
      let u = new Usuario();

      u.login = this.login;
      u.nome = this.nome;
      u.senha = this.senha;
      u.apelido = this.apelido;
      u.partido = this.partidoSelecionado;

      this.selecionar.emit([{
        login: this.login,
        nome: this.nome,
        apelido: this.apelido,
        telefone: this.telefone,
        senha: this.senha,
        partido: this.partidoSelecionado }, this.foto]);
    } else
        this.paginacao++;
    }

    onSelectFile(ft: Event) {
      debug("registrardumb > ",ft);

      // @ts-ignore
      if (ft.srcElement.files.length > 0) {
        // @ts-ignore
        let arquivo = ft.srcElement.files[0] as File;
        let form = new FormData();
        form.append('foto', arquivo, arquivo.name)
        this.foto = form;
      }
    }

}
