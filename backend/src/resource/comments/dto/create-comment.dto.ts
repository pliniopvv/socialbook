import { Usuario } from "src/resource/usuario/entities/usuario.entity";

export class CreateCommentDto {
  id: number;
  usuario: Usuario;
  texto: string;
  create_at: Date;
  feedId: number;
}
