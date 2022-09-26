import { Module } from '@nestjs/common';
import { FeedModule } from './resource/feed/feed.module';
import { CommentsModule } from './resource/comments/comments.module';
import { PartidoModule } from './resource/partido/partido.module';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './database/database.providers';

let database = getDatabaseConfig();

@Module({
  imports: [
    TypeOrmModule.forRoot(database),
    FeedModule,
    CommentsModule,
    PartidoModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
