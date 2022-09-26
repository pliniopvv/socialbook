import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { PartidoService } from './service/partido.service';
import { CommentsService } from './service/comments.service';
import { FeedService } from './service/feed.service';
import { UsuarioService } from './service/usuario.service';
import { GenericService } from './service/generic.service';

@Module({
  providers: [...databaseProviders, PartidoService, CommentsService, FeedService, UsuarioService, GenericService],
  exports: [...databaseProviders, PartidoService, CommentsService, FeedService, UsuarioService, GenericService],
})
export class DatabaseModule {}