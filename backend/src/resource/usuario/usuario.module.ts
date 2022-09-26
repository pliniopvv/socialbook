import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from 'src/database/database.providers';

@Module({
  imports: [TypeOrmModule.forFeature(Entities)],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
