import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './resource/feed/feed.module';
import { CommentsModule } from './resource/comments/comments.module';
import { PartidoModule } from './resource/partido/partido.module';
import { UsuarioModule } from './resource/usuario/usuario.module';

@Module({
  imports: [FeedModule, CommentsModule, PartidoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
