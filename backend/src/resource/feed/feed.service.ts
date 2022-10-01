import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { Feed } from './entities/feed.entity';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class FeedService {
  
  private feedRepository: Repository<Feed>;
  
  constructor(
    private dataSource: DataSource
  ) {
    this.feedRepository = dataSource.getRepository(Feed);
  }

  create(createFeedDto: CreateFeedDto) {
    let f = new Feed();
    f.texto = createFeedDto.texto; 
    f.usuario = createFeedDto.usuario; 
    f.create_at = new Date();

    return this.dataSource.manager.save(f);
  }

  async findAll(options: IPaginationOptions) {
    const queryBuilder = this.feedRepository.createQueryBuilder('f');

    queryBuilder.orderBy('f.id','DESC');
    queryBuilder.leftJoinAndSelect('f.usuario','Usuario');
    queryBuilder.leftJoinAndSelect('Usuario.partido','Partido')
    queryBuilder.leftJoinAndSelect('f.comments','Comments');

    return paginate<Feed>(queryBuilder, options);
  }

  findOne(id: number) {
    return this.feedRepository.findOneBy({ id });
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.feedRepository.update({id}, updateFeedDto);
  }

  remove(id: number) {
    return this.feedRepository.delete({id});
  }
}
