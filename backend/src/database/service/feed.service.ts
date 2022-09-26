import { Inject, Injectable } from '@nestjs/common';
import { Feed } from 'src/resource/feed/entities/feed.entity';
import { Repository } from 'typeorm';
import { FEED_REPOSITORY } from '../index.repository';

@Injectable()
export class FeedService {

    constructor(
        @Inject(FEED_REPOSITORY)
        private usuarioRepository: Repository<Feed>
    ) {}

    async findAll(): Promise<Feed[]> {
        return this.usuarioRepository.find();
    }
}
