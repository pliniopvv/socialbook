import { Inject, Injectable } from '@nestjs/common';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { USUARIO_REPOSITORY } from '../index.repository';

@Injectable()
export class UsuarioService {

    constructor(
        @Inject(USUARIO_REPOSITORY)
        private usuarioRepository: Repository<Usuario>
    ) {}

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }
}
