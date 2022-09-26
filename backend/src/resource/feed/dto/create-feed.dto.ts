import { Comments } from "src/resource/comments/entities/comments.entity";
import { Usuario } from "src/resource/usuario/entities/usuario.entity";

export class CreateFeedDto {
    id: number;
    usuario: Usuario;
    texto: string;
    create_at: Date;
    comments: Comments[] | null;
}
