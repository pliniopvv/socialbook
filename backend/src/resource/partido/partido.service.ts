import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';

@Injectable()
export class PartidoService {

  private partidoRepository: Repository<Partido>;

  constructor(
    private dataSource: DataSource
  ) {
    this.partidoRepository = dataSource.getRepository(Partido);
  }
 
  create(createPartidoDto: CreatePartidoDto) {
    let p = new Partido();
    p.bandeira = createPartidoDto.bandeira;
    p.nome = createPartidoDto.nome;
    p.numero = createPartidoDto.numero;
    p.sigla = createPartidoDto.sigla;
    return this.dataSource.manager.save(p);
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
