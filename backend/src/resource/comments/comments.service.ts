import { Inject, Injectable } from '@nestjs/common';
import { COMMENTS_REPOSITORY } from 'src/database/index.repository';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments } from './entities/comments.entity';

@Injectable()
export class CommentsService {

  constructor(
    @Inject(COMMENTS_REPOSITORY)
    private commentsRepository: Repository<Comments>
) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentsRepository.create(createCommentDto);
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: number) {
    return this.commentsRepository.findOneBy({ id });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentsRepository.update({id}, updateCommentDto);
  }

  remove(id: number) {
    return this.commentsRepository.delete({id});
  }
}
