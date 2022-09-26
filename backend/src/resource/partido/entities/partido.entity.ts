import { Usuario } from "src/resource/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
