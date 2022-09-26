import { Inject, Injectable } from '@nestjs/common';
import { PARTIDO_REPOSITORY } from 'src/database/index.repository';
import { Repository } from 'typeorm';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';

@Injectable()
export class PartidoService {

  constructor(
    @Inject(PARTIDO_REPOSITORY)
    private partidoRepository: Repository<Partido>
  ) {}
 
  create(createPartidoDto: CreatePartidoDto) {
    return this.partidoRepository.create(createPartidoDto);
  }

  findAll() {
    return this.partidoRepository.find();
  }

  findOne(id: number) {
    return this.partidoRepository.findOneBy({ id });
  }

  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    return this.partidoRepository.update({id}, updatePartidoDto);
  }

  remove(id: number) {
    return this.partidoRepository.delete({id});
  }
}
