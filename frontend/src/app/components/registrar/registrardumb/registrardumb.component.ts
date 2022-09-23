import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrardumb',
  templateUrl: './registrardumb.component.html',
  styleUrls: ['./registrardumb.component.scss']
})
export class RegistrardumbComponent implements OnInit {

  login: string;
  senha: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLogar() {

  }

}
