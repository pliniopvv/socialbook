import { ApiProperty } from '@nestjs/swagger';

export class CreatePartidoDto {
    id: number;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    sigla: string;

    @ApiProperty()
    numero: number;

    @ApiProperty()
    bandeira: string;
}
