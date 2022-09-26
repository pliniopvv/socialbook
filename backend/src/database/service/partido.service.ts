import { Inject, Injectable } from '@nestjs/common';
import { Partido } from 'src/resource/partido/entities/partido.entity';
import { Repository } from 'typeorm';
import { PARTIDO_REPOSITORY } from '../index.repository';

@Injectable()
export class PartidoService {

    constructor(
        @Inject(PARTIDO_REPOSITORY)
        private usuarioRepository: Repository<Partido>
    ) {}

    async findAll(): Promise<Partido[]> {
        return this.usuarioRepository.find();
    }
}
