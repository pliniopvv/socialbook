import { ApiProperty } from '@nestjs/swagger';
import { Comments } from "src/resource/comments/entities/comments.entity";
import { Usuario } from "src/resource/usuario/entities/usuario.entity";

export class CreateFeedDto {
    id: number;

    @ApiProperty()
    usuario: Usuario;
    
    @ApiProperty()
    texto: string;
    
    create_at: Date = new Date();
    
    @ApiProperty()
    comments: Comments[] | null;
}
