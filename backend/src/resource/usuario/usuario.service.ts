import { Inject, Injectable } from '@nestjs/common';
import { USUARIO_REPOSITORY } from 'src/database/index.repository';
import { Repository } from 'typeorm';
import { Partido } from '../partido/entities/partido.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(
    @Inject(USUARIO_REPOSITORY)
    private usuarioRepository: Repository<Partido>
) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.create(createUsuarioDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update({id}, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
