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
  feedId: number;
}
