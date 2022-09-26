import { Inject, Injectable } from '@nestjs/common';
import { FEED_REPOSITORY } from 'src/database/index.repository';
import { Repository } from 'typeorm';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { Feed } from './entities/feed.entity';

@Injectable()
export class FeedService {
  constructor(
    @Inject(FEED_REPOSITORY)
    private usuarioRepository: Repository<Feed>
  ) {}

  create(createFeedDto: CreateFeedDto) {
    return this.usuarioRepository.create(createFeedDto);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return this.usuarioRepository.update({id}, updateFeedDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
