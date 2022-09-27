import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { debug } from 'src/app/utils/utils.tools';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  async logar(ev: any) {
    let { login , senha } = ev;
    let r = await this.auth.verify(login, senha);
    debug('login >' , r);
    this.router.navigate(['home']);
  }

}
