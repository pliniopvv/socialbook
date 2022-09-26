import { Partido } from "src/resource/partido/entities/partido.entity";

export class CreateUsuarioDto {
    id: number;
    login: string;
    nome: string;
    apelido: string;
    senha: string;
    profile: string;
    partido: Partido;
}
