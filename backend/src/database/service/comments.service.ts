import { Inject, Injectable } from '@nestjs/common';
import { Comments } from 'src/resource/comments/entities/comments.entity';
import { Repository } from 'typeorm';
import { COMMENTS_REPOSITORY } from '../index.repository';

@Injectable()
export class CommentsService {

    constructor(
        @Inject(COMMENTS_REPOSITORY)
        private usuarioRepository: Repository<Comments>
    ) {}

    async findAll(): Promise<Comments[]> {
        return this.usuarioRepository.find();
    }
}
