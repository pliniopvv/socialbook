import { Partido } from './partido';
export class Usuario {
  id: number;
  login: string;
  nome: string;
  apelido: string;
  senha: string;
  profile: string;
  partido: Partido;
}
