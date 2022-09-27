import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';

export class CreateFotoDto {

    id: number;

    @ApiProperty()
    arquivo: string;

    @ApiProperty()
    originalName: string;

    @ApiProperty()
    usuario: Usuario;
}
