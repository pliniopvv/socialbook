import { Foto } from './foto';
import { Partido } from './partido';
export class Usuario {
  id: number;
  login: string;
  nome: string;
  apelido: string;
  senha: string;
  fotos: Foto[];
  partido: Partido;
}
