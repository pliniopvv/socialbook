import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-homedumb',
  templateUrl: './homedumb.component.html',
  styleUrls: ['./homedumb.component.scss']
})
export class HomedumbComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
