import { ApiProperty } from '@nestjs/swagger';
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
    profile: string;

    @ApiProperty()
    partido: Partido;
}
