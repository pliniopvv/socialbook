import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { debug } from 'src/app/utils/utils.tools';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuariosService,
     private auth: AuthenticationService
     ) { }

  ngOnInit(): void {
  }

  async logar(ev: any) {
    let { login , senha } = ev;
    let payload = await this.auth.verify(login, senha);
    if (payload) {
      // @ts-ignore
      this.auth.setToken(payload.access_token);
      let usuario = await this.usuarioService.me();
      this.auth.setUsuario(usuario);
      debug('login >' , payload);
      this.router.navigate(['home']);
    }
  }

}
