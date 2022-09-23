import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'logar-component',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss']
})
export class LoginDumbComponent implements OnInit {

  login: string;
  senha: string;
  @Output() logar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onLogar() {
    this.logar.emit({login: this.login, senha: this.senha});
  }

}
