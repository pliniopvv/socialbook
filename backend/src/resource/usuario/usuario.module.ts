import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from 'src/database/database.providers';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature(Entities), AuthModule, JwtModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, AuthService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
