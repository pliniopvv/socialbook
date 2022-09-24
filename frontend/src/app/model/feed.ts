import { Usuario } from "./usuario";

export class Feed {
  id: number;
  usuario: Usuario;
  texto: string;
  create_at: Date;
  comments: Feed[] | null;
}
