import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity()
export class Partido {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    sigla: string;
    @Column()
    numero: number;
    @Column()
    bandeira: string;

    @ManyToOne((type) => Usuario, (usuario) => usuario.partido)
    usuario: Usuario;
}
