import { ApiProperty } from '@nestjs/swagger';
import { Foto } from 'src/resource/foto/entities/foto.entity';
import { Partido } from "src/resource/partido/entities/partido.entity";

export class CreateUsuarioDto {
    id: number;

    @ApiProperty()
    login: string;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    apelido: string;

    @ApiProperty()
    senha: string;

    @ApiProperty()
    foto: Foto[];

    @ApiProperty()
    partido: Partido;
}
