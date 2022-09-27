import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments } from './entities/comments.entity';

@Injectable()
export class CommentsService {

  private commentsRepository: Repository<Comments>;

  constructor(
    private dataSource: DataSource
  ) {
    this.commentsRepository = dataSource.getRepository(Comments);
  }

  create(createCommentDto: CreateCommentDto) {
    let c = new Comments();
    c.feed = createCommentDto.feed;
    c.texto = createCommentDto.texto;
    c.usuario = createCommentDto.usuario;
    c.create_at = new Date();
    
    return this.commentsRepository.create(c);
  }

  findAll() {
    return this.commentsRepository.find();
  }

  findOne(id: number) {
    return this.commentsRepository.findOneBy({ id });
  }

  findAllByFeed(id: number) {
    return this.commentsRepository.find({where: {
      feed: {id}
    } });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.commentsRepository.update({id}, updateCommentDto);
  }

  remove(id: number) {
    return this.commentsRepository.delete({id});
  }
}
