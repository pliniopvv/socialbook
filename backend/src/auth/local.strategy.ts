import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'senha'
    });
  }

  async validate(login: string, senha: string): Promise<any> {
    const user = await this.authService.validateUser(login, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}