import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateFotoDto } from './dto/create-foto.dto';
import { UpdateFotoDto } from './dto/update-foto.dto';
import { Foto } from './entities/foto.entity';

@Injectable()
export class FotoService {

  private fotoRepository: Repository<Foto>;

  constructor(
    private dataSource: DataSource
  ) {
    this.fotoRepository = dataSource.getRepository(Foto);
  }

  create(createFotoDto: CreateFotoDto) {
    let u = new Foto();
    u.arquivo = createFotoDto.arquivo;
    u.usuario = createFotoDto.usuario;
    u.originalName = createFotoDto.originalName;

    return this.dataSource.manager.save(u);
  }

  findOne(id: number) {
    return this.fotoRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.fotoRepository.delete({id});
  }
}
