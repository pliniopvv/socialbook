import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/resource/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuarioService,
    private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const xuser = await this.usersService.find(username, pass) as Usuario[];
    let usuario;
    if (xuser.length > 0) {
      usuario = xuser[0] as Usuario;
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { username: user.login, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret
      }),
    };
  }
}