import { Feed } from 'src/resource/feed/entities/feed.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from "src/resource/usuario/entities/usuario.entity";

export class CreateCommentDto {
  id: number;

  @ApiProperty()
  usuario: Usuario;
  
  @ApiProperty()
  texto: string;

  create_at: Date = new Date();

  @ApiProperty()
  feed: Feed;
}
